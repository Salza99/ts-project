import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FetchInterface, NewsFetched } from "../interface/FetchInterface";
import { Card, Button } from "react-bootstrap";

const HomePage = () => {
  const [news, setNews] = useState<NewsFetched[]>([]);

  const fetchNews = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");

      if (resp.ok) {
        const data = await resp.json();
        setNews(data.results);
        console.log(news);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container>
      <Row>
        <h1>SpaceFlight</h1>
      </Row>
      <Row>
        <Col xs={12} md={4} lg={3}>
          {/* {news &&
            news.map(() => {
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>;
            })} */}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
