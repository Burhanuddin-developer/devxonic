import CardGrid from "@/components/base/CardGrid";
import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Vision from "@/components/sections/Your Vision";

export default function Android() {
      const projects = [
  {
    title: 'Kickers',
    category: 'Mobile Application',
    description:
      'Kickers is a comprehensive mobile application designed to simplify the process of car and home maintenance by connecting users with trusted service providers.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/10/2-1024x576.jpeg.webp',
     link: '/Page/MobileApplication/Kickers',
  },
  {
    title: 'PPG Community',
    category: 'Mobile Application',
    description:
      'PPG is a dynamic mobile application developed by Devxonic to bring community-driven forums and an intuitive online store front together in one platform',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/10/ppg-11-1024x576.jpg.webp',
    link: '/Page/MobileApplication/PPGCommunity',
  },
  {
    title: 'AlanMD',
    category: 'Mobile Application',
    description:
      'AlanMD is an innovative mobile application designed to bridge the gap between patients, doctors, and nurses by providing a seamless platform for online consultations',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/Alan-MD-Mock-1024x576.png.webp',
  },
  {
    title: 'onlyFTW',
    category: 'User Interface Design',
    description:
      'The Express Lumpers portfolio website is a comprehensive showcase of lumper delivery, packaging, and machine operator services.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/10/Cover-1024x576.png.webp',
  },
    {
    title: 'Otobucks',
    category: 'Mobile Application',
    description:
      'The Express Lumpers portfolio website is a comprehensive showcase of lumper delivery, packaging, and machine operator services.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/Oto-buck-3-1024x576.jpg.webp',
  },
];
  return (
    <>
    <Header/>
    <Heading
    title="Android App Development"
    description="Explore our Android App Development projects that blend cutting-edge technology with creative solutions, delivering exceptional results tailored to your needs."
    />
     <CardGrid projects={projects}  />;
    <Vision/>
    <Footer/>
    </>
  );
}