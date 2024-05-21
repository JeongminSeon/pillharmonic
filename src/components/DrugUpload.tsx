import React, { useState } from "react";
import styled from "@emotion/styled";
import { uploadDrugImage } from "../services/api"; // API 함수 임포트

const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  justify-content: center;
`;

const FileInputLabel = styled.label`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const UploadButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  margin-left: 10px;

  &:hover {
    background-color: #218838;
  }
`;

const FileNameContainer = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
  width: 250px;
  text-align: center;
`;

const FileName = styled.div<{ isFileSelected: boolean }>`
  font-size: 14px;
  color: ${({ isFileSelected }) => (isFileSelected ? "black" : "red")};
`;

export default function DrugUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      if (selectedFile && selectedFile.type.startsWith("image/")) {
        setFile(selectedFile);
        setErrorMessage(null);
      } else {
        setFile(null);
        setErrorMessage("Please upload an image file.");
      }
    }
  };

  const handleUpload = async () => {
    if (file) {
      const response = await uploadDrugImage(file);
      if (response.ok) {
        setUploadStatus("Upload successful");
      } else {
        setUploadStatus(`Upload failed: ${response.error}`);
      }
    }
  };

  return (
    <Container>
      <FileInputContainer>
        <FileInputLabel htmlFor='fileUpload'>Choose File</FileInputLabel>
        <HiddenFileInput
          type='file'
          id='fileUpload'
          onChange={handleFileChange}
        />
        <FileNameContainer>
          {errorMessage ? (
            <FileName isFileSelected={false}>{errorMessage}</FileName>
          ) : (
            <FileName isFileSelected={!!file}>
              {file ? `Selected file: ${file.name}` : "No file selected"}
            </FileName>
          )}
        </FileNameContainer>
        <UploadButton onClick={handleUpload}>Upload</UploadButton>
      </FileInputContainer>
      {uploadStatus && <div>{uploadStatus}</div>}
    </Container>
  );
}
