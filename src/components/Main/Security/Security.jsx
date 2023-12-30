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
            Sự an toàn của bạn được đặt lên hàng đầu
          </h2>
          <p className={style.security__description}>
          Khi đơn đặt hàng của bạn đến tay bạn, chúng tôi có các quy trình an toàn sức khỏe, vì vậy
             rằng bạn được bảo vệ khỏi mọi bệnh tật. Hãy xem video cách thực hiện
             giao hàng được thực hiện.
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
