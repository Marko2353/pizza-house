import React from "react";
import Button from "../buttons/Button";
import Image from "next/image";
import BookImg from "../../public/img/book-image.png";

export default function BookStatic({ title, description, button }) {
  return (
    <section className="container m-auto flex items-center justify-center gap-12 my-20">
      <Image className="rounded-xl box-shadow" src={BookImg} alt="" />
      <div>
        <h2>{title}</h2>
        <p className="my-5 w-[75ch]">{description}</p>
        <Button name={button} link={"#"} />
      </div>
    </section>
  );
}
