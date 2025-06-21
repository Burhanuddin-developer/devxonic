'use client';
import Card from "@/components/base/card";
import FaqAccordion, { FaqItem } from "@/components/base/faq";
import { Heading } from "@/components/base/heading";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Innovation from "@/components/sections/Innovation";
import ValuesSection from "@/components/sections/Value";
import TeamSection from "@/components/sections/Team";

export default function About() {
    const aboutFaqs: FaqItem[] = [
        {
            question: "What services does Devxonic offer?",
            answer:
                "We offer full-stack development, UI/UX design, DevOps, and digital strategy tailored to your business goals.",
        },
        {
            question: "How can I get a quote for a project?",
            answer:
                "You can reach out through our contact form, and we’ll get back with a customized quote based on your requirements.",
        },
        {
            question: "What industries do you specialize in?",
            answer:
                "We specialize in a wide range of industries including technology, e-commerce, healthcare, education, finance, and more. Our team has the expertise to develop tailored solutions that meet the specific needs of various sectors.",
        },
        {
            question: "How long does it take to complete a project?",
            answer:
                "Project timelines vary, but we aim to deliver high-quality solutions efficiently and within the agreed timeframe.",
        },
        {
            question: "Do you offer post–launch support and maintenance?",
            answer:
                "Yes, we provide ongoing support and maintenance to ensure your project continues to perform optimally.",
        },
        {
            question: "What technologies and platforms do you work with?",
            answer:
                "We work with modern technologies including React, Next.js, Node.js, Python, and a variety of cloud platforms.",
        },
        {
            question: "How do you ensure the quality of your work?",
            answer:
                "We follow rigorous testing, code reviews, and agile methodologies to ensure high-quality deliverables.",
        },
    ];
    return (
        <>
            <Header />
            <Heading
                title="About Us"
                description="What sets Devxonic apart is our commitment to excellence and client-centric approach."
                className="max-w-2xl" />
            <Innovation />
            <ValuesSection />
            <TeamSection />
            <FaqAccordion faqData={aboutFaqs} title="Frequently Asked Questions" />
            <Card
                className="w-6xl "
                title1="Secure Your"
                highlight1="Clicks, Secure Your"
                title2="Business "
                highlight2="Reputation"
                paragraphs={[
                    "Ensure your business’s reputation stays strong by securing every click with our",
                    "cutting-edge protection tools. By preventing cyber threats and vulnerabilities,",
                    "you create a safer environment for both your customers and your brand."
                ]}

                primaryBtnLabel="Get Started"
                onPrimaryClick={() => alert('Get Started clicked')}
                secondaryBtnLabel="Contact Us"
                onSecondaryClick={() => alert('Contact Us clicked')} subtitle={""} />
            <Footer />
        </>
    )
}