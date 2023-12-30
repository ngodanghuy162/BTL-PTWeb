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
          Đặt mua sản phẩm nhanh hơn <br />
            Dễ dàng hơn
          </p>
        </div>
        <div className={style.footer__content}>
          <h3 className={style.footer__title}>Dịch vụ</h3>
          <ul className={style.footer__links}>
            <li>
              <a href="#" className={style.footer__link}>
              Định giá
              </a>
            </li>
            <li>
              <a href="#" className={style.footer__link}>
              Giảm giá
              </a>
            </li>
            <li>
              <a href="#" className={style.footer__link}>
              Báo lỗi
              </a>
            </li>
            <li>
              <a href="#" className={style.footer__link}>
              Điều khoản dịch vụ
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
                Sứ mệnh
              </a>
            </li>
            <li>
              <a href="#" className={style.footer__link}>
                Liên hệ với chúng tôi
              </a>
            </li>
          </ul>
        </div>
        <div className={style.footer__content}>
          <h3 className={style.footer__title}>Community</h3>
          <ul className={style.footer__links}>
            <li>
              <a href="#" className={style.footer__link}>
                Hỗ trợ
              </a>
            </li>
            <li>
              <a href="#" className={style.footer__link}>
              Câu hỏi
              </a>
            </li>
            <li>
              <a href="#" className={style.footer__link}>
                Trợ giúp
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
