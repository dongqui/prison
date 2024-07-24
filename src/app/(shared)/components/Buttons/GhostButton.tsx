import { HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {}

export default function GhostButton({
  children,
  ...rest
}: PropsWithChildren<Props>) {
  return <button {...rest}>{children}</button>;
}
