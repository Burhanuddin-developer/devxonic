"use client";

import ImageGallery from "@/components/base/image";
import { FaFilter, FaTable, FaChartLine } from "react-icons/fa";

export default function AlanMDApplication() {
    const cards = [
        {
            icon: <FaChartLine className="text-3xl mb-4" />,
            title: "Online Consultations",
            description:
                "Patients can easily connect with healthcare providers through secure online consultations. This feature allows for real-time communication, helping patients receive timely medical advice without the need for physical visits.",
        },
        {
            icon: <FaTable className="text-3xl mb-4" />,
            title: "Voice-Recorded Notes",
            description:
                "Doctors can streamline their workflow by recording patient notes directly through the app. These voice recordings are automatically converted into text and can be reviewed or edited as needed, making documentation quick and easy.",
            bg: "bg-black text-white",
        },
        {
            icon: <FaFilter className="text-3xl mb-4" />,
            title: "Nurse Management Portal",
            description:
                "Nurses have access to a dedicated management portal within AlanMD, where they can view, organize, and manage the notes and files associated with each patient. This feature streamlines patient care and ensures that all healthcare professionals are on the same page.",
            bg: "bg-black text-white",
        },
    ];
    const images = [
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Onboarding.png",
            alt: "Soccer Player",
            width: 250,
            height: 200,

        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Get-Started.png",
            alt: "Login UI",
            width: 250,
            height: 200,
            className: "mt-15"
        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Sign-In.png",
            alt: "Sign Up UI",
            width: 250,
            height: 200,
            className: "mt-30"
        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Forgot-Pass.png",
            alt: "Player Personality UI",
            width: 250,
            height: 200,
            className: "mt-45"
        },
    ];
    const Profile = [
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Home-1-1.png",
            alt: "Soccer Player",
            width: 250,
            height: 200,

        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Doctors-Category.png",
            alt: "Login UI",
            width: 250,
            height: 200,
        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Select-slot.png",
            alt: "Sign Up UI",
            width: 250,
            height: 200,
        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Confirm-Booking-1.png",
            alt: "Player Personality UI",
            width: 250,
            height: 200,
        },
    ];
    const Field = [
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Diagnostics.png",
            alt: "Soccer Player",
            width: 250,
            height: 200,

        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Notification.png",
            alt: "Login UI",
            width: 250,
            height: 200,
        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/History.png",
            alt: "Sign Up UI",
            width: 250,
            height: 200,
        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Blog.png",
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
                    AlanMD is an innovative mobile application designed to bridge the gap
                    between patients, doctors, and nurses by providing a seamless platform
                    for online consultations and efficient patient management. The app facilitates
                    remote healthcare by allowing patients to consult with doctors online, doctors
                    to make notes via voice recordings and attach relevant files, and nurses to
                    manage and organize these notes efficiently. Developed using React Native,
                    AlanMD is available on both the App Store and Google Play Store, ensuring
                    accessibility across iOS and Android devices.
                </p>
                <div className="space-y-6  mb-16 max-w-5xl">
                    <div className="flex flex-col md:flex-row ">
                        <strong className="md:w-60 text-2xl">The Challenge</strong>
                        <p className="md:w-2xl">
                            DEVXONIC leveraged React Native to develop a cross-platform application for AlanMD.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <strong className="md:w-60 text-2xl">Our Approach</strong>
                        <p className="md:w-2xl">

                            DEVXONIC designed AlanMD with a focus on user experience, creating an
                            intuitive interface that caters to the needs of patients, doctors, and nurses alike.
                        </p>
                    </div>
                </div>
    <h1 className="mb-5 text-2xl">Key Features</h1>
                <div className="grid md:grid-cols-3 md:ml-8 gap-8 md:w-240">
                
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className={`rounded-2xl p-10 border border-gray-700 hover:shadow-lg transition bg-gradient-to-b  hover:from-black hover:via-black via-20% hover:to-purple-700`}
                        >
                            <div className="ml-22 mb-6">{card.icon}</div>
                            <h3 className="text-md font-bold text-center mb-8">{card.title}</h3>
                            <p className="text-md text-gray-300 text-center">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <ImageGallery title="Best Services with Best Staff & Best Experience!" images={images} className="grid md:grid-cols-4 gap-4" />
            <ImageGallery title="Best Services with Best Staff & Best Experience!" images={Profile} className="grid md:grid-cols-4 gap-4" />
            <ImageGallery title="Features" images={Field} className="grid md:grid-cols-4 gap-4" />
            <div className=" border-b-1 border-gray-500">
                <h2 className="text-3xl md:text-5xl font-bold mt-20">Conclusion</h2>
                <p className="text-gray-300 leading-relaxed mt-8 mb-30">
                    AlanMD is a powerful tool for modern healthcare, simplifying the interaction between patients, doctors, and nurses through its innovative features and user-friendly design. Developed by DEVXONIC using the latest technologies, AlanMD stands out as a comprehensive solution for remote medical consultations and efficient patient management.                </p>
            </div>
        </section>
    );
}
