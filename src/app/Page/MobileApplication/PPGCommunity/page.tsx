import CardGrid from "@/components/base/CardGrid";
import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Vision from "@/components/sections/Your Vision";

export default function PPGCommunity() {
  const projects = [
    {
      title: 'PPG Community',
      category: 'Mobile Application',
      description:
        'PPG is a dynamic mobile application developed by Devxonic to bring community-driven forums and an intuitive online store front together in one platform.',
      image: 'https://testweb.devxonic.com/wp-content/uploads/2024/10/ppg-11-1024x576.jpg.webp',
      link: '/MobileApplication/ppg-community',
    },
  ];

  return (
    <>
      <Header />
      <Heading
        title="PPG Community"
        description="Explore the PPG Community, a mobile application that connects users through community-driven forums and an intuitive online store."
        className="max-w-2xl"
      />
      <CardGrid projects={projects} />
      <Vision />
      <Footer />
    </>
  );
}