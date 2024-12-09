import React from "react";
import "./home.css"

const Home = () => {
  return (
    <div>
      <div className="mx-5 d-flex py-auto px-auto" width="100%" height="100%">
        <img
          src="images/food.svg"
          className=" mx-auto my-auto d-flex img-fluid"
          alt="food"
        />
      </div>
      <div className="mx-auto mt-4 col-7 d-center">
        <h3 className="text-center text-break  mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
          amet sollicitudin velit. Mauris et magna in enim vestibulum convallis
          vel sit amet quam. Quisque sit amet auctor erat, vitae pharetra metus.
          Fusce molestie leo non vulputate laoreet. Aliquam suscipit massa nisl,
          vitae volutpat sapien suscipit nec. Vestibulum hendrerit, metus a
          maximus tincidunt, arcu dui lacinia purus, id elementum lorem augue et
          dui. Quisque vitae diam erat. Donec tortor orci, laoreet at fermentum
          id, ultrices at purus. Aenean quis nunc leo. Vivamus sit amet lacinia
          dolor. Ut sem elit, consequat eget dolor sit amet, ornare lobortis
          sapien. Cras maximus fermentum massa vel dignissim. Aenean fermentum,
          nisl ut commodo elementum, erat enim consectetur quam, ut iaculis
          lorem ex ac lacus.
        </h3>
      </div>
      <div>
        <a className="btn btn-primary col-3 d-block mt-3 mx-auto" href="/menu">
          Переглянути меню
        </a>
      </div>
    </div>
  );
};

export default Home;
