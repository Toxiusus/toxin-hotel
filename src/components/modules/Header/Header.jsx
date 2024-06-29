import "./Header.scss";
import Logo from "../../elements/Logo/Logo";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <Logo />
        </div>
        <ul className="header__list list-reset">
          <li className="header__list__item">
            <a className="header__list__item__link" href="/">
              О нас
            </a>
          </li>
          <li className="header__list__item">
            <a
              className="header__list__item__link header__list__item__link__arrowdown"
              href="/"
            >
              Услуги
            </a>
          </li>
          <li className="header__list__item">
            <a className="header__list__item__link" href="/">
              Вакансии
            </a>
          </li>
          <li className="header__list__item">
            <a className="header__list__item__link" href="/">
              Новости
            </a>
          </li>
          <li className="header__list__item">
            <a
              className="header__list__item__link header__list__item__link__arrowdown"
              href="/"
            >
              Соглашения
            </a>
          </li>
          <div className="header__buttons">
            <div className="header__button">
              <a className="btn-reset header__button--entry" href="/">
                войти
              </a>
            </div>
            <div className="header__button">
              <a className="btn-reset header__button--register" href="/">
                зарегистрироваться
              </a>
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
