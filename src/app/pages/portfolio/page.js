import Layout from "@/components/Layout/Layout";
import Portfolio from "@/components/Portfolio";
import React from "react";

const PortfolioPage = () => {
  return (
    <>
      <Layout>
        <div className="pt-20 pb-10">
          <Portfolio />
        </div>
      </Layout>
    </>
  );
};

export default PortfolioPage;
