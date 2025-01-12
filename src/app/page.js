import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/MainLayout/Header";
import { HomeSection } from "@/components/Home/HomeSection";
import { About } from "@/components/Home/About";
import { Why } from "@/components/Home/Why";
import { Token } from "@/components/Home/Token";
import { Graph } from "@/components/Home/Graph";
import { WhitePaper } from "@/components/Home/WhitePaper";
import { Team } from "@/components/Home/Team";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeSection />
      <About />
      <Why />
      <Token />
      <Graph />
      <WhitePaper />
      <Team />
    </div>
  );
}
