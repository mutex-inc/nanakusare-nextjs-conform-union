import type React from "react";

type Props = {
  children: React.ReactNode;
};

export const ContentsWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
