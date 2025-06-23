import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Vision from "@/components/sections/Your Vision";

export default function FullStack() {
  return (
   <>
   <Header />
   <Heading
   title="FullStack App Development"
   description="Explore our FullStack App Development projects that blend cutting-edge technology with creative solutions, delivering exceptional results tailored to your needs."
   />
   <Vision/>
   <Footer/>
   </>
  );
}