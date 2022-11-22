import { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetAllCryptosQuery } from "../services/coinGeckoAPI";
import Loader from "./Loader";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const [page, setPage] = useState(0);
  const { data: cryptosList, isFetching } = useGetAllCryptosQuery(page);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (cryptosList && cryptosList.length > 0) {
      setCryptos((prev) => [...prev, ...cryptosList]);
    }
  }, [cryptosList]);
  const handleScroll = () => {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop <=
      document.documentElement.clientHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const filteredData = cryptos.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setCryptos(filteredData);
  }, [searchTerm]);

  if (isFetching) return <Loader />;
  console.log(cryptos);
  return (
    <>
      <div className="search-crypto">
        <Input
          placeholder="Search Cryptocurrency"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
      </div>

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card">
            <Link key={currency.id} to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.market_cap_rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.image} />}
                hoverable
              >
                <p>Price: $ {millify(currency.current_price)}</p>
                <p>Market Cap: {millify(currency.market_cap)}</p>
                <p>Daily Change: {currency.price_change_percentage_24h}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
