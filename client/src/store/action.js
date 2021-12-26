import axios from "axios";

const getPost = () => {
    return async (dispatch) => {
        await axios.get('http://localhost:5000/get')
            .then((response) => {
                dispatch({ type: "GETPOSTDATA", posts: response })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export {
    getPost,
}