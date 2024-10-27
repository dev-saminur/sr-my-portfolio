import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout/Layout";
import Portfolio from "@/components/Portfolio";
import Service from "@/components/Service";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div>
        <Layout>
          <Hero />
          <About />
          <Skills />
          <Service />
          <Portfolio />
          <Contact />
        </Layout>
      </div>
    </>
  );
}
