import logo from "../../Assets/logo.png";

const ContactUs = () => {
  return (
    <div className="flex items-center fixed right-2 bottom-4 text-white bg-[#6E6ED9] rounded-3xl px-3 py-2 gap-2 z-10">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img src={logo} alt="logo" />
      </div>
      <span>Need Help?</span>
    </div>
  );
};

export default ContactUs;
