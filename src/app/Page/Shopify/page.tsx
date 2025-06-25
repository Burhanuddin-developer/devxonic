import Card from "@/components/base/card";
import CardGrid from "@/components/base/CardGrid";
import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Vision from "@/components/sections/Your Vision";

export default function Shopify() {
  const projects = [
  {
    title: 'Maiesa',
    category: 'Website Development',
    description:
      'Maiesa is a Shopify e-commerce platform dedicated to offering a delightful shopping experience for customers looking for toys, keychains, and bags',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2025/05/Affordable-Solar-Panel-Cleaning-Products-For-Sale-In-Pakistan-PVCARE-%E2%80%93-PVCARE-05-08-2025_10_33_PM-768x4017.png',
    link:"/Page/Shopify/SMby"
  },
  {
    title: 'Express Lumpers',
    category: 'Website Development',
    description:
      'The Express Lumpers portfolio website is a comprehensive showcase of lumper delivery, packaging, and machine operator services.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2025/05/Maiesa-05-08-2025_10_33_PM-768x2803.png',
     link:"/Page/Shopify/SMby"
  },
  {
    title: 'SMbyHinaFahad',
    category: 'Website Development',
    description:
      'SMbyHinaFahad is a Shopify e-commerce platform dedicated to offering a delightful shopping experience for customers looking for toys, keychains, and bags',
    image:'https://testweb.devxonic.com/wp-content/uploads/2024/08/SM-1024x576.jpg.webp',
     link:"/Page/Shopify/SMby"
  },
    
];
    return(
        <>
        <Header/>
        <Heading
            title="Shopify Projects"
            description="Explore our Shopify projects that blend cutting-edge technology with creative solutions, delivering exceptional results tailored to your needs."
            className="max-w-2xl"
        />
        <CardGrid projects={projects} />
        <Vision/>
        <Footer/>
        </>
    )
}