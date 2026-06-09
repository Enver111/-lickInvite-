import logo from "@/assets/logo/logo.svg";

const Logotype = () => {
  return (
    <div className="flex items-end gap-2 text-[#E3853C]">
      <img src={logo} alt="logotype" className="size-9" />
      <span className="text-xl font-script font-extrabold ">ClickInvite</span>
    </div>
  );
};

export default Logotype;
