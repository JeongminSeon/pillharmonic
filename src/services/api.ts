import axios from "axios";

const API_URL = "http://yoonjs199696.cafe24.com"; // 실제 API URL로 교체하세요

export const searchDrug = async (query: string) => {
  try {
    const response = await axios.get(`${API_URL}/search?drug=${query}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch drug data");
    }
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return { ok: false, error: error.message };
    }
    return { ok: false, error: "Unknown error occurred" };
  }
};

export const getDrugList = async () => {
  try {
    const response = await axios.get(`${API_URL}/drugs`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch drug list");
    }
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return { ok: false, error: error.message };
    }
    return { ok: false, error: "Unknown error occurred" };
  }
};

export const uploadDrugImage = async (image: File) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    const response = await axios.post(`${API_URL}/Image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 200) {
      console.log("업로드 성공");
      console.log(response);
      return { ok: true, data: response.data };
    } else {
      throw new Error("Failed to upload image");
    }
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return { ok: false, error: error.message };
    }
    return { ok: false, error: "Unknown error occurred" };
  }
};
