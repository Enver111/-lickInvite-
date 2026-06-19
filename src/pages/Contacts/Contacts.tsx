import { Clock } from "lucide-react";

import AnimatedContent from "@/components/AnimatedContent";
import { contacts, responseTime, workingHours } from "@/constants/contacts";
import Footer from "@/pages/Landing/components/Footer";
import Title from "@/pages/Landing/components/Title";

const Contacts = () => {
  return (
    <>
      <main className="  py-30 px-6 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <Title
            title="Свяжитесь с нами"
            subtitle="Контакты"
            description="мы на связи"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-border rounded-2xl overflow-hidden">
            {contacts.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <AnimatedContent
                  key={contact.label}
                  distance={60}
                  direction="vertical"
                  reverse={false}
                  duration={0.7 + i * 0.1}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.1}
                  delay={i * 0.08}
                  className="group bg-white p-8 hover:bg-[#fffaf6] transition-colors duration-300"
                >
                  <a
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    className="flex flex-col h-full"
                  >
                    <div className="mb-6 w-10 h-10 flex items-center justify-center border border-[#cc8448]/30 group-hover:border-[#cc8448] transition-all duration-300 rounded-lg">
                      <Icon size={18} className="text-[#cc8448]" />
                    </div>
                    <p
                      className="text-xs uppercase tracking-widest mb-2"
                      style={{
                        color: "#cc8448",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {contact.label}
                    </p>
                    <p
                      className="text-lg font-medium mb-2 text-[#0f0f0f]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {contact.value}
                    </p>
                    <p className="text-sm font-light text-black/50 mt-auto">
                      {contact.hint}
                    </p>
                  </a>
                </AnimatedContent>
              );
            })}

            <AnimatedContent
              distance={60}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0.4}
              className="group bg-[#0f0f0f] p-8 sm:col-span-2 lg:col-span-1"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 w-10 h-10 flex items-center justify-center border border-[#cc8448]/30 rounded-lg">
                  <Clock size={18} className="text-[#cc8448]" />
                </div>
                <p
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{
                    color: "#cc8448",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Время работы
                </p>
                <p
                  className="text-lg font-medium mb-2 text-white"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {workingHours}
                </p>
                <p className="text-sm font-light text-white/50 mt-auto">
                  {responseTime}
                </p>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contacts;
