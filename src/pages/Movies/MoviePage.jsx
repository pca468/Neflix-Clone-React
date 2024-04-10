import React from "react";
import { useSearchMoviesQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Container, Alert, Row, Col } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";

// 경로 2가지
//nav바에서 클릭해 온 경우 => populartMovie 보여주기
//keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");

  const { data, isLodaing, isError, error } = useSearchMoviesQuery({ keyword });

  if (isLodaing) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          {" "}
          필터{" "}
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
