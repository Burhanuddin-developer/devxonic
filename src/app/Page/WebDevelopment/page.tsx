import { Heading } from "@/components/base/heading";
import AppDevelopment, { ServiceCardProps } from "@/components/sections/AppDevelopment";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Vision from "@/components/sections/Your Vision";
import { FaAndroid, FaApple, FaClock, FaGlobe, FaLayerGroup, FaReact, FaShopify, FaWordpress } from "react-icons/fa";

export default function WebDevelopment(){
 const services: ServiceCardProps[] = [
  {
    icon: <FaWordpress />,
    title: 'WordPress',
    description: 'We transform your digital vision into reality with cutting-edge web development and customized solutions.',
  },
  {
    icon: <FaShopify />,
    title: 'Shopify',
    description: 'We offer bespoke app development services, crafting unique solutions from the ground up.',
  },
  {
    icon: <FaGlobe />,
    title: 'Website Design & Development',
    description: 'Utilizing frameworks like React Native and Flutter, we build cross-platform applications that run smoothly.',
  },
  {
    icon: <FaWordpress />,
    title: 'Webflow',
    description: 'We transform your digital vision into reality with cutting-edge web development and customized solutions.',
  },
  {
    icon: <FaReact />,
    title: 'Full Stack Web Application Development',
    description: 'We offer bespoke app development services, crafting unique solutions from the ground up.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'Website Redesign',
    description: 'Utilizing frameworks like React Native and Flutter, we build cross-platform applications that run smoothly.',
  },
    {
    icon: <FaWordpress />,
    title: 'UI/UX',
    description: 'We transform your digital vision into reality with cutting-edge web development and customized solutions.',
  },
  {
    icon: <FaReact />,
    title: 'Custom Website Design',
    description: 'We offer bespoke app development services, crafting unique solutions from the ground up.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'Product Research',
    description: 'Utilizing frameworks like React Native and Flutter, we build cross-platform applications that run smoothly.',
  },
];
    return(
        <>
        <Header/>
        <Heading
        title="Web Development & Design"
        description="Explore our Web Development & Design Services that blend cutting-edge technology with creative solutions, delivering exceptional results tailored to your needs."
        />
         <AppDevelopment services={services} 
         />
        <Vision/>
        <Footer/>
        </>
    )
}