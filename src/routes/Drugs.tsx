import React, { useEffect } from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import DrugSearch from "../components/DrugSearch";
import { searchDrug, getDrugList } from "../services/api";

import DrugUpload from "../components/DrugUpload";
import { uploadDrugImage } from "../services/api";
import Pagination from "../components/Pagination";

interface Drug {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const ITEMS_PER_PAGE = 10;

const Container = styled.div`
  text-align: center;

  margin-top: 150px;
`;

export default function Drugs() {
  const [query, setQuery] = useState("");
  const [drugs, setDrugs] = useState<Drug[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(drugs.length / ITEMS_PER_PAGE);
  const currentDrugs = drugs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = async () => {
    const data = await searchDrug(query);
    setDrugs(data);
  };

  //   useEffect(() => {
  //     const fetchDrugs = async () => {
  //       const data = await getDrugList();
  //       setDrugs(data);
  //     };
  //     fetchDrugs();
  //   }, []);

  return (
    <Container>
      {/* <DrugSearch
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      /> */}
      <DrugUpload />
    </Container>
  );
}
