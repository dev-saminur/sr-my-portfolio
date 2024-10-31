import Contact from "@/components/Contact";
import Layout from "@/components/Layout/Layout";
import React from "react";

const Contactpage = () => {
  return (
    <>
      <Layout>
        <div className="pt-32">
          <Contact />
        </div>
      </Layout>
    </>
  );
};

export default Contactpage;
