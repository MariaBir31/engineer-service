type FeatureCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    size?: "large" | "small" | "wide";
  };
  
  export default function FeatureCard({
    icon,
    title,
    description,
    size = "small",
  }: FeatureCardProps) {
    let sizeClass = "";
  
    if (size === "large") {
      sizeClass = "md:col-span-2";
    }
  
    if (size === "wide") {
      sizeClass = "md:col-span-2";
    }
  
    return (
        <div className={`group relative ${sizeClass}`}>
        {/* Свечение позади карточки */}
        <div
          className="
            absolute
            inset-0
            -z-10
            rounded-3xl
            bg-cyan-400/10
            blur-3xl
            opacity-0
            scale-90
            transition-all
            duration-500
            group-hover:opacity-100
            group-hover:scale-105
          "
        />
  
        {/* Карточка */}
        <div
          className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-zinc-900/60
          p-8
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-cyan-400/40
          hover:shadow-xl
        "
        >
          <div
            className="
              mb-6
              transition-transform
              duration-300
              group-hover:-translate-y-1
              group-hover:scale-110
            "
          >
            {icon}
          </div>
  
          <h3
            className="
              text-2xl
              font-semibold
              transition-colors
              duration-300
              group-hover:text-cyan-300
            "
          >
            {title}
          </h3>
  
          <p className="mt-4 leading-7 text-zinc-400">
            {description}
          </p>
  
          <div
            className="
              mt-8
              text-yellow-400
              transition-transform
              duration-300
              group-hover:translate-x-2
            "
          >
            →
          </div>
        </div>
      </div>
    );
  }