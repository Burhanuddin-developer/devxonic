import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import WashtaApplication from "@/components/sections/WashtaApplication";

export default function Washta() {


  return (
    <>
      <Header />
      <Heading
        title="Washta"
        className="max-w-2xl bg-transparent "
      />
    <WashtaApplication/>
      <Footer/>
    </>
  );
}   