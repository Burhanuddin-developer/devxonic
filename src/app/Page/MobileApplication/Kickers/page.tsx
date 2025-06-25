import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import KickersApplication from "@/components/sections/KickersApplication";
export default function Kickers() {


  return (
    <>
      <Header />
      <Heading
        title="Kickers"
        className="max-w-2xl bg-transparent "
      />
     <KickersApplication/>
      <Footer/>
    </>
  );
}   