import AnimatedContent from "@/components/AnimatedContent";

const Title = ({ title }: { title: string }) => {
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
      className="text-center my-10"
    >
      <h1 className="font-script text-4xl text-[#E3853C] text-center">
        {title}
      </h1>
    </AnimatedContent>
  );
};

export default Title;
