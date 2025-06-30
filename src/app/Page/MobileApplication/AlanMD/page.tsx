
import { Heading } from "@/components/base/heading";
import AlanMDApplication from "@/components/sections/AlanMDApplication";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";



export default function AlanMD(){

    return(
        <>
        <Header/>
        <Heading
            title="AlanMD"
            className="md:w-2xl justify-center"
        />
         <AlanMDApplication/>
        
          <Footer/>
        </>
    )
}