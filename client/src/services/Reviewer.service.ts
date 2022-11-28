import axios from "axios";

const URL = process.env.REACT_APP_URL_BASE;

const getReviewers = async () => {
    return await axios.post(`${URL}login`);
};
const getReviewers2 = async () => {
    return await axios.post(`${URL}login`);
};
const getReviewers3 = async () => {
    return await axios.post(`${URL}login`);
};

const reviewerService = {
    obtenerRevisores: getReviewers,
    getReviewers2,
    getReviewers3
};

export default reviewerService;