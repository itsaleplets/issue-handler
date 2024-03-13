import axios from 'axios';

const API = 'http://localhost:8000';

const getIssues = () => axios.get(`${API}/issues/`)
    .then((res) => ({ response: res, result: true }))
    .catch((err) => ({ response: err, result: false })
);

const getIssueByID = (id) => axios.get(`${API}/issues/${id}`)
    .then((res) => ({ response: res, result: true }))
    .catch((err) => ({ response: err, result: false })
);

const deleteIssue = (id) => axios.delete(`${API}/issues/${id}`)
    .then((res) => ({ response: res, result: true }))
    .catch((err) => ({ response: err, result: false })
);

const updateIssue = (body, id) => axios.put(`${API}/issues/${id}`, body)
    .then((res) => ({ response: res, result: true }))
    .catch((err) => ({ response: err, result: false })
);


const createIssue = (body, id) => axios.post(`${API}/issues/`, body)
    .then((res) => ({ response: res, result: true }))
    .catch((err) => ({ response: err, result: false })
);


export { getIssues, deleteIssue, getIssueByID, updateIssue, createIssue };