import axios from 'axios';

const API = 'http://localhost:8000';

const getIssues = () => axios.get(`${API}/issues/`)
    .then((res) => ({ response: res, result: true }))
    .catch((err) => ({ response: err, result: false })
);


export { getIssues };