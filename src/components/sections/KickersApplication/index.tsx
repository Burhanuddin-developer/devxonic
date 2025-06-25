"use client";

import ImageGallery from "@/components/base/image";
import { FaMobileAlt, FaLaptop, FaPalette } from "react-icons/fa";

export default function KickersApplication() {
  const images = [
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Splash-Screen-5.png",
      alt: "Soccer Player",
      width: 250,
      height: 200,

    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Group-1-2.png",
      alt: "Login UI",
      width: 250,
      height: 200,
      className: "mt-15"
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Group-1-3.png",
      alt: "Sign Up UI",
      width: 250,
      height: 200,
      className: "mt-30"
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Profile-Position.png",
      alt: "Player Personality UI",
      width: 250,
      height: 200,
      className: "mt-45"
    },
  ];
  const Profile = [
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Group-1-4.png",
      alt: "Soccer Player",
      width: 250,
      height: 200,

    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Group-1-5.png",
      alt: "Login UI",
      width: 250,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Group-1-6.png",
      alt: "Sign Up UI",
      width: 250,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Group-2.png",
      alt: "Player Personality UI",
      width: 250,
      height: 200,
    },
  ];
  const Field = [
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Reserve-A-Field.png",
      alt: "Soccer Player",
      width: 250,
      height: 200,

    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Find-a-Game.png",
      alt: "Login UI",
      width: 250,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Find-a-Game-Individual.png",
      alt: "Sign Up UI",
      width: 250,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Reserve-A-Field-1.png",
      alt: "Player Personality UI",
      width: 250,
      height: 200,
    },
  ];
  const Settings = [
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Settings.png",
      alt: "Soccer Player",
      width: 250,
      height: 200,

    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Edit-Profile-1.png",
      alt: "Login UI",
      width: 250,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Payment-Selection.png",
      alt: "Sign Up UI",
      width: 250,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Add-Card.png",
      alt: "Player Personality UI",
      width: 250,
      height: 200,
    },
  ];
  const Security = [
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Notification-1.png",
      alt: "Soccer Player",
      width: 250,
      height: 200,

    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Security.png",
      alt: "Login UI",
      width: 250,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Security-Change-Password.png",
      alt: "Sign Up UI",
      width: 250,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Logout.png",
      alt: "Player Personality UI",
      width: 250,
      height: 200,
    },
  ];
  return (
    <section className="bg-[#020617] text-white px-6 py-16 page-section">
      <div className="max-w-6xl mx-auto section-container">
        {/* Overview Text */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Overview</h2>
        <p className="text-gray-300 leading-relaxed mb-12">
          Otobucks is a comprehensive website designed to simplify the process of car and home maintenance by connecting users with trusted service providers. Otobucks is a comprehensive mobile application designed to simplify the process of car and home maintenance by connecting users with trusted service providers. Whether it’s diagnostic engine repair, oil changes, tire services, or home services like plumbing, smart home setup, or renovations, Otobucks ensures that users receive high-quality, reliable services with just a few clicks. The app caters to a wide range of needs, making it a go-to platform for those seeking convenient and efficient solutions for both car and home maintenance.
        </p>

        {/* Design Features */}
        <div className="grid md:grid-cols-3 gap-6 text-center md:h-100 md:w-250 md:ml-8">
          <div className="border rounded-3xl p-6 ">
            <FaMobileAlt className="text-4xl text-white mb-6 mx-auto mt-5" />
            <h3 className="text-md font-semibold mb-4">User-Centered Design</h3>
            <p className="text-gray-400 p-5">
              DEVXONIC used a user-centered design approach for Otobucks, guided by in-depth research and personas, resulting in an intuitive, responsive UI that boosts user engagement and satisfaction.
            </p>
          </div>
          <div className="border rounded-3xl p-6 ">
            <FaLaptop className="text-4xl text-white mb-6 mx-auto mt-5" />
            <h3 className="text-md font-semibold mb-4">Responsive Design</h3>
            <p className="text-gray-400 p-5">
              DEVXONIC ensured a consistent user experience for Otobucks by implementing a responsive design that adapts seamlessly across smartphones, tablets, and desktops.
            </p>
          </div>
          <div className="border rounded-3xl p-6 ">
            <FaPalette className="text-4xl text-white mb-6 mx-auto mt-5" />
            <h3 className="text-md font-semibold mb-4">Visual Consistency</h3>
            <p className="text-gray-400 p-5">
              DEVXONIC ensured visual consistency across Otobucks by unifying buttons, icons, typography, and colors, strengthening brand identity and making navigation easier for users.
            </p>
          </div>
        </div>
      </div>
      <ImageGallery title="Join Kickers Now" images={images} />
      <ImageGallery title="Profile Setup" images={Profile} />
      <ImageGallery title="Reserve A Field" images={Field} />
      <ImageGallery title="Settings" images={Settings} />
      <ImageGallery title="Security" images={Security} />
     <div className=" border-b-1 border-gray-500">
       <h2 className="text-3xl md:text-5xl font-bold mt-20">Conclusion</h2>
      <p className="text-gray-300 leading-relaxed mt-8 mb-30">
    Otobucks is revolutionizing the way people manage car and home maintenance by offering a seamless, user-friendly platform that connects users with top-notch service providers. Developed with the expertise of DEVXONIC’s UI design team, Otobucks stands out as a trusted solution for anyone seeking high-quality, reliable services. Whether it’s ensuring your car is in peak condition or maintaining your home, Otobucks makes life easier by bringing the best service providers to your fingertips.
      </p>
     </div>
    </section>
  );
}
