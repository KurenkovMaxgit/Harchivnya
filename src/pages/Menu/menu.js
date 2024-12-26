import React, { useEffect, useState } from "react";
import Card from "./components/card";
import {
  getAllItems,
  selectItems,
  selectStatus,
  selectById,
  getItemsByType,
  selectFilteredItems,
} from "../../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
const Menu = () => {
  const dispatch = useDispatch();
  const allStoreItems = useSelector(selectItems);
  const storeItems = useSelector(selectFilteredItems);
  const storeStatus = useSelector(selectStatus);
  const [items, setItems] = useState(allStoreItems);
  const [type, setType] = useState("");

  useEffect(() => {
    if (type) {
      setItems(storeItems);
    } else {
      setItems(allStoreItems);
    }
  }, [storeItems, allStoreItems, type]);

  const selectByType = (type) => {
    setType(type);
    if (type) {
      dispatch(getItemsByType(type));
    } else {
      dispatch(getAllItems());
    }
  };
  console.log(useSelector((state) => selectById(state, 3)));
  // console.log(storeItems)
  useEffect(() => {
    if (storeStatus === "idle") {
      dispatch(getAllItems());
    }
  }, [storeStatus, dispatch]);
  return (
    <div className="col-8 mx-auto">
      <ul className="nav mx-auto">
        <li className="nav-item">
          <button
            className="nav-link text-primary"
            onClick={() => selectByType()}
          >
            Все
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link text-primary"
            onClick={() => selectByType("pizza")}
          >
            Піца
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link text-primary"
            onClick={() => selectByType("burgers")}
          >
            Бургери
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link text-primary"
            onClick={() => selectByType("drinks")}
          >
            Напої
          </button>
        </li>
      </ul>
      {/* <Navbar/> */}

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {items.map((item, index) => (
            <div className="col mb-4" key={item.id}>
              <Card
                id={item.id}
                img={item.imageURL}
                title={item.name}
                price={item.price}
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
