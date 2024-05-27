import React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

const DetailContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const DrugImage = styled.img`
  width: 200px;
  height: 200px;
`;

const DrugName = styled.h2`
  margin: 20px 0;
`;

const DrugDescription = styled.p`
  font-size: 16px;
`;

const mockDrugs: Drug[] = [
  {
    id: 1,
    name: "Drug 1",
    description: "Description 1",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Drug 2",
    description: "Description 2",
    imageUrl: "https://via.placeholder.com/100",
  },
  // 더 많은 약물 추가
];

interface Drug {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const DrugDetail = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid Drug ID</div>;
  }

  const drug = mockDrugs.find((d) => d.id === parseInt(id, 10));

  if (!drug) {
    return <div>Drug not found</div>;
  }

  return (
    <DetailContainer>
      <DrugImage src={drug.imageUrl} alt={drug.name} />
      <DrugName>{drug.name}</DrugName>
      <DrugDescription>{drug.description}</DrugDescription>
    </DetailContainer>
  );
};

export default DrugDetail;
