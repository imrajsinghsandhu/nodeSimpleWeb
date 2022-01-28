import "./Main.css";
import { Layout, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import ButtonRow from "./ButtonRow";
import PictureDisplay from "./PictureDisplay";

const { Content } = Layout;

/**
 * Need a row of 4 buttons.
 * A header row.
 * And a pictures component --> within which there are 2 rows of 4 columns.
 */

const Main = () => {
  // the states of the system
  const [currentState, setCurrentState] = useState(null);
  console.log("CurrentState value : ", currentState);

  /**
   * The state of the system is dependent on the following boolean values.
   */
  useEffect(() => {}, [currentState]);

  /**
   * The functions to handle the clicks on each button.
   * Onclick event will be handled by each of these functions.
   */

  const handleBeachClick = () => {
    setCurrentState(0);
  };

  const handleBirdClick = () => {
    setCurrentState(1);
  };

  const handleFoodClick = () => {
    setCurrentState(2);
  };

  const handleMountainClick = () => {
    setCurrentState(3);
  };

  return (
    <Layout className="layout">
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className="main">
          <Row>
            <Col span={14} offset={5}>
              <ButtonRow
                handleBeachClick={handleBeachClick}
                handleMountainClick={handleMountainClick}
                handleBirdClick={handleBirdClick}
                handleFoodClick={handleFoodClick}
              />
              <br />
              <h1>
                {currentState == 0
                  ? "Beach Pictures"
                  : currentState == 1
                  ? "Bird Pictures"
                  : currentState == 2
                  ? "Food Pictures"
                  : currentState == 3
                  ? "Mountain Pictures"
                  : "Click on any button above!"}
              </h1>
              <br />
              <PictureDisplay state={currentState} />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Main;
