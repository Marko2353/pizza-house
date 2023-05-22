import React from "react";
import Form from "./Form";

export default function FormSection({ title, description }) {
  return (
    <section className="container m-auto grid grid-flow-col grid-rows-1 justify-between">
      <Form />
      <div className="flex flex-col justify-center">
        <h2>{title}</h2>
        <p className="w-[75ch] text-left my-7">{description}</p>
      </div>
    </section>
  );
}
