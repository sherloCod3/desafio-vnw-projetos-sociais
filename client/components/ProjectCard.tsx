interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function ProjectCard({ image, title, description, buttonText, onButtonClick }: ProjectCardProps) {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-[358px] mx-auto">
      <div className="flex flex-col items-center gap-5 w-full">
        <div className="flex flex-col items-center gap-7 lg:gap-9 w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-[164px] rounded-[10px] object-cover"
          />
          <div className="flex flex-col items-start gap-5 lg:gap-[30px] w-full px-2">
            <h3 className="w-full text-brand-text-blue text-center font-source text-2xl lg:text-[30px] font-bold leading-[120%]">
              {title}
            </h3>
            <p className="w-full text-brand-text-blue text-center font-helvetica text-sm lg:text-base leading-[120%] overflow-hidden line-clamp-2 min-h-[38px]">
              {description}
            </p>
          </div>
        </div>
        <button
          onClick={onButtonClick}
          className="flex items-center justify-center w-[210px] h-[50px] px-9 py-2 bg-brand-blue text-white text-center font-source text-xl lg:text-2xl font-semibold rounded-[10px] hover:bg-brand-blue/90 transition-colors active:scale-95 transition-transform"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
