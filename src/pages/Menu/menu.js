import React, { useEffect } from "react";
import Card from "./components/card";
import { getAllItems, selectItems, selectStatus, selectById } from "../../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
const Menu = () => {
  const dispatch = useDispatch();
  const storeItems = useSelector(selectItems)
  const storeStatus = useSelector(selectStatus)
  console.log(useSelector((state) => selectById(state, 3)))
  // console.log(storeItems)
  useEffect(() => {
    if(storeStatus === "idle") {
      dispatch(getAllItems())
    }
  }, [storeStatus, dispatch]);
  return (
    <div className="col-8 mx-auto">
      <ul className="nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active btn" aria-current="page" href="/" >
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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {storeItems.map((item, index) => (
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

