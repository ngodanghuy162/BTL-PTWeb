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
          Liên hệ với chúng tôi
          </h2>
          <p className={[style.contact__description]}>
            Liên hệ với chúng tôi bất cứ lúc nào, chúng tôi sẽ luôn đợi liên hệ từ bạn.
          </p>
        </div>

        <ul className={classNames([style.contact__content], [layout.grid])}>
          <li className={[style.contact__address]}>
            số điện thoại:
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
              abc@email.com
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
              VNU
            </a>
          </li>
        </ul>
        <div className={style.contact__content}>
          <a href="#contact" className={layout.button}>
            Liên hệ với chúng tôi
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
