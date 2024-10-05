import { ContentsWrapper } from "@/components/common";
import Link from "next/link";
import type { FC } from "react";

export const HomePage: FC = () => {
  return (
    <ContentsWrapper>
      <h1>Home Page</h1>
      <p>This is the home page.</p>
      <p>
        Please edit <code>src/components/page/HomePage/page.tsx</code> to change
        the content of this page.
      </p>
      <Link href="/sample">Go to sample page</Link>
    </ContentsWrapper>
  );
};
