import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import OnlyFTW from "@/components/sections/onlyFTW";
export default function FTW() {
  return (
    <>
      <Header />
      <Heading
        title=""
        description="onlyFTW is a next-generation fintech application developed to transform the way users, especially Gen Z, interact with money and social media."
      />
      <OnlyFTW />
      <Footer />
    </>
  );
}
