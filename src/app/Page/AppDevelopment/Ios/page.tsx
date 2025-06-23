import { Heading } from "@/components/base/heading";
import CustomIosDevelopment from "@/components/sections/CustomIosDevelopment";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Vision from "@/components/sections/Your Vision";

export default function Ios() {
  return (
<>
<Header/>
<Heading
title="iOS App Development"
description="At Devxonic, we turn innovative ideas into powerful, user-centric iOS applications that align with your business objectives. Our team of skilled iOS developers is committed to building high-performance apps tailored for Apple’s ecosystem — including iPhone, iPad, Apple Watch, and Apple TV.
Whether you’re a startup looking to make your mark or an enterprise aiming to expand your digital presence, Devxonic delivers scalable, intuitive, and future-ready iOS solutions."
/>
<CustomIosDevelopment/>
<Vision/>
<Footer/>
</>
  );
}