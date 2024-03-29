import axios, { AxiosResponse } from "axios";
import { ResponseAPI } from "./types";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// GET
const apiGet = async (rota: string, params?: any): Promise<ResponseAPI> => {
  try {
    const resposta: AxiosResponse = await axios.get(rota, { params });
    const retornoAPI: ResponseAPI = {
      success: resposta.data.success,
      data: resposta.data.data,
    };

    return retornoAPI;
  } catch (error: any) {
    const retornoAPIError: ResponseAPI = {
      success: error.response.data.success,
      data: error.response.data.data,
    };

    return retornoAPIError;
  }
};

// POST
const apiPost = async (rota: string, dados: any): Promise<ResponseAPI> => {
  try {
    const resposta: AxiosResponse = await axios.post(rota, dados);
    const retornoAPI: ResponseAPI = {
      success: resposta.data.success,
      data: resposta.data.data,
    };    
    return retornoAPI;
  } catch (error: any) {
    if (error.response) {
      const retornoAPIError: ResponseAPI = {
        success: error.response.data.success,
        data: error.response.data.data,
        error: error.response.data.error,
      };
      console.log("Erro na resposta da API:", error.response);
      return retornoAPIError;
    } else if (error.request) {
      const retornoAPIError: ResponseAPI = {
        success: false,
        error: "Erro de conexão com a API",
      };
      console.log("Erro de conexão com a API:", error.code);
      return retornoAPIError;
    } else {
      const retornoAPIError: ResponseAPI = {
        success: false,
        error: "Erro desconhecido",
      };
      console.log("Erro desconhecido:", error.message);
      return retornoAPIError;
  }}
};

// PUT
// /users/id/contacts/id
const apiPut = async (rota: string, dados: any) => {
  try {
    const resposta: AxiosResponse = await axios.put(rota, dados);

    const retornoAPI: ResponseAPI = {
      success: resposta.data.success,
      data: resposta.data.data,
    };

    return retornoAPI;
  } catch (error: any) {
    const retornoAPIError: ResponseAPI = {
      success: error.response.data.success,
      error: error.response.data.error,
    };

    return retornoAPIError;
  }
};

// DELETE
const apiDelete = async (rota: string) => {
  try {
    const resposta: AxiosResponse = await axios.delete(rota);

    const retornoAPI: ResponseAPI = {
      success: resposta.data.success,
      data: resposta.data.data,
    };

    return retornoAPI;
  } catch (error: any) {
    const retornoAPIError: ResponseAPI = {
      success: error.response.data.success,
      data: error.response.data.data,
    };

    return retornoAPIError;
  }
};

export { apiGet, apiPost, apiPut, apiDelete };
