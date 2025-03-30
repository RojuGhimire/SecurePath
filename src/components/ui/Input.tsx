/* eslint-disable prefer-const */
import * as React from "react";
import { cn } from "@/utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, labelClassName, ...props }, ref) => {
    const radius = 80; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <div>
        <label
          className={cn(
            "text-sm font-medium text-gray-950 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            labelClassName
          )}
        >
          {label}
        </label>
        <motion.div
          style={{
            background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="p-[1px] rounded-lg transition duration-300 group/input"
        >
          <input
            type={type}
            className={cn(
              `flex h-11 w-full border border-gray-300 bg-white text-gray-950 rounded-md px-3 py-2 focus:outline-none text-sm placeholder:text-neutral-400 group-hover/input:shadow-none transition duration-400
           `,
              className
            )}
            ref={ref}
            {...props}
          />
        </motion.div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
