import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="mx-auto col-9">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-3 py-5 my-5 border-top p-2">
          <div className="col mb-3">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
              >
              <img src="images/Logo.svg" alt="Logo" />
            </a>
            <p className="text-body-secondary">© 2024</p>
          </div>
          <div className="col mb-3">
            <h5>Контактні дані</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <img src=".\images\X Logo.svg" alt="X logo" />
                <a href="/" className="ms-2">
                  X_link_placeholder
                </a>
              </li>
              <li className="nav-item mb-2">
                <img src=".\images\Insta Icon.svg" alt="Instagram logo" />
                <a href="/" className="ms-2">
                  Instagram_link_placeholder
                </a>
              </li>
              <li className="nav-item mb-2">
                <img src=".\images\YT Icon.svg" alt="You Tube logo" />
                <a href="/" className="ms-2">
                  YouTube_link_placeholder
                </a>
              </li>
              <li className="nav-item mb-2">
                <img src=".\images\in Icon.svg" alt="Linked in logo" />
                <a href="/" className="ms-2">
                  Linkedin_link_placeholder
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Графік роботи</h5>
            <div className="row">
              <div className="col">
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">Понеділок</li>
                  <li className="nav-item mb-2">Вівторок</li>
                  <li className="nav-item mb-2">Середа</li>
                  <li className="nav-item mb-2">Четвер</li>
                  <li className="nav-item mb-2">П'ятниця</li>
                  <li className="nav-item mb-2">Субота</li>
                  <li className="nav-item mb-2">Неділя</li>
                </ul>
              </div>
              <div className="col">
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">9:00-21:00</li>
                  <li className="nav-item mb-2">9:00-21:00</li>
                  <li className="nav-item mb-2">9:00-21:00</li>
                  <li className="nav-item mb-2">9:00-21:00</li>
                  <li className="nav-item mb-2">9:00-21:00</li>
                  <li className="nav-item mb-2">9:00-21:00</li>
                  <li className="nav-item mb-2">9:00-21:00</li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="col mb-3">
            <h5>Навігація</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Головна
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/menu" className="nav-link p-0 text-body-secondary">
                  Меню
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/news" className="nav-link p-0 text-body-secondary">
                  Новини
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
              </div>
    </footer>
  );
};

export default Footer;
