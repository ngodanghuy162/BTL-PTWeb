import { useState, useEffect } from "react";
import ThemeChanger from "./ThemeChanger/ThemeChanger";
import ColorChanger from "./ColorChanger/ColorChanger";
import style from "./Header.module.scss";
import layout from "@/styles/Layout.module.scss";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import classNames from "classnames";

function Header() {
    const [toggle, setToggle] = useState(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            const header = document.getElementById("header");
            window.scrollY >= 80
                ? header.classList.add(style["scroll-header"])
                : header.classList.remove(style["scroll-header"]);
        });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            const navMenu = classNames(style.nav__menu);
            if (navMenu) {
                const sectionList = document.querySelectorAll("section[id]");
                sectionList.forEach((section) => {
                    const sectionId = section.getAttribute("id");
                    const querySelector = `.${navMenu} a[href*='${sectionId}']`;
                    const menuItem = document.querySelector(querySelector);
                    if (menuItem) {
                        const scrollY = window.scrollY;
                        const sectionTop = section.offsetTop - 50;
                        const activeLinkClass = classNames(
                            style["nav__link--active"]
                        );
                        if (
                            scrollY > sectionTop &&
                            scrollY <= sectionTop + section.offsetHeight
                        ) {
                            menuItem.classList.add(activeLinkClass);
                        } else {
                            menuItem.classList.remove(activeLinkClass);
                        }
                    }
                });
            }
        });
    });

    const clickHandler = (e) => {
        if (e.target.tagName === "A") {
            setToggle(!toggle);
        }
    };

  return (
    <header className={style.header} id="header">
      <nav className={classNames([style.nav], [layout.container])}>
        {/* <a href="#" className={style.nav__logo}>
          Magic Post
        </a> */}
        <a href="#" className={`${style.nav__logo} ${style.textlogo}`}>
          Magic Post
        </a>
        <div
          className={classNames({
            [style.nav__menu]: true,
            [style["menu-show"]]: toggle || width >= 767,
          })}
        >
          <ul className={style.nav__list} onClick={clickHandler}>
            <li className={style.nav__item}>
              <a
                href="#home"
                className={classNames(
                  [style.nav__link],
                  style["nav__link--active"]
                )}
              >
                Home
              </a>
            </li>
            <li className={style.nav__item}>
              <a href="#about" className={style.nav__link}>
                About
              </a>
            </li>
            <li className={style.nav__item}>
              <a href="#services" className={style.nav__link}>
                Services
              </a>
            </li>
            <li className={style.nav__item}>
              <a href="#contacts" className={style.nav__link}>
                Contact
              </a>
            </li>
            <ThemeChanger />
            <ColorChanger />
          </ul>
        </div>
        <div className={style.nav__toggle} onClick={() => setToggle(!toggle)}>
          <i className="bx bx-grid-alt" />
        </div>
        <a
          href="/login"
          className={classNames([layout.button], {
            [layout.hidden]: width < 960,
          })}
        >
          Đăng nhập
        </a>
      </nav>
    </header>
  );
    return (
        <header className={style.header} id="header">
            <nav className={classNames([style.nav], [layout.container])}>
                <a href="#" className={style.nav__logo}>
                    Magic Post
                </a>
                <div
                    className={classNames({
                        [style.nav__menu]: true,
                        [style["menu-show"]]: toggle || width >= 767,
                    })}
                >
                    <ul className={style.nav__list} onClick={clickHandler}>
                        <li className={style.nav__item}>
                            <a
                                href="#home"
                                className={classNames(
                                    [style.nav__link],
                                    style["nav__link--active"]
                                )}
                            >
                                Home
                            </a>
                        </li>
                        <li className={style.nav__item}>
                            <a href="#about" className={style.nav__link}>
                                About
                            </a>
                        </li>
                        <li className={style.nav__item}>
                            <a href="#services" className={style.nav__link}>
                                Services
                            </a>
                        </li>
                        <li className={style.nav__item}>
                            <a href="#contacts" className={style.nav__link}>
                                Contact
                            </a>
                        </li>
                        {/* <ThemeChanger /> */}
                        <ColorChanger />
                    </ul>
                </div>
                <div
                    className={style.nav__toggle}
                    onClick={() => setToggle(!toggle)}
                >
                    <i className="bx bx-grid-alt" />
                </div>
                <a
                    href="/admin"
                    className={classNames([layout.button], {
                        [layout.hidden]: width < 960,
                    })}
                >
                    Delivery Now
                </a>
            </nav>
        </header>
    );
}

export default Header;
