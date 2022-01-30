import { Row } from "antd";
import React from "react";
import "./PicItem.css";

const PicItem = ({ picData }) => {
  return (
    <Row>
      <img className="pic_item" src={picData.first} height={200} width={200} />
      <img className="pic_item" src={picData.second} height={200} width={200} />
      <img className="pic_item" src={picData.third} height={200} width={200} />
      <img className="pic_item" src={picData.fourth} height={200} width={200} />
      <Row />
      <Row
        style={{
          padding: 15,
        }}
      >
        <img
          className="pic_item"
          src={picData.fifth}
          height={200}
          width={200}
        />
        <img
          className="pic_item"
          src={picData.sixth}
          height={200}
          width={200}
        />
        <img
          className="pic_item"
          src={picData.seventh}
          height={200}
          width={200}
        />
        <img
          className="pic_item"
          src={picData.eighth}
          height={200}
          width={200}
        />
      </Row>
    </Row>
  );
};

export default PicItem;
