/*
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";

import { benefitOne, benefitTwo } from "@/components/data";

*/
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Footer />
    </>
    // <Container>
    //   <Hero />
    //   <SectionTitle preTitle="Nextly Benefits" title="Welcome to Sofia">
    //     We specialize in building websites, mobile applications, and desktop
    //     applications tailored to meet our customers' needs. Our expertise lies
    //     in deploying these solutions into production and leveraging technology
    //     to solve local problems.
    //   </SectionTitle>

    //   <Benefits data={benefitOne} />
    //   <Benefits imgPos="right" data={benefitTwo} />

    //   <SectionTitle
    //     preTitle="Watch a video"
    //     title="Learn how to fullfil your needs"
    //   >
    //     This section is to highlight a promo or demo video of your product.
    //     Analysts says a landing page with video has 3% more conversion rate. So,
    //     don&apos;t forget to add one. Just like this.
    //   </SectionTitle>

    //   <Video videoId="fZ0D0cnR88E" />

    //   <SectionTitle
    //     preTitle="Testimonials"
    //     title="Here's what our customers said"
    //   >
    //     Testimonials is a great way to increase the brand trust and awareness.
    //     Use this section to highlight your popular customers.
    //   </SectionTitle>

    //   <Testimonials />

    //   <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
    //     Answer your customers possible questions here, it will increase the
    //     conversion rate as well as support or chat requests.
    //   </SectionTitle>

    //   <Faq />
    // </Container>
  );
}
