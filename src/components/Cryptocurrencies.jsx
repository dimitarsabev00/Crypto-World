import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

const Cryptocurrencies = ({ simplified }) => {
  // const count = simplified ? 10 : 100;
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrency" />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        <Col xs={24} sm={12} lg={6} className="crypto-card">
          <Link to={`/crypto/bitcoin`}>
            <Card
              title={`rank nameCoin`}
              extra={<img className="crypto-image" src="" alt="image-card" />}
              hoverable
            >
              <p>Price: 0</p>
              <p>Market Cap: 0</p>
              <p>Daily Change: 0</p>
            </Card>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Cryptocurrencies;
