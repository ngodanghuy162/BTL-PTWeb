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
            Hãy liên lạc chúng tôi
          </h2>
          <p className={[style.contact__description]}>
          Bạn có thể liên hệ với chúng tôi từ đây, bạn có thể viết thư cho chúng tôi, gọi cho chúng tôi hoặc ghé thăm
             trung tâm dịch vụ của chúng tôi, chúng tôi sẽ sẵn lòng hỗ trợ bạn.
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
              6666668888
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
              huyngo@gmail.com
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
              Tu ma hải
            </a>
          </li>
        </ul>
        <div className={style.contact__content}>
          <a href="#contact" className={layout.button}>
            Liên hệ ngay
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
