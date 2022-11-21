import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../components";
import { useGetCryptosGlobalDataQuery } from "../services/coinGeckoAPI";
import Loader from "./Loader";
const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosGlobalDataQuery();
  const globalStats = data?.data;
  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats?.active_cryptocurrencies}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={globalStats?.markets} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap Change 24h:"
            value={`${globalStats?.market_cap_change_percentage_24h_usd.toFixed(
              2
            )}%`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Dominance"
            value={`BTC: ${globalStats?.market_cap_percentage?.btc.toFixed(2)}%
            • ETH: ${globalStats?.market_cap_percentage?.eth.toFixed(2)}% `}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptos In The World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
