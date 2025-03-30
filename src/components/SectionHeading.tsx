import { cn } from "@/utils/cn";

const SectionHeading = ({
  sectionTitle,
  className,
}: {
  sectionTitle: string;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-3xl font-bold capitalize text-zinc-950 text-center",
        className
      )}
    >
      {sectionTitle}
    </h1>
  );
};

export default SectionHeading;
