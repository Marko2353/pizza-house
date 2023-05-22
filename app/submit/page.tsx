import React from "react";
import Navbar from "../../components/Navbar/Navbar";

export default function Submit() {
  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="w-full h-screen flex items-center justify-center">
        <h1>Thank you for your message!</h1>
      </section>
    </>
  );
}
