type ButtonProps = {
    children: React.ReactNode;
    href?: string;
  };
  
  export default function Button({ children, href }: ButtonProps) {
    const className = `
      inline-flex
      items-center
      justify-center
      rounded-full
      bg-cyan-400
      px-8
      py-4
      font-semibold
      text-black
      transition
      hover:scale-105
      hover:bg-cyan-300
    `;
  
    if (href) {
      return (
        <a href={href} className={className}>
          {children}
        </a>
      );
    }
  
    return (
      <button className={className}>
        {children}
      </button>
    );
  }