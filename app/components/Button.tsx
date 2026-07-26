type ButtonProps = {
    children: React.ReactNode;
  };
  
  export default function Button({ children }: ButtonProps) {
    return (
      <button
        className="
          rounded-full
          bg-cyan-400
          px-8
          py-4
          font-semibold
          text-black
          transition
          hover:scale-105
          hover:bg-cyan-300
        "
      >
        {children}
      </button>
    );
  }