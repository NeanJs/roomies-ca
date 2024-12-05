type ButtonProps = {
  children: any;
  className?: string;
};
export const Button = ({ children, className }: ButtonProps) => (
  <button
    className={`bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 ${className}`}
  >
    {children}
  </button>
);
