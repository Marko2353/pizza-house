import React from "react";

export default function Form() {
  return (
    <form
      className="flex flex-col gap-5 px-8 py-4 bg-dark rounded-xl box-shadow"
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
          className="p-2 resize-none rounded-xl bg-light text-dark"
          name="msg"
          id="msg"
          cols={30}
          rows={10}
        ></textarea>
      </label>

      <input
        className="self-center px-4 py-2 font-bold text-white uppercase bg-primary rounded-xl box-shadow w-fit hover:cursor-pointer"
        type="submit"
        value="Send"
      />
    </form>
    // <form
    //   className="flex flex-col gap-5 px-8 py-4 border-2 bg-light border-dark rounded-xl box-shadow"
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
    //       className="p-2 resize-none rounded-xl bg-dark text-light"
    //       name="msg"
    //       id="msg"
    //       cols={30}
    //       rows={10}
    //     ></textarea>
    //   </label>

    //   <input
    //     className="self-center px-4 py-2 font-bold text-white uppercase bg-primary rounded-xl box-shadow w-fit"
    //     type="submit"
    //     value="Send"
    //   />
    // </form>
  );
}
