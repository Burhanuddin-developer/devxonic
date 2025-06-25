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
                description="Otobucks is a comprehensive website designed to simplify the process of car and home maintenance by connecting users with trusted service providers." 
            />
            <OtobucksAppliation/>
            <Footer/>
        </>

    )
}