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
      <h2 className={[layout.section__title]}>Chúng tôi cung cấp những gì</h2>
      <div className={classNames([style.services__container], [layout.grid])}>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>Dịch vụ thanh toán</h3>
          <ServImg1
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
          Thanh toán bằng thẻ Visa hoặc PayPal mà không gặp nhiều khó khăn.
          </p>
          <a
            href="#"
            className={classNames([layout.button], [layout["button--link"]])}
          >
            Tìm hiểu thêm
          </a>
        </div>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>Theo dõi đơn hàng của bạn</h3>
          <ServImg2
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
          Chúng tôi cung cấp dịch vụ theo dõi gói hàng trực tuyến.
          </p>
          <a
            href="#"
            className={classNames([layout.button], [layout["button--link"]])}
          >
            Tìm hiểu thêm
          </a>
        </div>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>Giao hàng đáng tin cậy</h3>
          <ServImg3
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
            Đơn hàng sẽ nhanh chóng giao đến bạn một cách an toàn.
          </p>
          <a
            href="#"
            className={classNames([layout.button], [layout["button--link"]])}
          >
            Tìm hiểu thêm
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
