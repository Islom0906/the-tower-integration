import axios from './api';

const apiService = {
  async getData(url) {
    const {data} = await axios.get(url);
    return data
  },

  async getDataByID(url, id) {

    const {data} = await axios.get(`${url}/${id}`);
    return data;
},
async postData(url,formData) {
    const {data} = await axios.post(url,formData)
    return data;
},
}

export default apiService;