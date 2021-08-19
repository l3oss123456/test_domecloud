import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Input } from "antd";
import { thunk_action_creator, getGithubInfo } from "../../actions/githubInfo";
import UserInfo from "./userInfo";
import styles from "./styles";

const Home = (props) => {
  const dispatch = useDispatch();
  const githubInfo = useSelector((state) => state.githubInfo);
  const [username, setUsername] = useState("");

  const handleSubmit = (user) => {
    const username = user;
    // dispatch(thunk_action_creator(username));
    dispatch(getGithubInfo(username));
    setUsername("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Enter the Github Username</h2>
        <input
          type="text"
          placeholder="Enter github username"
          required
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit(e.target.value);
            }
          }}
        />
        <button>Submit</button>
      </form>
      {githubInfo.isFetching ? <h3>Loading</h3> : null}
      {githubInfo.data.isError ? (
        <h3 className="error">No such user exists.</h3>
      ) : null}
      {Object.keys(githubInfo.data).length > 0 ? (
        <UserInfo user={githubInfo.data} />
      ) : null}
    </div>
  );
};

export default Home;
