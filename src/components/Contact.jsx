import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { ACCESS_KEY, SERVICE_ID, TEMPLATE_ID } from "../constants/keys";
import { MdCall, MdEmail } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID, TEMPLATE_ID, form.current, ACCESS_KEY
      )
      .then(
        (response) => {
          console.log(response.text);

          form.current.reset();
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white md:text-3xl text-2xl" data-aos="fade-down">
          Contact me
        </h2>
        <h4 className="text-gray md:text-4xl text-3xl !leading-relaxed" data-aos="fade-down">
          GET IN TOUCH
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded bg-transparent"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded bg-transparent"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44 bg-transparent"
              required
            ></textarea>
            <button
              className="py-2 px-9 border-2 rounded-md border-dark_primary rounded-br-3xl font-medium self-start bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            <div
              data-aos="fade-down"
              data-aos-delay={0}
              className="flex items-center gap-2"
            >
              <h4 className="text-white"><MdEmail /></h4>
              <a className="font-Poppins" href="mailto:julitati25@gmail.com" target="_blank" rel="noreferrer">
                julitati25@gmail.com
              </a>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay={430}
              className="flex items-center gap-2"
            >
              <h4 className="text-white"><MdCall /></h4>
              <a className="font-Poppins" href="https://wa.me/971581806559" target="_blank" rel="noreferrer">
                +971581806559
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;