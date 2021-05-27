import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceID = "service_ID";
  const templeteID = "template_ID";
  const userID = "user_SfY2vW1KV8PR8cgBReobd";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templeteID,
      {
        name: data.name,
        number: data.number,
        email: data.email,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templeteID, variables, userID) => {
    emailjs
      .send(serviceID, templeteID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully, I'll contact you ASAP!");
      })
      .catch((err) => console.log(`Something went wrong ${err}`));
  };

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Please fill out the form and describe your Project needs and I'll
          reach you ASAP!
        </p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name", {
                    required: "Please Enter your Name",
                    maxLength: {
                      val: 20,
                      message: "Please enter a name less than 20 characters",
                    },
                  })}
                />
                <div className="line"></div>
                <span className="error-message">
                  {errors.name && errors.name.message}
                </span>
              </div>
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", {
                    required: "Please Enter your Email",
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid Email",
                    },
                  })}
                />
                <div className="line"></div>
                <span className="error-message">
                  {errors.email && errors.email.message}
                </span>
              </div>
              <div className="text-center">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Number"
                  name="phone number"
                  aria-invalid={errors.phone ? "true" : "false"}
                  {...register("phone", {
                    required: "Please Enter your Number",
                  })}
                />
                <div className="line"></div>
                <span className="error-message">
                  {errors.phone && errors.phone.message}
                </span>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <textarea
                  type="text"
                  placeholder="Description"
                  name="description"
                  aria-invalid={errors.description ? "true" : "false"}
                  {...register("description", {
                    required: "Please describe your project shortly...",
                  })}
                ></textarea>
                <div className="line"></div>
                <span className="error-message">
                  {errors.description && errors.description.message}
                </span>
              </div>
            </div>
            <button className="btn-main-offer contact-btn">contact me</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
