import AboutImg from "@/assets/images/about-ilustration.svg?react";
import classNames from "classnames";
import layout from "@/styles/Layout.module.scss";
import style from "./About.module.scss";

function About() {
  return (
    <section
      className={classNames(
        [style.about],
        [layout.section],
        [layout.container]
      )}
      id="about"
    >
      <div className={classNames([style.about__container], [layout.grid])}>
        <div className={style.about__data}>
          <h2 className={[layout["section__title-center"]]}>
          Tìm hiểu thêm một chút về chúng tôi
          </h2>
          <p className={style.about__description}>
          Chúng tôi là công ty chuyên phân phối sản phẩm bằng hình thức giao hàng tận nhà hoặc tận nơi với chất lượng giao hàng tốt nhất.
          </p>
        </div>

        <AboutImg
          className={classNames(
            [layout.svg__img],
            [layout.svg__color],
            [layout.svg__blob],
            [style.about__img]
          )}
        />
      </div>
    </section>
  );
}

export default About;
