import About from "@/components/About";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout/Layout";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      <div>
        <Layout>
          <Hero />
          <About />
          <Service />
        </Layout>
      </div>
    </>
  );
}
