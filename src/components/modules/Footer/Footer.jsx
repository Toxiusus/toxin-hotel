import React from "react";
import "./Footer.scss";
import Logo from "../../elements/Logo/Logo";
import twitter from "../../../assets/img/twitter.svg";
import facebook from "../../../assets/img/facebook.svg";
import instagram from "../../../assets/img/instagram.svg";
import arrowright from "../../../assets/img/arrow-right.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__about">
            <Logo />
            <p className="footer__about__text">
              Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
              «Отельные взгляды»
            </p>
          </div>
          <div className="footer__links">
            <div className="footer__links__item">
              <h3 className="footer__title">навигация</h3>
              <ul className="list list-reset">
                <li className="list__item">
                  <a className="list__item__link" href="/">
                    О нас
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__item__link" href="/">
                    Новости
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__item__link" href="/">
                    Служба поддержки
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__item__link" href="/">
                    Услуги
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__links__item">
              <h3 className="footer__title">о нас</h3>
              <ul className="list list-reset">
                <li className="list__item">
                  <a className="list__item__link" href="/">
                    О сервисе
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__item__link" href="/">
                    Наша команда
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__item__link" href="/">
                    Вакансии
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__item__link" href="/">
                    Инвесторы
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__links__item">
              <h3 className="footer__title">Служба поддержки</h3>
              <ul className="list list-reset">
                <li className="list__item">
                  <a className="list__item__link" href="/">
                    Соглашения
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__item__link" href="/">
                    Сообщества
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__item__link" href="/">
                    Связь с нами
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__subcribe">
            <h3 className="footer__title">Подписка</h3>
            <p className="footer__subcribe__text">
              Получайте специальные предложения и новости сервиса
            </p>
            <div className="footer__subcribe__box">
              <img
                className="footer__subcribe__box__img"
                src={arrowright}
                alt="arrow-right"
              />
              <input
                className="footer__subcribe__box__input"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__container">
            <div className="footer__bottom__container--text">
              <p>Copyright © 2018 Toxin отель. Все права защищены.</p>
            </div>
            <div className="footer__socials">
              <a className="footer__socials__twitter" href="/">
                <img src={twitter} alt="twitter" />
              </a>
              <a className="footer__socials__facebook" href="/">
                <img src={facebook} alt="facebook" />
              </a>
              <a className="footer__socials__instagram" href="/">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
