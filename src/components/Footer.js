import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div class="row col-10 mx-auto row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 p-2">
      <div class="col">
        <h4>Контактні дані</h4>
        <ul class="list">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>

        </ul>
      </div>
      <div class="col">
        <h4>Графік роботи</h4>
        <div class="row">
          <div class="col">
            <ul class="list">
              <li>Понеділок</li>
              <li>Вівторок</li>
              <li>Середа</li>
              <li>Четвер</li>
              <li>П'ятниця</li>
              <li>Субота</li>
              <li>Неділя</li>
            </ul>
          </div>
          <div class="col">
            <ul class="list">
              <li>9:00-21:00</li>
              <li>9:00-21:00</li>
              <li>9:00-21:00</li>
              <li>9:00-21:00</li>
              <li>9:00-21:00</li>
              <li>9:00-21:00</li>
              <li>9:00-21:00</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <h4>Ми в соцмережах</h4>
        <ul class="list">
              <li><img src=".\images\X Logo.svg" alt="X logo"/></li>
              <li><img src=".\images\Insta Icon.svg" alt="Instagram logo"/></li>
              <li><img src=".\images\YT Icon.svg" alt="You Tube logo"/></li>
              <li><img src=".\images\in Icon.svg" alt="Linked in logo"/></li>
            </ul>
      </div>
      <div class="col">
        <h4>Контактні дані</h4>
      </div>
    </div>
  );
};

export default Footer;