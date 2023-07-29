import api from "@/services/index";

export const Status = async () => {
  const response = await api.get(`status`);
  return response.data;
};

export const TypeDispute = async () => {
  const response = await api.get(`tipo_disputa`);
  return response.data;
};

export const Portal = async () => {
  const response = await api.get(`portais`);
  return response.data;
};

export const Modality = async () => {
  const response = await api.get(`modalidades`);
  return response.data;
};
