import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
// import styles from "./styles";

const loadingIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;

const Loading = ({ style }) => {
  return (
    <div style={style}>
      <Spin indicator={loadingIcon} />
    </div>
  );
};
export default Loading;
