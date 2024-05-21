import React from "react";
import styled from "@emotion/styled";

interface DrugSearchProps {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: () => void;
}

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 50px;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #218838;
  }
`;

export default function DrugSearch({
  query,
  setQuery,
  handleSearch,
}: DrugSearchProps) {
  return (
    <SearchBarContainer>
      <Input
        type='text'
        placeholder='Search for drugs'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button>Find Drug</Button>
    </SearchBarContainer>
  );
}
