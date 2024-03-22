import { InputHTMLAttributes } from "react";

type RadioInputProps = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean;
};

export function RadioInput({
  children /* , isSelected */,
  ...rest
}: RadioInputProps) {
  return (
    <label
      className={`flex gap-3 p-4 items-center bg-base-button rounded-md border-[1px] border-solid border-transparent text-base-text uppercase text-xs`}
    >
      <input type="radio" {...rest} className="hidden" />
      {children}
    </label>
  );
}
