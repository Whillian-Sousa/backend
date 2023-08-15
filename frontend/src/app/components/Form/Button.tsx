interface IButtonProps {
  title: string;
  className?: string;
}

export const Button = ({ title, className }: IButtonProps) => {
  return (
    <div className={`flex items-center justify-center text-white w-ful`}>
      <button
        className={`bg-blue rounded-2xl px-4 py-2 w-full ${className}`}
      >
        {title}
      </button>
    </div>
  );
};
