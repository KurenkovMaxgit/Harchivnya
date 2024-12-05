import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/card";

async function News_fetch() {
  return axios
    .get("https://localhost:7048/api/News")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data", error);
    });
}

const News = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    News_fetch().then((res) => {
      setItems(res);
    });
  }, []);

  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 mt-4">
          {items.map((item, index) => (
            <div class="col mb-4">
            <Card
              key={item.id}
              img={item.imageURL}
              title={item.name}
              description={item.description}
            />
            </div>
          ))}
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
