import React from "react";
import "./home.css"

const Home = () => {
  return (
    <div className="mt-4">
      <div className="d-flex py-auto px-auto" width="100%" height="100%">
        <img
          src="images/food.svg"
          className=" mx-auto my-auto d-flex img-fluid px-2"
          alt="food"
        />
      </div>
      <div className="mx-auto mt-4 col-8 d-center">
        <p className="text-center text-break mx-auto fs-3">
        Ласкаво просимо до «Harchivnya» – місця, де кожна страва створена з любов’ю та турботою про вас. У нашому меню ви знайдете соковиті бургери з ніжним м’ясом та оригінальними соусами, ароматну піцу з хрусткою скоринкою і різноманітними начинками, а також широкий вибір напоїв, які стануть ідеальним доповненням до вашої трапези. Ми прагнемо дарувати вам не лише смачну їжу, а й приємні емоції в затишній атмосфері нашого ресторану. Завітайте до нас, щоб отримати гастрономічне задоволення, яке запам’ятається надовго!
        </p>
      </div>
      <div>
        <a className="btn btn-primary col-3 d-block mt-3 mx-auto" href="/menu">
          До меню
        </a>
      </div>
    </div>
  );
};

export default Home;
