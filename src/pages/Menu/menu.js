import React from "react";
import Card from "./components/card";
//import Navbar from "../../components/Navbar";
const Menu = () => {
  return (
    <div class="col-8 mx-auto">
      <ul class="nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">
            Active
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">
            Link
          </a>
        </li>
      </ul>
      {/* <Navbar/> */}

      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
          <div class="col mb-4">
            <Card
              img="images/Logo.svg"
              title="Гамбургер"
              description="Дуже смачний гамбургер"
            />
          </div>
          <div class="col mb-4">
            <Card
              img="images/Logo.svg"
              title="Гамбургер"
              description="Дуже смачний гамбургер"
            />
          </div>
          <div class="col mb-4">
            <Card
              img="images/Logo.svg"
              title="Гамбургер"
              description="Дуже смачний гамбургер"
            />
          </div>
          <div class="col mb-4">
            <Card
              img="images/Logo.svg"
              title="Гамбургер"
              description="Дуже смачний гамбургер"
            />
          </div>
          <div class="col mb-4">
            <Card
              img="images/Logo.svg"
              title="Гамбургер"
              description="Дуже смачний гамбургер"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
