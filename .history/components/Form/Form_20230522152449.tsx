import React from "react";

export default function Form() {
  return (
    <form
      className="flex flex-col gap-5 bg-dark py-4 px-8 rounded-xl box-shadow"
      action="/submit"
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
          />
        </label>
      </div>
      <label className="flex flex-col gap-1 text-primary" htmlFor="msg">
        Type your message here
        <textarea
          className="p-2 rounded-xl bg-light text-dark resize-none"
          name="msg"
          id="msg"
          cols={30}
          rows={10}
        ></textarea>
      </label>

      <input
        className="bg-primary text-white font-bold py-2 px-4 uppercase rounded-xl box-shadow w-fit self-center hover:cursor-pointer"
        type="submit"
        value="Send"
      />
    </form>
    // <form
    //   className="flex flex-col gap-5 bg-light border-dark border-2 py-4 px-8 rounded-xl box-shadow"
    //   action="/submit"
    // >
    //   <div className="flex gap-5">
    //     <label className="flex flex-col gap-1 text-primary" htmlFor="fname">
    //       First name
    //       <input
    //         className="p-2 rounded-xl bg-dark text-light"
    //         type="text"
    //         id="fname"
    //         name="fname"
    //         value=""
    //         placeholder="John"
    //       />
    //     </label>

    //     <label className="flex flex-col gap-1 text-primary" htmlFor="lname">
    //       Last name
    //       <input
    //         className="p-2 rounded-xl bg-dark text-light"
    //         type="text"
    //         id="lname"
    //         name="lname"
    //         value=""
    //         placeholder="Doe"
    //       />
    //     </label>
    //   </div>
    //   <div className="flex gap-5">
    //     <label className="flex flex-col gap-1 text-primary" htmlFor="phone">
    //       Phone number
    //       <input
    //         className="p-2 rounded-xl bg-dark text-light"
    //         type="tel"
    //         id="phone"
    //         name="phone"
    //         value=""
    //         placeholder="+45 00 00 00"
    //       />
    //     </label>

    //     <label className="flex flex-col gap-1 text-primary" htmlFor="email">
    //       Email
    //       <input
    //         className="p-2 rounded-xl bg-dark text-light"
    //         type="email"
    //         id="email"
    //         name="email"
    //         value=""
    //         placeholder="john@gmail.com"
    //       />
    //     </label>
    //   </div>
    //   <label className="flex flex-col gap-1 text-primary" htmlFor="msg">
    //     Type your message here
    //     <textarea
    //       className="p-2 rounded-xl bg-dark text-light resize-none"
    //       name="msg"
    //       id="msg"
    //       cols={30}
    //       rows={10}
    //     ></textarea>
    //   </label>

    //   <input
    //     className="bg-primary text-white font-bold py-2 px-4 uppercase rounded-xl box-shadow w-fit self-center"
    //     type="submit"
    //     value="Send"
    //   />
    // </form>
  );
}
