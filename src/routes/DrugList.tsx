import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import likeIcon from "../assets/heartIcon.png";
import drug from "../assets/drug.png";
import drug1 from "../assets/drugImage/drug1.png";
import drug2 from "../assets/drugImage/drug2.png";
import drug3 from "../assets/drugImage/drug3.png";
import drug4 from "../assets/drugImage/drug4.png";
import drug5 from "../assets/drugImage/drug5.png";
import drug6 from "../assets/drugImage/drug6.png";
import drug7 from "../assets/drugImage/drug7.png";
import drug8 from "../assets/drugImage/drug8.png";
import drug9 from "../assets/drugImage/drug9.png";
import drug10 from "../assets/drugImage/drug10.png";
import drug11 from "../assets/drugImage/drug11.png";
import drug12 from "../assets/drugImage/drug12.png";
import drug13 from "../assets/drugImage/drug13.png";

const ListContainer = styled.div`
  max-width: 1200px;
  margin: 150px auto;
  background-color: #f3f7ff;
  border-radius: 10px;
  padding: 20px;
`;

const DrugItem = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 10px;
`;

const DrugImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;
`;

const DrugInfo = styled.div`
  flex-grow: 1;
`;

const DrugName = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const DrugActions = styled.div`
  display: flex;
  align-items: center;
`;

const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #007bff;
  font-size: 18px;

  &:hover {
    color: #0056b3;
  }

  & > img {
    margin-right: 5px;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.button`
  background: none;
  border: none;
  margin: 0 5px;
  cursor: pointer;
  font-size: 18px;
  color: #007bff;

  &:hover {
    color: #0056b3;
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const drugs = [
  {
    name: "리보트릴정(클로나제팜)",
    image: drug1,
    id: 1,
    likes: 7,
  },
  {
    name: "슈다페드정",
    image: drug2,
    id: 2,
    likes: 4,
  },
  {
    name: "씨잘정5mg",
    image: drug3,
    id: 3,
    likes: 5,
  },
  {
    name: "울트라셋이알세미서방정",
    image: drug4,
    id: 4,
    likes: 2,
  },
  {
    name: "아스피린",
    image: drug5,
    id: 5,
    likes: 3,
  },
  { name: "후리시닐정", image: drug6, id: 6, likes: 5 },
  { name: "페니라민정", image: drug7, id: 7, likes: 1 },
  { name: "케이캡정", image: drug8, id: 8, likes: 3 },
  { name: "삼진디아제팜정", image: drug9, id: 9, likes: 4 },
  { name: "울트라셋이알세미서방정", image: drug10, id: 10, likes: 4 },
  { name: "자나팜정", image: drug11, id: 11, likes: 3 },
  { name: "렉사프로정", image: drug12, id: 12, likes: 5 },
  { name: "맥페란정", image: drug13, id: 13, likes: 6 },
  { name: "리보트릴정(클로나제팜)", image: drug, id: 14, likes: 0 },
];

const ITEMS_PER_PAGE = 10;

export default function DrugList() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastDrug = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstDrug = indexOfLastDrug - ITEMS_PER_PAGE;
  const currentDrugs = drugs.slice(indexOfFirstDrug, indexOfLastDrug);

  const totalPages = Math.ceil(drugs.length / ITEMS_PER_PAGE);

  return (
    <ListContainer>
      {currentDrugs.map((drug) => (
        <DrugItem key={drug.id}>
          <DrugImage src={drug.image} alt={drug.name} />
          <DrugInfo>
            <DrugName>{drug.name}</DrugName>
          </DrugInfo>
          <DrugActions>
            <Link to='/drug-detail'>
              <ActionButton>상세 정보</ActionButton>
            </Link>
            <ActionButton>담기</ActionButton>
            <LikeButton>
              <img src={likeIcon} alt='Like' style={{ width: "20px" }} />{" "}
              {drug.likes}
            </LikeButton>
          </DrugActions>
        </DrugItem>
      ))}
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageNumber
            key={index + 1}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PageNumber>
        ))}
      </Pagination>
    </ListContainer>
  );
}
