import { Heading } from "@/components/base/heading";
import AppDevelopment from "@/components/sections/AppDevelopment";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Vision from "@/components/sections/Your Vision";

export default function Realtime() {
  return (
 <>
 <Header />
 <Heading
 title="App Development"
 description="Explore our App Development Services that blend cutting-edge technology with creative solutions, delivering exceptional results tailored to your needs."
 />
 <AppDevelopment/>
 <Vision/>
 <Footer/>
 </>
  );
}