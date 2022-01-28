import { Row } from "antd";
import React from "react";

const PicItem = ({ picData }) => {
  return (
    <Row>
      <img src={picData.first} height={200} width={200} />
      <img src={picData.second} height={200} width={200} />
      <img src={picData.third} height={200} width={200} />
      <img src={picData.fourth} height={200} width={200} />
      <Row />
      <Row
        style={{
          padding: 15,
        }}
      >
        <img src={picData.fifth} height={200} width={200} />
        <img src={picData.sixth} height={200} width={200} />
        <img src={picData.seventh} height={200} width={200} />
        <img src={picData.eighth} height={200} width={200} />
      </Row>
    </Row>
  );
};

export default PicItem;
