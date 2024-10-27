import Layout from "@/components/Layout/Layout";
import Service from "@/components/Service";
import React from "react";

const ServicePage = () => {
  return (
    <>
      <Layout>
        <div className="py-[120px]">
          <Service />
        </div>
      </Layout>
    </>
  );
};

export default ServicePage;
