import AppImg from "@/assets/images/app-ilustration.svg?react";
import classNames from "classnames";
import layout from "@/styles/Layout.module.scss";
import style from "./InfoApp.module.scss";

function InfoApp() {
  return (
    <section
      className={classNames([style.app], [layout.section], [layout.container])}
      id="app"
    >
      <div className={classNames([style.app__container], [layout.grid])}>
        <div className={[style.app__data]}>
          <h2 className={[layout["section__title-center"]]}>
            Watch Your Delivery At Any Time
          </h2>
          <p className={[style.app__description]}>
            With our app you can view the route of your order, from our local
            headquarters to the place where you are. Look for the app now!
          </p>
          <div className={[style.app__buttons]}>
            <a
              href="https://www.apple.com/vn/app-store/"
              className={classNames([layout.button], [layout["button--flex"]])}
            >
              <i
                className={classNames("bx", "bxl-apple", [layout.button__icon])}
              ></i>
              App Store
            </a>
            <a
              href="https://play.google.com/store/games?hl=en&gl=US"
              className={classNames([layout.button], [layout["button--flex"]])}
            >
              <i
                className={classNames("bx", "bxl-play-store", [
                  layout.button__icon,
                ])}
              ></i>
              Google Play
            </a>
          </div>
        </div>

        <AppImg
          className={classNames(
            [layout.svg__img],
            [layout.svg__color],
            [layout.svg__blob],
            [style.app__img]
          )}
        />
      </div>
    </section>
  );
}

export default InfoApp;
