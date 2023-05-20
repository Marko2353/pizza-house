import React from "react";
import Button from "../buttons/Button";
import Image from "next/image";
import BookImg from "../../public/img/book-image.jpg";

export default function BookStatic({ title, description, button }) {
  return (
    <section className="container m-auto flex items-center justify-center gap-12">
      <Image src={BookImg} alt="" width={500} height={500} />
      <div>
        <h2>{title}</h2>
        <p className="my-5 w-[60ch]">{description}</p>
        <Button name={button} link={"#"} />
      </div>
    </section>
  );
}
