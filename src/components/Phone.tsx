import Net from "@/assets/hero/net.svg";
import WiFi from "@/assets/hero/wi-fi.svg";

const Phone = ({ children }: { children: React.ReactNode }) => {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="border-4 border-[#f59d56] rounded-[60px] w-[300px] h-[600px] shadow-lg">
      <div className="w-full h-full border-6 border-black rounded-[55px] relative">
        <div className="w-20 h-6 z-5 bg-black rounded-full absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-1 h-18  bg-[#cc8448] rounded-r-full absolute -right-3.5 top-[150px] " />
        <div className="w-1 h-10  bg-[#cc8448] rounded-l-full absolute -left-3.5 top-[190px]" />
        <div className="w-1 h-10  bg-[#cc8448] rounded-l-full absolute -left-3.5 top-[140px] " />
        <div className="w-1 h-5  bg-[#cc8448] rounded-l-full absolute -left-3.5 top-[100px] " />
        <div className="w-full flex items-center justify-between pr-5.5 pl-10 py-3">
          <div className="text-xs font-semibold">{time}</div>
          <div className="flex items-center gap-1">
            <img src={Net} alt="net" className="size-4" />
            <img src={WiFi} alt="wi-fi" className="size-4" />
            <div className="w-6 h-3 border border-gray-400/50 rounded-[4px] p-px flex items-center justify-start relative">
              <div className="w-[70%] h-full bg-black rounded-[2px]" />
              <div className="w-[2px] h-1  bg-gray-400/50 rounded-r-full absolute -right-1 top-1/2 -translate-y-1/2 " />
            </div>
          </div>
        </div>
        <div className="w-full h-[calc(100%-40px)] rounded-b-[49px] flex items-center px-2 justify-center overflow-y-auto scrollbar-none bg-gray-500">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Phone;
