import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import RistonicApplication from "@/components/sections/RistonicApplication";

export default function Ristonic() {


  return (
    <>
      <Header />
      <Heading
        title="Ristonic"
        className="max-w-2xl bg-transparent "
      />
      <RistonicApplication/>
      <Footer/>
    </>
  );
}   