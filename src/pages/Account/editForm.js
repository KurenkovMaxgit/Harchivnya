import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectDetails, setDetails, setUserDetails } from "../../features/userSlice";

function EditForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    entrance: "",
    floor: "",
    apartment: "",
  });
  const select = useSelector(selectDetails);
  useEffect(() => {
    const temp = {
      name: select.name,
      email: select.email,
      phone: select.phone,
      street: select.adress.street,
      entrance: select.adress.entrance,
      floor: select.adress.floor,
      apartment: select.adress.apartment}
  setFormData(temp)
  }, [select]);
  const { name, email, phone, street, entrance, floor, apartment } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const Data = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        adress: {
          street: formData.street,
          entrance: formData.entrance,
          floor: formData.floor,
          apartment: formData.apartment,
        },
      };
      console.log(Data);
      dispatch(setDetails(Data));
      dispatch(setUserDetails());
      navigate("/");
    } catch (error) {
      //     toast.error(error.data);
    }
  };

  return (
    <div className="card-body">
      <h2 className="mb-3">Персональна інформація</h2>
      <form onSubmit={onSubmit}>
        <div className="row mb-1">
          <div className="col">
            <div className="form-floating d-block">
              <input
                type="text"
                className="form-control border border-1 border-black"
                id="name"
                name="name"
                value={name}
                onChange={onChange}
                placeholder=""
              />
              <label htmlFor="name">Повне ім'я</label>
            </div>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col">
            <div className="form-floating d-block">
              <input
                type="email"
                className="form-control border border-1 border-black"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder=""
              />
              <label htmlFor="email">Ел. пошта</label>
            </div>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col">
            <div className="form-floating d-block">
              <input
                type="text"
                className="form-control border border-1 border-black"
                id="phone"
                name="phone"
                value={phone}
                onChange={onChange}
                placeholder=""
              />
              <label htmlFor="phone">Телефон</label>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col">
            <div className="form-floating mb-1">
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
            <div className="form-floating mb-1">
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
            <div className="form-floating mb-1">
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
            <div className="form-floating mb-1">
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
            <button
              className="btn btn-primary col-12 mt-3"
              onClick={() => onSubmit}
            >
              Зберегти
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
