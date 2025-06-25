import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Asset from "@/components/sections/AssetManager";

export default function AssetManager() {

    return (
        <>
            <Header />
            <Heading
                title=""
                description="Asset Manager app offers a seamless, cross-platform solution for efficient asset management, combining real-time analytics with a customizable dashboard. Designed for businesses and individuals alike, it enhances decision-making and streamlines asset tracking across devices." 
            />
         <Asset/>
            <Footer/>
        </>

    )
}