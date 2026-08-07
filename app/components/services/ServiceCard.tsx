type ServiceCardProps = {
    icon: string;
    title: string;
    count: number;
    price: string;
    features: string[];
  };
  
  export default function ServiceCard({
    icon,
    title,
    count,
    price,
    features,
  }: ServiceCardProps) {
    return (
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-[#121212]
          p-7
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-yellow-400/60
          hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]
        "
      >
        {/* Glow */}
  
        <div
          className="
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            bg-yellow-400/5
            blur-3xl
            transition
            duration-500
            group-hover:bg-yellow-400/10
          "
        />
  
        {/* Emoji */}
  
        <div className="text-5xl">
          {icon}
        </div>
  
        {/* Title */}
  
        <h3 className="mt-6 text-2xl font-bold">
          {title}
        </h3>
  
        {/* Count */}
  
        <p className="mt-2 text-zinc-400">
          {count} услуг
        </p>
  
        {/* Price */}
  
        <p className="mt-5 text-3xl font-bold text-yellow-400">
          {price}
        </p>
  
        <div className="mt-7 h-px bg-white/10" />
  
        {/* Features */}
  
        <div className="mt-7 space-y-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="
                flex
                items-center
                gap-3
                text-zinc-300
              "
            >
              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-yellow-400
                "
              />
  
              <span>{feature}</span>
            </div>
          ))}
        </div>
  
        {/* Button */}
  
        <button
          className="
            mt-8
            flex
            items-center
            gap-2
            font-semibold
            text-yellow-400
            transition
            group-hover:gap-4
          "
        >
          Подробнее
  
          <span>→</span>
        </button>
      </div>
    );
  }