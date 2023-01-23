import cn from "classnames";

const spinner = () => (
  <span class=" inline-block h-6 w-6 animate-spin rounded-full border-4 border-white border-b-transparent border-opacity-75"></span>
);

export const Button = ({
  children,
  variant,
  isLoading,
  className,
  ...props
}) => (
  <button
    className={cn(
      "min-w-[70px] rounded-md px-4 py-2 font-medium tracking-wide text-white antialiased transition",
      {
        "bg-slate-600 bg-opacity-5 text-slate-500 hover:bg-opacity-10 active:bg-blue-100 active:text-blue-700":
          variant === "default",
        "bg-blue-700 hover:bg-blue-600 active:bg-blue-800":
          variant === "primary",
        "bg-red-600 hover:bg-red-700": variant === "danger",
        "bg-green-600 hover:bg-green-700": variant === "success",
        "bg-yellow-600 hover:bg-yellow-700": variant === "warning",
        "bg-gray-600 hover:bg-gray-700": variant === "secondary",
      },
      className
    )}
    {...props}
  >
    {isLoading ? (
      <span className="flex items-center justify-center">{spinner()}</span>
    ) : (
      children
    )}
  </button>
);
