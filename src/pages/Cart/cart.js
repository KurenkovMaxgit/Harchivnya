import { useEffect, useState } from "react";
import CartContent from "./cart_content";
import {
  placeOrderAsync,
  selectTotalPrice,
  setAddress,
} from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../features/authSlice";
import { Navigate } from "react-router-dom";
import { selectDetails } from "../../features/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const select = useSelector(selectDetails);
  useEffect(() => {
  setAddressValues(select.adress)
  }, [select]);
  const placeOrder = () => {
    dispatch(setAddress(addressStr()));
    dispatch(placeOrderAsync()); // Dispatch the thunk
  };

  const [address, setAddressValues] = useState({
    street: "",
    entrance: "",
    floor: "",
    apartment: "",
  });

  const { street, entrance, floor, apartment } = address;
  const onChange = (e) => {
    setAddressValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const addressStr = () => {
    return street + ", " + entrance + ", " + floor + ", " + apartment;
  };
  // return (address = setAddress(
  //   street + ", " + entrance + ", " + floor + ", " + apartment
  // ));

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const address = { street, entrance, floor, apartment };
      const res = await address(address).unwrap();
      console.log(res);
    } catch (error) {}
  };
  const totalPrice = useSelector(selectTotalPrice);
  const token = useSelector(selectToken);
  if (token === null) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="container">
      <h1 className="text-center">Кошик</h1>
      <div className="row col-9 mx-auto row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
        <div className="col mb-3">
          <form onSubmit={onSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="street"
                value={street}
                className="form-control border border-1 border-black"
                id="street"
                placeholder=""
                onChange={onChange}
              />
              <label htmlFor="street">Вулиця</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="entrance"
                value={entrance}
                className="form-control border border-1 border-black"
                id="floatingInput"
                placeholder=""
                onChange={onChange}
              />
              <label htmlFor="floatingInput">Будинок</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                value={floor}
                name="floor"
                className="form-control border border-1 border-black"
                id="floatingInput"
                placeholder=""
                onChange={onChange}
              />
              <label htmlFor="floatingInput">Поверх</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                value={apartment}
                name="apartment"
                className="form-control border border-1 border-black"
                id="floatingInput"
                placeholder=""
                onChange={onChange}
              />
              <label htmlFor="floatingInput">Квартира</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control border border-1 border-black"
                id="floatingInput"
                placeholder=""
                onChange={onChange}
              />
              <label htmlFor="floatingInput">Номер телефону</label>
            </div>
          </form>
        </div>
        <div className="overflow-auto" style={{ maxHeight: "355px" }}>
          <CartContent />
        </div>

        <div className="col mt-3">
          <div className="text-end mb-3">
            <h5 className="fw">Загальна ціна: {totalPrice.toFixed(2)}₴</h5>
          </div>
          <div className="row">
            <div className="col">
              <a className="btn btn-primary col-12" href="/menu">
                До меню
              </a>
            </div>
            <div className="col">
              <button
                className="btn btn-primary col-12 d-block"
                onClick={() => placeOrder()}
              >
                Замовити
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
