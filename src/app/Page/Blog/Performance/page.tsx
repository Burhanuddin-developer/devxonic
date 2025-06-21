import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import PerformanceTesting from "@/components/sections/PerformanceTesting";

export default function Performance() {
  return (
   <>
   <Header />
   <Heading 
   title="Understanding the Impact of Performance Testing on Application Success"
    className="md:w-2xl justify-center"
   />
   <PerformanceTesting />
   <Footer />
   </>
  );
}
