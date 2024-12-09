import React, { useEffect, useState } from "react";
import Card from "./components/card";
import Menu_fetch from "./Menu_fetch";
//import Navbar from "../../components/Navbar";
const Menu = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    Menu_fetch().then((res) => {
      setItems(res);
    });
  }, []);

  console.log("menu", items);

  return (
    <div className="col-8 mx-auto">
      <ul className="nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
      </ul>
      {/* <Navbar/> */}

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
          {items.map((item, index) => (
            <div className="col mb-4" key={item.id}>
              <Card
                id={item.id}
                img={item.imageURL}
                title={item.name}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
