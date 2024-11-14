import React from "react";

const Footer = () => {
  return (
    <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top p-2">
      <div class="col mb-3">
        <a
          href="/"
          class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
        >
          <img src="images/Logo.svg" alt="Logo" />
        </a>
        <p class="text-body-secondary">© 2024</p>
      </div>

      <div class="col mb-3"></div>

      <div class="col mb-3">
        <h5>Контактні дані</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <img src=".\images\X Logo.svg" alt="X logo" />
            <a href= "X_link_placeholder">X_link_placeholder</a>
          </li>
          <li class="nav-item mb-2">
            <img src=".\images\Insta Icon.svg" alt="Instagram logo" />
            <a href= "Instagram_link_placeholder">Instagram_link_placeholder</a>
          </li>
          <li class="nav-item mb-2">
            <img src=".\images\YT Icon.svg" alt="You Tube logo" />
            <a href= "YouTube_link_placeholder">YouTube_link_placeholder</a>

          </li>
          <li class="nav-item mb-2">
            <img src=".\images\in Icon.svg" alt="Linked in logo" />
            <a href= "Linkedin_link_placeholder">Linkedin_link_placeholder</a>

          </li>
        </ul>
      </div>

      <div class="col mb-3">
        <h5>Графік роботи</h5>
        <div class="row">
          <div class="col">
            <ul class="nav flex-column">
              <li class="nav-item mb-2">Понеділок</li>
              <li class="nav-item mb-2">Вівторок</li>
              <li class="nav-item mb-2">Середа</li>
              <li class="nav-item mb-2">Четвер</li>
              <li class="nav-item mb-2">П'ятниця</li>
              <li class="nav-item mb-2">Субота</li>
              <li class="nav-item mb-2">Неділя</li>
            </ul>
          </div>
          <div class="col">
            <ul class="nav flex-column">
              <li class="nav-item mb-2">9:00-21:00</li>
              <li class="nav-item mb-2">9:00-21:00</li>
              <li class="nav-item mb-2">9:00-21:00</li>
              <li class="nav-item mb-2">9:00-21:00</li>
              <li class="nav-item mb-2">9:00-21:00</li>
              <li class="nav-item mb-2">9:00-21:00</li>
              <li class="nav-item mb-2">9:00-21:00</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col mb-3">
        <h5>Навігація</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="/" class="nav-link p-0 text-body-secondary">
              Головна
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="/menu" class="nav-link p-0 text-body-secondary">
              Меню
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="/news" class="nav-link p-0 text-body-secondary">
              Новини
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
