import { InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  /* containerProps?: HTMLAttributes<HTMLDivElement> */
  /* error?: FieldError */
};

export function TextInput({ optional = false, ...rest }: TextInputProps) {
  return (
    <label
      className={`flex gap-1 p-3 items-center cursor-text bg-base-input rounded border-[1px] border-base-button focus-within:border-yellow-dark`}
    >
      <input
        type="text"
        {...rest}
        className="flex flex-1 border-none outline-none bg-transparent text-sm placeholder:text-base-label "
      />
      {optional && (
        <span className="text-base-label italic text-xs">Opcional</span>
      )}
    </label>
  );
}
