import React from "react";

const FooterLinks = [
  {
    title: "About",
    links: [
      {
        id: 1,
        href: "",
        link: "How Airbnb Works",
      },
      {
        id: 2,
        link: "Newsroom",
      },
      {
        id: 3,
        link: "Airbnb 2021",
      },
      {
        id: 4,
        link: "Investors",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        id: 1,
        link: "Diversity & Belonging",
      },
      {
        id: 2,
        link: "Accessibility",
      },
      {
        id: 3,
        link: "Airbnb Associates",
      },
      {
        id: 4,
        link: "Guest Referrals",
      },
      {
        id: 5,
        link: "Frontline Stays",
      },
    ],
  },
  {
    title: "Host",
    links: [
      {
        id: 1,
        link: "Host Your Home",
      },
      {
        id: 2,
        link: "Host an Online Experience",
      },
      {
        id: 3,
        link: "Resource Centre",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        id: 1,
        link: "Our COVID-19 Response",
      },
      {
        id: 2,
        link: "Help Centre",
      },
      {
        id: 3,
        link: "Cancellation Options",
      },
      {
        id: 4,
        link: "Neighbourhood Support",
      },
      {
        id: 5,
        link: "Trust & Safety",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="grid grid-cols-1 px-32 text-gray-600 bg-gray-100 gap-y-10 items-top md:grid-cols-4 py-14">
      {FooterLinks.map((data) => (
        <>
          <div key={data.title} className="space-y-2 text-gray-800">
            <h5 className="text-lg font-bold uppercase select-none">
              {data.title}
            </h5>
            {data.links.map((item, index) => {
              return (
                <p
                  className="text-sm transition ease-out cursor-pointer hover:text-red-400 duration-400"
                  key={index}
                >
                  {item.link}
                </p>
              );
            })}
          </div>
        </>
      ))}
    </div>
  );
};

export default Footer;
