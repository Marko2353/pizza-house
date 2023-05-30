"use client";
import React, { useState } from "react";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db, functions  } from "../../firebase";

export default function Form() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);
const successMessage = "Email sent successfully!";

const sendEmail = async () => {
  const sendEmailCallable = functions.httpsCallable("sendEmail");
  
  try {
    await sendEmailCallable({
      email: formData.email,
      subject: "Subject of the email",
      message: "Content of the email"
    });
    
    setEmailSent(true);
    setError("");
  } catch (error) {
    console.error("Error sending email: ", error);
    setError("Error sending email.");
  }
};

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fname ||
      !formData.lname ||
      !formData.phone ||
      !formData.email ||
      !formData.msg
    ) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "contact"), formData);

      setIsSubmitted(true);
      setError("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
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
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : isSubmitted ? (
        <p className="text-green-500">Data submitted successfully!</p>
      ) : (
        <p>.</p>
      )}
      <input
        className="self-center px-4 py-2 font-bold text-white uppercase bg-primary rounded-xl box-shadow w-fit hover:cursor-pointer"
        type="submit"
        value="Send"
      />
    </form>
  );
}
