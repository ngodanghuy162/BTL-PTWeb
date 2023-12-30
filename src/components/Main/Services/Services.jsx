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
      <h2 className={[layout.section__title]}>Dịch vụ cung cấp</h2>
      <div className={classNames([style.services__container], [layout.grid])}>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>Thanh toán tiện lợi</h3>
          <ServImg1
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
            Thanh toán VISA
          </p>
          <a
            href="#"
            className={classNames([layout.button], [layout["button--link"]])}
          >
            Thêm thông tin
          </a>
        </div>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>Theo dõi hàng</h3>
          <ServImg2
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
            Theo dõi đơn hàng thường xuyên và liên tục cập nhật
          </p>
          <a
            href="#"
            className={classNames([layout.button], [layout["button--link"]])}
          >
            Thêm thông tin
          </a>
        </div>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>Vận chuyển tin cậy</h3>
          <ServImg3
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
            Vận chuyển nhanh chóng và an toàn
          </p>
          <a
            href="#"
            className={classNames([layout.button], [layout["button--link"]])}
          >
            Thêm thông tin
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
