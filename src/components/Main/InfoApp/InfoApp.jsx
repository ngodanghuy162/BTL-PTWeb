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
            Theo dõi hàng mọi lúc
          </h2>
          <p className={[style.app__description]}>
          Với ứng dụng của chúng tôi, bạn có thể xem lộ trình đặt hàng của mình, từ địa phương của chúng tôi
             đến nơi bạn đang ở. 
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
