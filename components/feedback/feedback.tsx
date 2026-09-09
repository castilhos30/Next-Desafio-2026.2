interface TestimonialCardProps {
  content: string;
  name: string;
}

export function Feedback({ content, name }: TestimonialCardProps) {
  return (
    <div className="w-[320px] bg-[#FFF5F3] h-[386px] rounded-3xl p-8 shadow-lg flex flex-col justify-between items-center text-center border border-[#EED5D1]/40 hover:translate-y-[-15px] transition-transform duration-300">
      
      <p className="font-belleza text-[#B76E79] text-sm md:text-base leading-relaxed tracking-wide font-normal mb-8 break-all">
        &ldquo;{content}&rdquo;
      </p>

      <h3 className="font-cairo font-bold text-[#B76E79] text-xl md:text-2xl font-bold tracking-wide">
        {name}
      </h3>

    </div>
  );
}