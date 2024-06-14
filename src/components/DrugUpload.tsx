import React, { useState } from "react";
import styled from "@emotion/styled";

const UploadContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 500px;
  padding: 20px;
  margin: 50px auto;
  text-align: center;
`;

const UploadBox = styled.div`
  border: 2px dashed #cccccc;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
`;

const UploadText = styled.p`
  margin: 10px 0;
`;

const BrowseLink = styled.span`
  color: #007bff;
  cursor: pointer;
`;

const SupportedFormats = styled.p`
  color: #666666;
  font-size: 0.9em;
`;

const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9em;
  margin-top: 10px;
`;

const UrlUpload = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const UrlInput = styled.input`
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  width: 70%;
  margin-right: 10px;
`;

const UploadButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionButton = styled.button`
  background-color: #f1f1f1;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  z-index: 9999;
`;

export default function DrugUpload() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setLoading(true);
        setTimeout(() => {
          window.location.href = "/drug-detail";
        }, 2000);
      } else {
        setError("잘못된 파일을 올렸습니다.");
      }
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setLoading(true);
        setTimeout(() => {
          window.location.href = "/drug-detail";
        }, 2000);
      } else {
        setError("잘못된 파일을 올렸습니다.");
      }
    }
  };

  return (
    <UploadContainer>
      {loading && <LoadingOverlay>Loading...</LoadingOverlay>}
      <h2>Upload Photos</h2>
      <UploadBox onDragOver={handleDragOver} onDrop={handleDrop}>
        <UploadText>
          Drop your image here, or <BrowseLink>browse</BrowseLink>
        </UploadText>
        <SupportedFormats>Supports: PNG, JPG, JPEG, WEBP</SupportedFormats>
        <FileInput type='file' onChange={handleFileUpload} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </UploadBox>
      <UploadText>or</UploadText>
      <UrlUpload>
        <UrlInput type='text' placeholder='Add file URL' />
        <UploadButton>Upload</UploadButton>
      </UrlUpload>
      <Actions>
        <ActionButton>Cancel</ActionButton>
        <ActionButton>Done</ActionButton>
      </Actions>
    </UploadContainer>
  );
}
