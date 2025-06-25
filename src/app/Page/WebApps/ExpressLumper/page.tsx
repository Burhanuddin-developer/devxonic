import { Heading } from "@/components/base/heading";
import Express from "@/components/sections/Express";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function ExpressLumper() {

    return (
        <>
            <Header />
            <Heading
                title=""
                description="The Express Lumpers portfolio website is a comprehensive showcase of lumper delivery, packaging, and machine operator services." 
            />
            <Express/>
            <Footer/>
        </>

    )
}