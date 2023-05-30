"use client"
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function Form() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    msg: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "contact"), formData);
      console.log("Document written with ID: ", docRef.id);

      setFormData({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        msg: ""
      });
      setIsSubmitted(true); // Set the submitted state to true
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
        {isSubmitted && (
      <p className="text-green-500">Data submitted successfully!</p>
    )}
    <form
      className="flex flex-col gap-5 px-8 py-4 bg-dark rounded-xl box-shadow"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-5">
        <label className="flex flex-col gap-1 text-primary" htmlFor="fname">
          First name
          <input
            className="p-2 rounded-xl bg-light text-dark"
            type="text"
            id="fname"
            name="fname"
            placeholder="John"
            value={formData.fname}
            onChange={handleInputChange}
          />
        </label>

        <label className="flex flex-col gap-1 text-primary" htmlFor="lname">
          Last name
          <input
            className="p-2 rounded-xl bg-light text-dark"
            type="text"
            id="lname"
            name="lname"
            placeholder="Doe"
            value={formData.lname}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="flex gap-5">
        <label className="flex flex-col gap-1 text-primary" htmlFor="phone">
          Phone number
          <input
            className="p-2 rounded-xl bg-light text-dark"
            type="tel"
            id="phone"
            name="phone"
            placeholder="+45 00 00 00"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>

        <label className="flex flex-col gap-1 text-primary" htmlFor="email">
          Email
          <input
            className="p-2 rounded-xl bg-light text-dark"
            type="email"
            id="email"
            name="email"
            placeholder="john@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <label className="flex flex-col gap-1 text-primary" htmlFor="msg">
        Type your message here
        <textarea
          className="p-2 resize-none rounded-xl bg-light text-dark"
          name="msg"
          id="msg"
          cols={30}
          rows={10}
          value={formData.msg}
          onChange={handleInputChange}
        ></textarea>
      </label>

      <input
        className="self-center px-4 py-2 font-bold text-white uppercase bg-primary rounded-xl box-shadow w-fit hover:cursor-pointer"
        type="submit"
        value="Send"
      />
    </form>
    </>
  );
}
