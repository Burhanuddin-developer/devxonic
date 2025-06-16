import BlogSection from "../../components/sections/blog articles";
import ReviewsSection from "../../components/sections/clients Review";
import ExcellenceSection from "../../components/sections/Excellence";
import Expertise from "../../components/sections/Expertise";
import Footer from "../../components/sections/Footer";
import Header from "../../components/sections/Header";
import Main from "../../components/sections/Main";
import Projects from "../../components/sections/Our Projects";
import SoftwarePerformance from "../../components/sections/Software Performance";
import HeroSection from "../../components/sections/Software Solutions";
import TrustedClients from "../../components/sections/Trusted Clients";
import Vision from "../../components/sections/Your Vision";
export default function Home() {
  return (
     <><Header />
     <Main />
     <Projects/>
     <TrustedClients/>
     <HeroSection/>
     <SoftwarePerformance/>
     <ExcellenceSection/>
   <Expertise/>
   <ReviewsSection/>
   <BlogSection/>
   <Vision/>
   <Footer/>
     </>
     
  );
}
