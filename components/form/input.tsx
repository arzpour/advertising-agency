import { Input as ShadcnInput } from "@/components/ui/input";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input: React.FC<IInputProps> = ({
  error,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-y-2 sm:w-full">
      <ShadcnInput
        className={`text-xs placeholder:text-xs placeholder:text-gray-600 outline-none focus:border-none focus:shadow-none
          ${error ? "border-red-400" : "border-gray-400"}
          ${className}
        `}
        {...props}
      />
      {!!error && (
        <p className="text-red-400 text-start text-xs font-semibold capitalize">
          {error}
        </p>
      )}
    </div>
  );
};
