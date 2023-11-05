import ServImg1 from "@/assets/images/services1-ilustration.svg?react";
import ServImg2 from "@/assets/images/services2-ilustration.svg?react";
import ServImg3 from "@/assets/images/services3-ilustration.svg?react";
import classNames from "classnames";
import layout from "@/styles/Layout.module.scss";
import style from "./Services.module.scss";

function Services() {
  return (
    <section
      className={classNames(
        [style.services],
        [layout.section],
        [layout.container]
      )}
      id="services"
    >
      <h2 className={[layout.section__title]}>Services that we offer</h2>
      <div className={classNames([style.services__container], [layout.grid])}>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>Payment Done</h3>
          <ServImg1
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
            Pay with a Visa or PayPal card and without much ado.
          </p>
          <a
            href="#"
            className={classNames([layout.button], [layout["button--link"]])}
          >
            Learn More
          </a>
        </div>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>Track Your Package</h3>
          <ServImg2
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
            We offer tracking of package through the Internet.
          </p>
          <a
            href="#"
            className={classNames([layout.button], [layout["button--link"]])}
          >
            Learn More
          </a>
        </div>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>Reliable delivery</h3>
          <ServImg3
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
            Fast and secured packages delivered straight to your door.
          </p>
          <a
            href="#"
            className={classNames([layout.button], [layout["button--link"]])}
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
