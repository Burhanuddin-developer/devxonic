import { Heading } from "@/components/base/heading";
import AppDevelopment, { ServiceCardProps } from "@/components/sections/AppDevelopment";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Vision from "@/components/sections/Your Vision";
import { FaAndroid, FaApple, FaClock, FaGlobe, FaLayerGroup, FaReact } from "react-icons/fa";

export default function Realtime() {
  const services: ServiceCardProps[] = [
  {
    icon: <FaAndroid />,
    title: 'Android App Development',
    description: 'We transform your digital vision into reality with cutting-edge web development and customized solutions.',
  },
  {
    icon: <FaApple />,
    title: 'iOS App Development',
    description: 'We offer bespoke app development services, crafting unique solutions from the ground up.',
  },
  {
    icon: <FaGlobe />,
    title: 'Web App Development',
    description: 'Utilizing frameworks like React Native and Flutter, we build cross-platform applications that run smoothly.',
  },
  {
    icon: <FaClock />,
    title: 'Realtime App Development',
    description: 'We deliver real-time features for responsive and engaging app experiences.',
  },
  {
    icon: <FaReact />,
    title: 'React Native App Development',
    description: 'Harnessing the power of React Native for robust and performant apps.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'FullStack App Development',
    description: 'Comprehensive solutions from frontend to backend for scalable applications.',
  },
];
  return (
 <>
 <Header />
 <Heading
 title="App Development"
 description="Explore our App Development Services that blend cutting-edge technology with creative solutions, delivering exceptional results tailored to your needs."
 />
 <AppDevelopment services={services} 
 />
 <Vision/>
 <Footer/>
 </>
  );
}