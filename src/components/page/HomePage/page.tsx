"use client";
import { ContentsWrapper } from "@/components/common";
import { useEffect, type FC } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

import { useForm, getFormProps, getInputProps } from "@conform-to/react";
import { ContactMethod } from "./contactMethod";
import {
  buttonContainer,
  buttonText,
  contactInput,
  formContainer,
  formContent,
  formErrorMessage,
  formTitleText,
  inputButton,
  inputContainer,
  inputLabel,
  noRequired,
  radioContainer,
  radiosContainer,
} from "./style.css";
import { submit } from "./actions";
import { emailSchema, telSchema } from "./schema";
import { parseWithZod } from "@conform-to/zod";

type Props = {
  initialValue?: { [key: string]: string };
};

export const HomePage: FC<Props> = ({ initialValue }) => {
  const contactMethods = Object.values(ContactMethod);

  const [lastResult, action] = useFormState(submit, initialValue);

  const [form, fields] = useForm({
    lastResult,
    defaultValue: initialValue,
    onValidate({ formData }) {
      const contactFormData = formData.get("contactMethod");
      const contact =
        contactFormData != null && typeof contactFormData === "string" ? contactFormData : null;
      const schema = contact === ContactMethod.mail ? emailSchema : telSchema;
      return parseWithZod(formData, { schema });
    },
    shouldValidate: "onInput",
    shouldRevalidate: "onInput",
  });

  useEffect(() => {
    if (
      lastResult?.error != undefined &&
      lastResult?.error[""] != null &&
      lastResult?.error[""][0] == "mistakes" &&
      !toast.isActive("contact")
    ) {
      toast.error("入力内容に誤りがあります", {
        toastId: "contact",
      });
    }
    if (
      lastResult?.error != undefined &&
      lastResult?.error[""] != null &&
      lastResult?.error[""][0] == "error" &&
      !toast.isActive("contact-error")
    ) {
      toast.error("送信できませんでした", {
        toastId: "contact",
      });
    }
  }, [lastResult?.error]);

  console.log("fields", fields.name.value);
  // console.log("form", form.name.value);
  console.log("fields", fields.contactMethod.value);

  return (
    <ContentsWrapper>
      <div className={formContainer}>
        <form action={action} {...getFormProps(form)} noValidate className={formContent}>
          <span className={formTitleText}>以下のフォームに入力してください</span>
          <div className={inputContainer}>
            <label htmlFor={fields.name.id} className={inputLabel}>
              お名前
              {fields.name.valid ? (
                <></>
              ) : (
                <span className={formErrorMessage}>{fields.name.errors}</span>
              )}
            </label>
            <input
              {...getInputProps(fields.name, { type: "text" })}
              key={fields.name.key}
              className={contactInput}
              placeholder="例）山田太郎"
              required
            />
          </div>
          <div className={inputContainer}>
            <label htmlFor={fields.contactMethod.id} className={inputLabel}>
              連絡方法
              {fields.contactMethod.valid ? (
                <></>
              ) : (
                <span className={formErrorMessage}>{fields.contactMethod.errors}</span>
              )}
            </label>
            <div className={radiosContainer}>
              {contactMethods.map((contactMethod) => (
                <label key={contactMethod} className={radioContainer}>
                  <input
                    {...getInputProps(fields.contactMethod, { type: "radio" })}
                    key={fields.contactMethod.key}
                    value={contactMethod}
                    className={inputButton}
                    required
                    defaultChecked={fields.contactMethod.value === contactMethod}
                  />
                  {contactMethod}
                </label>
              ))}
            </div>
          </div>
          {fields.contactMethod.value === ContactMethod.mail && (
            <div className={inputContainer}>
              <label htmlFor={fields.email.id} className={inputLabel}>
                Eメール
                {fields.email.valid ? (
                  <></>
                ) : (
                  <span className={formErrorMessage}>{fields.email.errors}</span>
                )}
              </label>
              <input
                {...getInputProps(fields.email, { type: "email" })}
                key={fields.email.key}
                className={contactInput}
                placeholder="例）exsample@gmail.com"
                required
              />
            </div>
          )}
          {fields.contactMethod.value === ContactMethod.tel && (
            <div className={inputContainer}>
              <label htmlFor={fields.tel.id} className={inputLabel}>
                電話番号
                {fields.tel.value == undefined ? (
                  <span className={noRequired}>省略可</span>
                ) : (
                  <span className={formErrorMessage}>{fields.tel.errors}</span>
                )}
              </label>
              <input
                {...getInputProps(fields.tel, { type: "tel" })}
                key={fields.tel.key}
                className={contactInput}
                placeholder="例）0123456789"
                required
              />
            </div>
          )}
          <button type="submit" aria-disabled={!form.valid} className={buttonContainer}>
            <span className={buttonText}>送信</span>
          </button>
        </form>
      </div>
    </ContentsWrapper>
  );
};
