import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./form.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  tel: "",
  name: "",
  data: "",
};

const Form = () => {
  const [state, setState] = useState(initialState);

  const { tel, name, data } = state;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tel || !name || !data) {
      toast.error("Please chek value into each input field");
    } else {
      axios
        .post("http://localhost:5000/api/post", {
          tel,
          name,
          data,
        })
        .then(() => {
          setState({ tel: "", name: "", data: "" });
        })
        .catch((err) => {
          toast.error(err.response.data);
          console.log(err.response.data);
        });
      setTimeout(() => navigate("/"), 500);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <lable htmlFor="tel">tel</lable>
        <input
          type="number"
          id="tel"
          name="tel"
          placeholder="tel"
          value={tel}
          onChange={handleInputChange}
        />
        <lable htmlFor="name">name</lable>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value={name}
          onChange={handleInputChange}
        />
        <lable htmlFor="data">data</lable>
        <input
          type="data"
          id="data"
          name="data"
          placeholder="yyyy-mm-dd"
          value={data}
          onChange={handleInputChange}
        />

        <input type="submit" value="Save" />
        <Link to="/">
          <input type="button" value="go back" />
        </Link>
      </form>
    </div>
  );
};

export default Form;
