import { PropsWithChildren } from "react";

export default function TutorialLayout({
  children,
  ...props
}: PropsWithChildren) {
  return <>{children}</>;
}
