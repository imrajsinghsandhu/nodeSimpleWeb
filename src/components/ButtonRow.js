import { Button, Row } from "antd";
import React from "react";

const ButtonRow = ({
  handleBirdClick,
  handleMountainClick,
  handleBeachClick,
  handleFoodClick,
}) => {
  return (
    <>
      <Button size="large" onClick={handleBirdClick}>
        Birds
      </Button>
      <Button onClick={handleFoodClick}>Food</Button>
      <Button onClick={handleMountainClick}>Mountains</Button>
      <Button onClick={handleBeachClick}>Beaches</Button>
    </>
  );
};

export default ButtonRow;
