import React from "react";
import Button from "../buttons/Button";

export default function AboutContact({ title, description, button, link }) {
  return (
    <section className="container flex flex-col items-center m-auto my-10">
      <h2>{title}</h2>
      <p className="w-[75ch] text-center my-7">{description}</p>
      <Button name={button} link={link} func={undefined} />
    </section>
  );
}
