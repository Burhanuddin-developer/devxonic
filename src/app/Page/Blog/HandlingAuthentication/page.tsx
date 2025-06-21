import { Heading } from "@/components/base/heading";
import AuthenticationandAuthorization from "@/components/sections/Authentication and Authorization";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function HandlingAuthentication(){
return(
    <>
    <Header/>
    <Heading
    title="Handling Authentication and Authorization in Node.js"
    />

<AuthenticationandAuthorization/>
    <Footer/>
    </>
)
}