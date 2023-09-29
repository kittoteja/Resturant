import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            Our food is special for several reasons, starting with its incredible diversity. The world's cuisines offer an array of flavors, ingredients, and cooking techniques that reflect the rich tapestry of cultures and traditions. This diversity allows us to explore and savor a wide range of tastes, ensuring that there's something for everyone's palate.
            </p>
            <p>
            Additionally, the specialness of our food lies in its ability to nourish and bring people together. Food is not just sustenance; it's a source of comfort, celebration, and connection. Sharing a meal with loved ones, whether it's a simple family dinner or a festive feast, fosters bonds and creates cherished memories. Our food is a testament to the creativity, craftsmanship, and communal spirit of humanity, making it truly special in every sense.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
