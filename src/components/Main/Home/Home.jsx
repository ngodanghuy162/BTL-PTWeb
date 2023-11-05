import HomeImg from "@/assets/images/home-ilustration.svg?react";
import classNames from "classnames";
import layout from "@/styles/Layout.module.scss";
import style from "./Home.module.scss";

function Home() {
  return (
    <section className={classNames([style.home], [layout.section])} id="home">
      <div
        className={classNames(
          [style.home__container],
          [layout.container],
          [layout.grid]
        )}
      >
        <HomeImg
          className={classNames(
            [layout.svg__img],
            [layout.svg__color],
            [style.home__img]
          )}
        />
        <div className={[style.home__data]}>
          <h1 className={[style.home__title]}>Magic Post</h1>
          <p className={[style.home__description]}>
            Receive your package at any time and we will deliver them right to
            where you are.
          </p>
          <a href="#" className={[layout.button]}>
            Getting Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
