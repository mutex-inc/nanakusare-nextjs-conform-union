import { NextResponse } from "next/server";

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|.*\\.svg$).*)"],
  api: {
    externalResolver: true,
  },
};

export function middleware() {
  return NextResponse.next();
}
