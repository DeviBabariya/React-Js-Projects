import axios from 'axios';

export const loading = () => {
    return {
        type: "LOADING"
    }
}


export const addProductSUC = () => {
    return {
        type: "ADD_PRODUCT_SUC",
    }
}

export const addProductRej = (err) => {
    return {
        type: "ADD_PRODUCT_REJ",
        payload: err
    }
}



export const getAllProducts = (data) => {
    return {
        type: "GET_ALL_PRODUCTS_SUC",
        payload: data
    }
}
export const getProductsRej = (err) => {
    return {
        type: "GET_ALL_PRODUCTS_REJ",
        payload: err
    }
}


export const getProduct = (data) => {
    return {
        type: "GET_PRODUCT",
        payload: data
    }
}

export const updateProduct = () => {
    return {
        type: "UPDATE_PRODUCT"
    }
}

export const setSearchProductQuery = (query) => {
    return {
        type: "SEARCH_PRODUCT",
        payload: query
    }
}

// async action

export const getAllProductAsync = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.get('http://localhost:3000/products')
            setTimeout(() => {
                dispatch(getAllProducts(res.data));
            }, 2000);

        } catch (error) {
            console.log(error);
            dispatch(getProductsRej(error.message))
        }

    }
}

// add new product
export const addProductAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.post('http://localhost:3000/products', data)
            // console.log(res);
            dispatch(addProductSUC());
        } catch (error) {
            console.log(error);
            dispatch(addProductRej(error.message))
        }
    }
}

// delete product
export const deleteProductAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.delete(`http://localhost:3000/products/${id}`)
            dispatch(getAllProductAsync());
        } catch (error) {
            console.log(error);
            dispatch(addProductRej(error.message))
        }
    }
}

// get single product
export const getProductAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.get(`http://localhost:3000/products/${id}`)
            dispatch(getProduct(res.data));
        } catch (error) {
            console.log(error);
            dispatch(addProductRej(error.message))
        }
    }
}

// update product
export const updateProductAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.put(`http://localhost:3000/products/${data.id}`, data)
            // console.log(res);
            dispatch(updateProduct());
        } catch (error) {
            console.log(error);
            dispatch(addProductRej(error.message))
        }
    }
}

export const searchProduct = (query = "") => async (dispatch) => {
    dispatch({ type: "SEARCH_PRODUCT_LOADING" });
    try {
        const res = await axios.get(`http://localhost:3000/products`, {
            params: { q: query } 
        });
        dispatch({
            type: "SEARCH_PRODUCT_SUC",
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: "SEARCH_PRODUCT_ERR",
            payload: error.message
        });
    }
};