import classNames from "classnames";
import style from "./Footer.module.scss";
import layout from "@/styles/Layout.module.scss";

function Footer() {
  return (
    <footer
      id="footer"
      className={classNames([style.footer], [layout.section])}
    >
      <div
        className={classNames(
          [style.footer__container],
          [layout.container],
          [layout.grid]
        )}
      >
        <div className={style.footer__content}>
          <a href="#" className={style.footer__logo}>
            Magic Post
          </a>
          <p className={style.footer__description}>
            Order products Faster <br />
            Easier
          </p>
        </div>
        <div className={style.footer__content}>
          <h3 className={style.footer__title}>Services</h3>
          <ul className={style.footer__links}>
            <li>
              <a href="#" className={style.footer__link}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className={style.footer__link}>
                Discounts
              </a>
            </li>
            <li>
              <a href="#" className={style.footer__link}>
                Report a bug
              </a>
            </li>
            <li>
              <a href="#" className={style.footer__link}>
                Term of Services
              </a>
            </li>
          </ul>
        </div>
        <div className={style.footer__content}>
          <h3 className={style.footer__title}>Our company</h3>
          <ul className={style.footer__links}>
            <li>
              <a href="#" className={style.footer__link}>
                Blog
              </a>
            </li>
            <li>
              <a href="#" className={style.footer__link}>
                Our mission
              </a>
            </li>
            <li>
              <a href="#" className={style.footer__link}>
                Get in touch
              </a>
            </li>
          </ul>
        </div>
        <div className={style.footer__content}>
          <h3 className={style.footer__title}>Community</h3>
          <ul className={style.footer__links}>
            <li>
              <a href="#" className={style.footer__link}>
                Support
              </a>
            </li>
            <li>
              <a href="#" className={style.footer__link}>
                Questions
              </a>
            </li>
            <li>
              <a href="#" className={style.footer__link}>
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className={style.footer__social}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className={style["footer__social-link"]}
          >
            <i className="bx bxl-facebook-circle" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className={style["footer__social-link"]}
          >
            <i className="bx bxl-twitter" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className={style["footer__social-link"]}
          >
            <i className="bx bxl-instagram-alt" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
