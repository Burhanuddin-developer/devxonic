import { Heading } from "@/components/base/heading";
import ButtsappMedia from "@/components/sections/ButtsappMedia";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
export default function Buttsapp() {

    return (
        <>
            <Header />
            <Heading
                title=""
                description="Buttsapp Media needed a sleek, modern portfolio website to showcase its wide range of media services, including branding, content creation, and digital marketing." 
            />
<ButtsappMedia/>
            <Footer/>
        </>

    )
}