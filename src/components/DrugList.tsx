import React from "react";
import styled from "@emotion/styled";

interface Drug {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

interface DrugListProps {
  drugs: Drug[];
}

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const DrugItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  width: 150px;
  text-align: center;
`;

const DrugImage = styled.img`
  width: 100px;
  height: 100px;
`;

export default function DrugList({ drugs }: DrugListProps) {
  return (
    <ListContainer>
      {drugs.map((drug) => (
        <DrugItem key={drug.id}>
          <DrugImage src={drug.imageUrl} alt={drug.name} />
          <div>{drug.name}</div>
          <div>{drug.description}</div>
        </DrugItem>
      ))}
    </ListContainer>
  );
}
