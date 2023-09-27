import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../CSS/HomePage.css";
import { addToDo, delToDo, clearToDo } from "../redux/action";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const list = useSelector((state) => state.todoReducer.list);

  const handleShow = () => {
    setShow(!show);
    dispatch(addToDo(data), setData(""));
  };

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start !important",
        height: "100vh",
      }}
    >
      <div className="container">
        <h1 style={{ textAlign: "center", alignItems: "center" }}>
          Add your Items 
        </h1>
        <div className="input_field">
          <input
            type="text"
            className="inp"
            placeholder="add you item"
            onChange={(event) => handleChange(event)}
            value={data}
          />
          <button className="btn" onClick={handleShow}>
            +
          </button>
        </div>
        {list.map((item) => {
          return (
            <>
              <div className="input_field" key={item.id}>
                <input type="text" className="inp" value={item.data} />
                <button
                  className="btn"
                  onClick={() => dispatch(delToDo(item.id))}
                >
                  -
                </button>
              </div>
            </>
          );
        })}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="clr_btn"  onClick={() => dispatch(clearToDo())}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
