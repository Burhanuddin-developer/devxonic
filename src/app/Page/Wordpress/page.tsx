"use client";

import CardBox from "@/components/base/CardGrid";
import { Heading } from "@/components/base/heading";
import Header from "@/components/sections/Header";


export default function Wordpress() {
    const projects = [
  {
    title: 'Curebill',
    description:
      'we understand that managing medical billing can be complex and time-consuming. Our mission is to simplify the revenue cycle for healthcare providers, improve claim acceptance rates, and ensure faster reimbursements. With a team of experienced billing professionals, we offer end-to-end solutions tailored to clinics, hospitals, and private practices.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/10/2-1024x576.jpeg.webp',
    onClick: () => {'./kickers'},
  },
  {
    title: 'Xyber3',
    description:
      'XyberTech Solutions LLC is a trusted Managed Software Provider (MSP) specializing in end-to-end software support for businesses of all sizes. From application monitoring to security patching, cloud integration, and 24/7 support, we keep your digital operations running efficiently and securely.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/10/ppg-11-1024x576.jpg.webp',
  },
  {
    title: 'Safer',
    description:
      'At Safer, we’re not just selling cameras—we’re delivering confidence. Whether you’re securing your home, monitoring your business, or upgrading your surveillance systems, our goal is to provide top-quality, reliable, and affordable camera solutions.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/Alan-MD-Mock-1024x576.png.webp',
  },
  {
    title: 'Life Term Health',
    description:
      'Lifeterm Health is your reliable source for everything related to healthcare in the United States. From chronic illness management and health insurance updates to mental wellness tips and policy changes, we aim to keep you informed and empowered.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/10/Cover-1024x576.png.webp',
  },
    {
    title: 'Radian Security',
    description:
      'At Radiant, we believe that security shouldn’t be complicated—it should be smart, proactive, and always reliable. We are a professional camera security agency specializing in modern surveillance systems designed to prevent threats before they happen.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/Oto-buck-3-1024x576.jpg.webp',
  },
      {
    title: 'RadianZest',
    description:
      'Radian Zest is a creative agency driven by passion, color, and purpose. We specialize in turning ideas into compelling visual experiences through art, design, and storytelling. Whether you need branding that resonates, illustrations that captivate, or digital designs that engage—our work reflects creativity with clarity.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/Oto-buck-3-1024x576.jpg.webp',
  },
      {
    title: 'Alpha Creation',
    description:
      'Alpha Creation is a full-service graphic design agency driven by creativity, strategy, and excellence. We specialize in crafting visual experiences that tell your brand’s story, captivate your audience, and elevate your presence in both digital and print spaces.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/Oto-buck-3-1024x576.jpg.webp',
  },
      {
    title: 'Freedom Of Migration Act',
    description:
      'Freedom of Migration is a dedicated blog platform focused on U.S. immigration laws, reforms, and human stories behind the headlines. Our goal is to provide fact-based, timely, and accessible information that helps readers navigate and understand the ever-changing landscape of immigration policy.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/Oto-buck-3-1024x576.jpg.webp',
  },
    {
    title: 'Classic Catering And Decor',
    description:
      'Based in Sugar Land, Texas, Classic Catering and Decor specializes in full-service event solutions—from exceptional food catering to captivating décor. We bring creativity, flavor, and flawless execution to weddings, birthdays, corporate events, backyard parties, and everything in between.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/Oto-buck-3-1024x576.jpg.webp',
  },
      {
    title: 'Pakistan PC Gamer',
    description:
    'PPG is your go-to destination for all things gaming and PC hardware. Whether you’re a casual gamer, a competitive esports player, or a power user building the ultimate setup, we’ve got the tools and tech you need.',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/Oto-buck-3-1024x576.jpg.webp',
  },
];
  return (
    <>
      <Header />
      <Heading
        title="Wordpress"
        description="Explore our Wordpress projects that blend cutting-edge technology with creative solutions, delivering exceptional results tailored to your needs."
        className="max-w-2xl"
      />
      <CardBox projects={projects} />
    </>
  );
}
