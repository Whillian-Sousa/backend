import { ForwardRefRenderFunction, forwardRef } from "react";

interface IInput {
  placeholder: string
  type: string
  title: string
}
export const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { placeholder, type, title, ...rest },
  ref
) => {
  return (
    <div className="mb-4 text-blue font-medium">
      <label htmlFor="">{title}</label>
      <input
        className="w-full px-6 py-[5px] bg-white rounded-lg border border-teal-400"
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    </div>
  );
};
export const Input = forwardRef(InputBase);
