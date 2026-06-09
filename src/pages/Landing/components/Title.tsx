import AnimatedContent from "@/components/AnimatedContent";
import { cn } from "@/lib/utils";

const Title = ({
  title,
  subtitle,
  description,
  className,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <AnimatedContent
      distance={100}
      direction="horizontal"
      reverse={true}
      duration={0.9}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0}
      className={cn("text-center my-10 space-y-4", className)}
    >
      <h2 className="text-xl font-light text-[#E3853C] text-center">
        {subtitle}
      </h2>
      <h1 className="font-script text-4xl text-gray-500  text-center">
        {title}
      </h1>
      <p className="font-script text-4xl font-medium text-[#E3853C] text-center">
        {description}
      </p>
    </AnimatedContent>
  );
};

export default Title;
