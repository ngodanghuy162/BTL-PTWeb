import classNames from "classnames";
import layout from "@/styles/Layout.module.scss";
import style from "./Contact.module.scss";

function Contact() {
  return (
    <section
      className={classNames(
        [style.contact],
        [layout.section],
        [layout.container]
      )}
      id="contacts"
    >
      <div className={classNames([style.contact__container], [layout.grid])}>
        <div className={[style.contact__content]}>
          <h2 className={[layout["section__title-center"]]}>
            Contact Us From Here
          </h2>
          <p className={[style.contact__description]}>
            You can contact us from here, you can write to us, call us or visit
            our service center, we will gladly assist you.
          </p>
        </div>

        <ul className={classNames([style.contact__content], [layout.grid])}>
          <li className={[style.contact__address]}>
            Telephone:
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              title="phone"
              className={[style.contact__information]}
            >
              123 - 456 - 789
            </a>
          </li>
          <li className={[style.contact__address]}>
            Email:
            <a
              href="email"
              target="_blank"
              rel="noreferrer"
              title="email"
              className={[style.contact__information]}
            >
              smth@email.com
            </a>
          </li>
          <li className={[style.contact__address]}>
            Address:
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              title="address"
              className={[style.contact__information]}
            >
              Earth
            </a>
          </li>
        </ul>
        <div className={style.contact__content}>
          <a href="#contact" className={layout.button}>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
