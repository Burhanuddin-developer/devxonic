import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import OtobucksAppliation from "@/components/sections/OtobucksApplication";

export default function Otobucks() {

    return (
        <>
            <Header />
            <Heading
                title=""
                description="Devxonic presents Otobucks Mobile, a cutting-edge platform designed to simplify vehicle management. Enjoy seamless navigation, real-time updates, and personalized features, all aimed at enhancing your automotive experience." 
            />
            <OtobucksAppliation/>
            <Footer/>
        </>

    )
}