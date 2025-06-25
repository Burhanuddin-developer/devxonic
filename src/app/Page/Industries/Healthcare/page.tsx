import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Vision from "@/components/sections/Your Vision";

export default function Healthcare(){

    return(
        <>
        <Header />
        <Heading 
        title="Healthcare App Development"
        description="Explore our Healthcare App Development projects that blend cutting-edge technology with creative solutions, delivering exceptional results tailored to your needs."
        />
        <Vision/>
        <Footer/>
        </>
    )
}