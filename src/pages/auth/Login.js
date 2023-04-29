import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    console.log(email, password);
    try {
      const res = await axios.post("http://localhost/auth/login", {
        email,
        password,
      });

      let user = res.data.user;
      user.password = " ";
      user.token = res.data.token;
      console.log(user);
      dispatch(addUser(user));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input
        name="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
