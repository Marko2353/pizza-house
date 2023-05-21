import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";

export default function About() {
  return (
    <>
      <div className="bg-dark w-full h-24">
        <Navbar />
      </div>
      <section className="pt-40">
        <OurAboutContactHeader
          title={"Our pizzas"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Amet auctor orci elementum consectetur felis libero massa ac rhoncus. Ultrices sem ut nulla nec.Cursus varius at tincidunt fringilla diam neque euismod odio dignissim. Sagittis vitae feugiat aliquet nisl i"
          }
        />
      </section>
    </>
  );
}
