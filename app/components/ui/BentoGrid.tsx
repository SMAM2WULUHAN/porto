import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-6 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-3xl group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-[#30344B] justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 35%, rgba(64,69,70,1) 100%)",
      }}
    >
      {/* Container untuk gambar */}
      <div className="relative w-full h-64 overflow-hidden rounded-t-3xl border-b border-[#30344B]">
        {img && (
          <img
            src={img}
            alt="Main Image"
            className={cn(
              imgClassName,
              "object-cover object-center w-full h-full"
            )}
          />
        )}
        {spareImg && (
          <img
            src={spareImg}
            alt="Spare Image"
            className="absolute inset-0 object-cover object-center w-full h-full opacity-50"
          />
        )}

        {/* Animasi Background untuk ID === 6 */}
        {id === 6 && (
          <div className="relative w-full h-64 overflow-hidden rounded-t-3xl">
            <BackgroundGradientAnimation>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center">
                <p className="text-2xl lg:text-3xl font-bold">
                  Do you want to start a project together?
                </p>
              </div>
            </BackgroundGradientAnimation>
          </div>
        )}
      </div>

      {/* Deskripsi */}
      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative flex flex-col space-y-2"
        )}
      >
        <div className="font-sans font-bold text-lg lg:text-3xl text-white">
          {title}
        </div>
        <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base">
          {description}
        </div>
      </div>

      {/* Skill tags untuk ID === 3 */}
      {id === 3 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "React.js",
            "Next.js",
            "Laravel",
            "HTML",
            "CSS",
            "PHP",
            "Bootstrap 5",
            "TailwindCSS",
          ].map((item) => (
            <div
              key={item}
              className="py-2 px-4 text-sm lg:text-base text-white bg-[#10132E] rounded-md border border-[#30344B] flex items-center justify-center shadow-md"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
