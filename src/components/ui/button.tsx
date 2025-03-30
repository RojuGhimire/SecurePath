import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-text px-8 py-3 text-white rounded-md focus:scale-[1.04] hover:scale-[1.04] transition duration-500 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
