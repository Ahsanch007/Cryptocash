import { HomeSection } from "@/components/Home/HomeSection";
import { About } from "@/components/Home/About";
import { Why } from "@/components/Home/Why";
import { Token } from "@/components/Home/Token";
import { Graph } from "@/components/Home/Graph";
import { WhitePaper } from "@/components/Home/WhitePaper";
import { Team } from "@/components/Home/Team";
import { MobileApp } from "@/components/Home/MobileApp";
import { FaqSection } from "@/components/Home/FaqSection";
import { Contact } from "@/components/Home/Contact";
import { Client } from "@/components/Home/Client";
import { Footer } from "@/components/MainLayout/Footer";
import { Layout } from "@/components/MainLayout/layout";
import { FaChevronUp } from "react-icons/fa";
import 'aos/dist/aos.css';

export default function Home() {
  return (
    <div>
      <Layout >
        <div id="home_section">

          <HomeSection />
        </div>
        <div id="about">

          <About />
        </div>
        <div id="why">

          <Why />
        </div>
        <div id="token">
          <Token />
        </div>

        <Graph />
        <WhitePaper />
        <div id="team">

          <Team />


          <MobileApp />
        </div>

        <div id="faq">

          <FaqSection />
        </div>
        <div id="contact">

          <Contact />
        </div>
        <Client />
        <div className=" text-[30px] cursor-pointer text-white h-[40px] w-[40px] fixed bottom-[30px] right-[20px] flex items-center justify-center bg-gradient-custom2">
          <FaChevronUp />
        </div>
      </Layout>

    </div>
  );
}
