import CardGrid from "@/components/base/CardGrid";
import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Vision from "@/components/sections/Your Vision";


export default function UiProjects(){
  const projects = [
  {
    title: 'onlyFTW',
    category: 'User Interface Design',
    description:
      'The Express Lumpers portfolio website is a comprehensive showcase of lumper delivery, packaging, and machine operator services.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/10/Cover-1024x576.png.webp',
      link: "/Page/UiProjects/FTW"
  },
    {
    title: 'Buttsapp',
    category: 'Website Development',
    description:
      'Buttsapp Media needed a sleek, modern portfolio website to showcase its wide range of media services, including branding, content creation, and digital marketing.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/buttsapp-1024x576.jpg.webp',
    link: "/Page/UiProjects/Buttsapp"
  },
    {
    title: 'Otobucks',
    category: 'Mobile Application',
    description:
      'The Express Lumpers portfolio website is a comprehensive showcase of lumper delivery, packaging, and machine operator services.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/Oto-buck-3-1024x576.jpg.webp',
    link:"/Page/UiProjects/Otobucks"
  },
];
    return(
        <>
        <Header/>
        <Heading
            title="UI Projects"
            description="Explore our UI projects that blend cutting-edge technology with creative solutions, delivering exceptional results tailored to your needs."
            className="md:w-2xl justify-center"
        />
          <CardGrid projects={projects}   />;
          <Vision/>
          <Footer/>
        </>
    )
}