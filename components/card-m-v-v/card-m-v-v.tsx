import { ReactNode } from "react";

interface CardMVVProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export function CardMVV({ title, description, icon }: CardMVVProps) {
  return (
    <div className="bg-[#B16E77] w-full max-w-[300px] min-h-[350px] rounded-2xl p-8 flex flex-col items-center justify-between text-white shadow-md border border-[#EED5D1]/20">
      <div className="flex flex-col items-center w-full">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-wide">
          {title}
        </h3>
        <p className="text-center text-sm md:text-base font-light leading-relaxed text-white/90">
          {description}
        </p>
      </div>
      <div className="mt-8">
        {icon}
      </div>
    </div>
  );
}