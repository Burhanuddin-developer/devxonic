"use client";
import { Heading } from "@/components/base/heading";
import Challenges from "@/components/sections/Challenges";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function ChallengesIt() {

    return(
        <>
     <Header/>
        <Heading
            title="The Biggest Challenges in IT and How to Overcome Them" />
            <Challenges/>
            <Footer/>
            </>
    )
}