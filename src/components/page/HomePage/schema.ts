import { z } from "zod";
import { ContactMethod } from "./contactMethod";

const phoneNumberRegex = new RegExp("^0\\d{9,10}$");

export const telSchema = z.object({
  name: z.string().min(1).optional(),
  contactMethod: z.literal(ContactMethod.tel, {
    required_error: "お問い合わせ種別は必須項目です",
  }),
  tel: z.string().regex(phoneNumberRegex, "電話番号はハイフン無しの半角数字で入力してください"),
});

export const emailSchema = z.object({
  name: z.string().min(1).optional(),
  contactMethod: z.literal(ContactMethod.mail, {
    required_error: "お問い合わせ種別は必須項目です",
  }),
  email: z
    .string({ required_error: "メールアドレスは必須項目です" })
    .email({ message: "メールアドレスの形式が正しくありません" }),
});

export const formSchema = z.union([telSchema, emailSchema]);
