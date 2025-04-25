import { FormProvider, useForm } from "react-hook-form";
import styles from "./ContactForm.module.css";
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const methods = useForm();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    // code fragment
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    emailjs.init({
      publicKey: publicKey,
      limitRate: {
        // Set the limit rate for the application
        id: "app",
        // Allow 1 request per 30s
        throttle: 30000,
      },
    });

    emailjs.send(serviceId, templateId, templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styles.container}
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className={styles.heading}>Contact</h2>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="name">
            Full Name
          </label>
          {errors.name && (
            <div className={styles.err}>{errors.name.message}</div>
          )}
          <input
            className={styles.input}
            id="name"
            {...register("name", {
              required: "Full name is required",
              minLength: 1,
              maxLength: {
                value: 64,
                message: "Full name must not exceed 64 characters",
              },
            })}
          ></input>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          {errors.email && (
            <div className={styles.err}>{errors.email.message}</div>
          )}
          <input
            className={styles.input}
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                message: "Please provide valid email",
              },
            })}
          ></input>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          {errors.message && (
            <div className={styles.err}>{errors.message.message}</div>
          )}
          <textarea
            rows="8"
            className={styles.textarea}
            id="message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 64,
                message: "Message must be a minimum of 64 characters",
              },
              maxLength: {
                value: 2560,
                message: "Message must not exceed 2560 characters",
              },
            })}
          ></textarea>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Submit</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
