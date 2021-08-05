import React from "react";

const Footer = () => {
  const AboutData = [
    "How Airbnb works",
    "Newsroom",
    "Investors",
    "Airbnb Plus",
  ];

  const CommunityData = [
    "Accessibility",
    "This is not a real site",
    "It's an awesome clone",
    "Referrals",
    "Join community",
  ];

  const HostData = [
    "Register as a host",
    "Check available locations",
    "Verify yourself",
  ];

  const SupportData = [
    "Help center",
    "Trust & Safety",
    "Youtube",
    "Hundreds of customers",
    "Join now",
  ];

  return (
    <div className="grid grid-cols-1 px-32 text-gray-600 bg-gray-100 gap-y-10 items-top md:grid-cols-4 py-14">
      <div className="space-y-4 text-gray-800">
        <h5 className="text-lg font-bold select-none">ABOUT</h5>
        {AboutData.map((data) => (
          <p
            key={data}
            className="text-sm transition ease-out cursor-pointer hover:text-red-400 duration-400"
          >
            {data}
          </p>
        ))}
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold select-none">COMMUNITY</h5>
        {CommunityData.map((data) => (
          <p
            key={data}
            className="text-sm transition ease-out cursor-pointer hover:text-red-400 duration-400"
          >
            {data}
          </p>
        ))}
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold select-none">HOST</h5>
        {HostData.map((data) => (
          <p
            key={data}
            className="text-sm transition ease-out cursor-pointer hover:text-red-400 duration-400"
          >
            {data}
          </p>
        ))}
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold select-none">SUPPORT</h5>
        {SupportData.map((data) => (
          <p
            key={data}
            className="text-sm transition ease-out cursor-pointer hover:text-red-400 duration-400"
          >
            {data}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
