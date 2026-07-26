type FeatureCardProps = {
    title: string;
    text: string;
  };
  
  export default function FeatureCard({
    title,
    text,
  }: FeatureCardProps) {
    return (
      <div className="rounded-3xl bg-zinc-800 p-8">
        <h3 className="mb-4 text-2xl font-bold">
          {title}
        </h3>
  
        <p className="text-zinc-400">
          {text}
        </p>
      </div>
    );
  }