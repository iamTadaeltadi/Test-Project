import axios from 'axios'

axios.defaults.baseURL = process.env.SERVER_URL;

export const getSongsAPI = async () => axios.get('/Songs')


export const createsongAPI = async (song) => axios.post(`/Songs`, song)

export const updatesongAPI = (id, updatedSongData) => {
  return axios.put(`/Songs/${id}`, updatedSongData);
};

export const deletesongByIdAPI = async (id) => axios.delete(`/Songs/${id}`)