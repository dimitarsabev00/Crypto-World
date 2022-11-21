import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const options = {
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  const data = {
    labels: coinHistory?.prices.map((coin) => {
      let date = new Date(coin[0]);
      let time =
        date.getHours() > 12
          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
          : `${date.getHours()}:${date.getMinutes()} AM`;
      return time;
    }),
    datasets: [
      {
        label: "Price In USD",
        data: coinHistory?.prices.map((coin) => coin[1]),
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };
  console.log(coinHistory?.prices);
  return (
    <>
      <Row className="chart-header">
        <Typography.Title level={2} className="chart-Typography.title">
          {coinName} Price Chart{" "}
        </Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
