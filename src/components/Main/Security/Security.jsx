import SecImg from "@/assets/images/security-ilustration.svg?react";
import classNames from "classnames";
import layout from "@/styles/Layout.module.scss";
import style from "./Security.module.scss";

function Security() {
  return (
    <section
      className={classNames(
        [style.security],
        [layout.section],
        [layout.container]
      )}
      id="security"
    >
      <div className={classNames([style.security__container], [layout.grid])}>
        <div className={style.security__data}>
          <h2 className={layout["section__title-center"]}>
            Your Safety Is Important
          </h2>
          <p className={style.security__description}>
            When your order reaches you, we have the health safety protocols, so
            that you are protected from any disease. Watch the video of how the
            delivery is made.
          </p>
        </div>
        <SecImg
          className={classNames(
            [layout.svg__img],
            [layout.svg__color],
            [layout.svg__blob],
            [style.security__img]
          )}
        />
      </div>
    </section>
  );
}

export default Security;