import Phone from "@/components/Phone";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/BlurText";
import AnimatedContent from "@/components/AnimatedContent";

const Hero = () => {
  return (
    <section className="mt-20 container mx-auto h-[calc(100vh-85px)] flex items-center justify-center">
      <div className="flex items-center justify-center gap-10">
        <div className="w-1/2  ">
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
            className="flex flex-col gap-6 "
          >
            <BlurText
              className="text-4xl text-[#E3853C] font-bold"
              text="Стильные веб-приглашения на ваше событие за 15 минут"
            />
            <p className="text-lg md:text-xl text-gray-500">
              Создайте незабываемое первое впечатление. Отправьте гостям
              красивые интерактивные приглашения с RSVP и получите статистику в
              реальном времени.
            </p>
            <div className="flex items-center gap-2 mx-auto">
              <Button className="h-10 px-6">Выбрать шаблон</Button>
              <Button className="h-10 px-6" variant="outline">
                Как это работает?
              </Button>
            </div>
          </AnimatedContent>
        </div>
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <Phone>
            Для удобства программистов в каждом браузере есть специальная панель
            разработчика. Чтобы открыть эту панель, вам нужно, находясь на
            странице сайта кликнуть правой кнопкой мышки в любое место. В
            появившемся меню нужно выбрать самый нижний пункт (он будет
            называться Inspect или как-то похоже на это). В открывшейся панели
            вы в основном будете пользоваться двумя вкладками: Elements и
            Console. В первой вкладке вы можете получать информацию по тегам
            страницы, а во второй - отладочную информацию JavaScript. Давайте
            разберемся с возможностями консоли. С помощью специальной команды
            console.log вы в своих скриптах можете выводить данные в консоль.
            Это применяется для того, чтобы заниматься отладкой программ.
            Давайте для примера что-нибудь выведем в консоль: Для удобства
            программистов в каждом браузере есть специальная панель
            разработчика. Чтобы открыть эту панель, вам нужно, находясь на
            странице сайта кликнуть правой кнопкой мышки в любое место. В
            появившемся меню нужно выбрать самый нижний пункт (он будет
            называться Inspect или как-то похоже на это). В открывшейся панели
            вы в основном будете пользоваться двумя вкладками: Elements и
            Console. В первой вкладке вы можете получать информацию по тегам
            страницы, а во второй - отладочную информацию JavaScript. Давайте
            разберемся с возможностями консоли. С помощью специальной команды
            console.log вы в своих скриптах можете выводить данные в консоль.
            Это применяется для того, чтобы заниматься отладкой программ.
            Давайте для примера что-нибудь выведем в консоль:
          </Phone>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Hero;
