import React from "react"
import Card from "./components/card";
 
const News = () => {
    return (
        <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
          <div class="col mb-4">
            <Card
              img="images/Avatar Placeholder.svg"
              title="Новина"
              description="Дуже цікава новина"
            />
          </div>
          <div class="col mb-4">
            <Card
              img="images/Avatar Placeholder.svg"
              title="Новина"
              description="Дуже цікава новина"
            />
          </div>
          <div class="col mb-4">
            <Card
              img="images/Avatar Placeholder.svg"
              title="Новина"
              description="Дуже цікава новина"
            />
          </div>
          <div class="col mb-4">
            <Card
              img="images/Avatar Placeholder.svg"
              title="Новина"
              description="Дуже цікава новина"
            />
          </div>
          <div class="col mb-4">
            <Card
              img="images/Avatar Placeholder.svg"
              title="Новина"
              description="Дуже цікава новина"
            />
          </div>
          <div class="col mb-4">
            <Card
              img="images/Avatar Placeholder.svg"
              title="Новина"
              description="Дуже цікава новина"
            />
          </div>
          <div class="col mb-4">
            <Card
              img="images/Avatar Placeholder.svg"
              title="Новина"
              description="Дуже цікава новина"
            />
          </div>
        </div>
      </div>
    );
};
 
export default News;