import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          K.N. Garments is your one-stop destination for premium quality clothing and accessories. From trendy tops and stylish bottoms to cozy outerwear and chic accessories, we offer a wide range of fashion essentials to elevate your wardrobe. With a commitment to quality craftsmanship and the latest fashion trends, we strive to provide our customers with an unparalleled shopping experience. Whether you're looking for casual everyday wear or something for a special occasion, K.N. Garments has got you covered. Shop with us today and discover your perfect style statement!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;