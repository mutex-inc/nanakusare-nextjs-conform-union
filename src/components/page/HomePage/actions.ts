"use server";

import { parseWithZod } from "@conform-to/zod";

import { formSchema } from "./schema";
import { redirect } from "next/navigation";

const NotionDatabaseColumn = {
  date: "作成日時",
  organizationName: "組織名",
  departmentName: "部署名",
  role: "役職",
  name: "ご担当者氏名",
  email: "メールアドレス",
  tel: "電話番号",
  business: "ご用件",
  budget: "ご予算",
  term: "想定期間",
  content: "お問い合わせ内容",
  position: "採用役職",
  experience: "経歴",
} as const;

export const submit = async (state: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: formSchema,
  });

  if (submission.status !== "success") {
    return submission.reply({
      formErrors: ["mistakes"],
    });
  }

  try {
    console.log("submission", submission);
  } catch {
    return submission.reply({
      formErrors: ["error"],
    });
  }

  redirect("/thanks");
};
