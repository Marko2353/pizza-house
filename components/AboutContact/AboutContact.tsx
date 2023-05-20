import React from "react";
import Button from "../buttons/Button";

export default function AboutContact({ title, description, button }) {
  return (
    <section className="container flex flex-col items-center m-auto my-10">
      <h2>{title}</h2>
      <p className="w-[60ch] text-center my-7">{description}</p>
      <Button name={button} link={"#"} />
    </section>
  );
}
