import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Vision from "@/components/sections/Your Vision";

export default function Docker(){

    return(
        <>
        <Header/>
        <Heading
        title="Docker"
        description="Explore our Docker that blend cutting-edge technology with creative solutions, delivering exceptional results tailored to your needs."
        />
        <Vision/>
        <Footer/>
        </>
    )
}