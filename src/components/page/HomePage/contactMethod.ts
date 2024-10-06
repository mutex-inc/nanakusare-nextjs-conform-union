export const ContactMethod = {
  tel: "お電話でのお問い合わせ",
  mail: "メールでのお問い合わせ",
} as const;

export type ContactMethod = (typeof ContactMethod)[keyof typeof ContactMethod];
