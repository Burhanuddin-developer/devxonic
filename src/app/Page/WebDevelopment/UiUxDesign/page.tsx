import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import InterfaceDesign from "@/components/sections/Interface Design";
import Vision from "@/components/sections/Your Vision";

export default function UiUxDesign(){
    
    return(
        <>
        <Header/>
        <Heading
        title="UI/UX Design Services"
        description="Our UI/UX Design services are centered around creating experiences that engage users while reflecting the essence of your brand."
        />
        <InterfaceDesign/>
        <Vision/>
        <Footer/>
        </>
    )
}