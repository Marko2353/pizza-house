import React from "react";
import Button from "../buttons/Button";

export default function AboutContact({ title, description }) {
  return (
    <section className="container flex flex-col items-center m-auto py-7">
      <h2>{title}</h2>
      <p className="w-[60ch] text-center my-7">{description}</p>
      <Button name={"more about us"} link={"#"} />
    </section>
  );
}
