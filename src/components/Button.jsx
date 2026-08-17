import { twMerge } from "tailwind-merge";

export default function Button({ className, text, ...props }) {
  return (
    <button
      className={twMerge(
        "py-3 cursor-pointer hover:scale-95 hover:transition-all px-7",
        className,
      )}
      {...props}
    >
      {text}
    </button>
  );
}
