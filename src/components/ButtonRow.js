import { Button, Row } from "antd";
import React from "react";
import "./ButtonRow.css";

const ButtonRow = ({
  handleBirdClick,
  handleMountainClick,
  handleBeachClick,
  handleFoodClick,
}) => {
  const buttonData = [
    {
      id: 1,
      name: "Birds",
      function: handleBirdClick,
    },
    {
      id: 2,
      name: "Food",
      function: handleFoodClick,
    },
    {
      id: 3,
      name: "Mountains",
      function: handleMountainClick,
    },
    {
      id: 4,
      name: "Beaches",
      function: handleBeachClick,
    },
  ];

  const renderRow = (item) => {
    return (
      <div key={item.id}>
        <Button onClick={item.function} className="button">
          {item.name}
        </Button>
      </div>
    );
  };

  return (
    <div className="button_row">
      {buttonData.map((item) => renderRow(item))}
    </div>
  );
};

export default ButtonRow;
