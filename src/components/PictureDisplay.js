import { Col, Image, List, Row } from "antd";
import React from "react";
import sampleData from "../assets/sampleData";
import PicItem from "./PicItem";

/**
 * 2 rows, 4 columns each.
 */
const PictureDisplay = ({ state }) => {
  // lets us choose the correct array data from sampleData
  const targetGroup = sampleData[state];

  /**
   * Function to render the picture items coming through.
   */
  const renderItems = (item) => {
    return <PicItem className="pic-item" picData={item} />;
  };

  return (
    <>
      <List
        locale={{ emptyText: "Click on a button to display pictures!" }}
        dataSource={targetGroup}
        renderItem={(item) => renderItems(item)}
      />
    </>
  );
};

export default PictureDisplay;
