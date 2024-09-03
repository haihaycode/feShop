import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL + 'products';


const productService = {

    getAllProducts() {
        return axios.get(API_URL)
            .then(response => response.data)
            .catch(error => {
                console.error('There was an error fetching the products!', error);
                throw error;
            });
    },


    getProductById(productId) {
        return axios.get(`${API_URL}/${productId}`)
            .then(response => response.data)
            .catch(error => {
                console.error(`There was an error fetching the product with ID ${productId}!`, error);
                throw error;
            });
    },

    searchProducts(query) {
        return axios.get(`${API_URL}/search?q=${query}`)
            .then(response => response.data)
            .catch(error => {
                console.error(`There was an error searching for products with query "${query}"!`, error);
                throw error;
            });
    },
};

export default productService;