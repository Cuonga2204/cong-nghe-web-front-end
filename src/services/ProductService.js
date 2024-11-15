import axios from "axios"

export const productAPI = {
    getAll: async () => {
        const { data } = await axios.get('http://localhost:3000/api/product/getAll');
        return data
    },

    getdDetail: async (id) => {
        const { data } = await axios.get(`http://localhost:3000/api/product/${id}`);
        return data
    }
}
