import React from "react";
import Image from "next/image";
import BookImg from "../../public/img/book-image.png";

export default function AboutSection({ title, description, style }) {
  return (
    <section className="container m-auto grid grid-flow-col grid-rows-1 justify-between">
      <Image
        className={`rounded-xl box-shadow ${style}`}
        src={BookImg}
        alt=""
      />
      <div className="flex flex-col justify-center">
        <h2>{title}</h2>
        <p className="w-[75ch] text-left my-7">{description}</p>
      </div>
    </section>
  );
}
