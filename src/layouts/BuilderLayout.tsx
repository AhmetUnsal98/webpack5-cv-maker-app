import React from "react";

interface BuilderLayoutProps {
  children: React.ReactNode;
}

export const BuilderLayout: React.FC<BuilderLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};
