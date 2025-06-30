import Card from "@/components/base/card";
import CardGrid from "@/components/base/CardGrid";
import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Vision from "@/components/sections/Your Vision";

export default function WebApps() {
  const projects = [
  {
    title: 'Ristonic',
    category: 'Web Application',
    description:
      'lanMD is an innovative mobile application designed to bridge the gap between patients, doctors, and nurses by providing a seamless platform for online consultations',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/11/i_tablet_09-1024x576.jpg.webp',
      link: "/Page/WebApps/Ristonic"
  },
  {
    title: 'Washta',
    category: 'Software Development',
    description:
      'Washat is a car washing app that features a comprehensive dashboard to efficiently manage Shops, Invoices, Orders, Ratings, and Reviews.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/10/2-1-1024x576.jpeg.webp',
    link: "/Page/WebApps/Washta"
  },
  {
    title: 'Express Lumpers',
    category: 'Website Development',
    description:
      'The Express Lumpers portfolio website is a comprehensive showcase of lumper delivery, packaging, and machine operator services.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/oke-Desktop-Mockup-3-1024x576.jpg.webp',
    link: "/Page/WebApps/ExpressLumper"
  },
  {
    title: 'Otobucks',
    category: 'UI/UX Design',
    description:
      ' Otobucks is a comprehensive mobile application designed to simplify the process of car and home maintenance by connecting users with trusted service providers.',
    image:'https://testweb.devxonic.com/wp-content/uploads/2024/08/1-2-1024x576.jpg.webp',
     link: "/Page/WebApps/Otobucks"
  },
    {
    title: 'Asset Manager',
    category: 'Custom Application',
    description:
      'Asset Manager is a sophisticated mobile application designed to help businesses and individuals efficiently track and manage their assets through a dynamic and user-friendly dashboard.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/Dashboard02-1-1024x576.png.webp',
    link: "/Page/WebApps/AssetManager"
  },
    {
    title: 'Buttsapp Media',
    category: 'Website Development',
    description:
      'Buttsapp Media needed a sleek, modern portfolio website to showcase its wide range of media services, including branding, content creation, and digital marketing.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/buttsapp-1024x576.jpg.webp',
    link: "/Page/UiProjects/Buttsapp"
  },
];
    return(
        <>
        <Header/>
        <Heading
            title="Web Apps Projects"
            description="Explore our Web Applications projects that blend cutting-edge technology with creative solutions, delivering exceptional results tailored to your needs."
            className="max-w-2xl"
        />
        <CardGrid projects={projects} />
        <Vision/>
        <Footer/>
        </>
    )
}