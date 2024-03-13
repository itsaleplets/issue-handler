// API Requests
function getIssue() {
    return fetch("http://localhost:8000/issues")
    .then(res => res.json());
}

function getIssueById(id) {
    return fetch(`http://localhost:8000/issues/${id}`)
    .then(res => res.json())
    .catch(err => console.log(err));
}

function createIssue(data) {
    return fetch(`http://localhost:8000/issues`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json());
}

function updateIssue(id, data) {
    return fetch(`http://localhost:8000/issues/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json());
}

function deleteIssue(id) {
    fetch(`http://localhost:8000/issues/${id}`, {method: "DELETE"})
    .then(res => res.json());
}


// Helpers
function displayIssueAllIssues(issues) {
    const all_issues = document.getElementById('json-data');
    all_issues.innerHTML = JSON.stringify(issues, null, 2);  
}

function displayIssue(issue) {
    document.getElementById('issueId').value = issue._id
    document.getElementById('issueTitle').value = issue.title
    document.getElementById('issueDescription').value = issue.description
}

function cleanList() {
    const all_issues = document.getElementById('json-data');
    all_issues.innerHTML = "";
}

// Middlewares
async function listIssues() {
    const issues = await getIssue()
    console.log(issues)
    displayIssueAllIssues(issues)
}

async function listIssueByID(id) {
    cleanList()
    const getId = document.getElementById("issueId")
    if (!getId.value) {
        alert("Issue ID must be inserted")
    } else {
        const issue = await getIssueById(getId.value)

        displayIssue(issue)
    }
}

async function createNewIssue() {
    cleanList()
    body = {
        title: document.getElementById('issueTitle').value,
        description: document.getElementById('issueDescription').value,
    }

    const issue = await createIssue(body)
    if(!issue) {
        alert("It was not possible to create a issue")
    } else {
        displayIssue(issue)
    }
}

async function updateAnIssue() {
    cleanList()
    const getId = document.getElementById("issueId")

    body = {
        title: document.getElementById('issueTitle').value,
        description: document.getElementById('issueDescription').value,
    }

    if (!getId.value) {
        alert("Issue ID must be inserted")
    } else {
        const issue = await updateIssue(getId.value, body)

        displayIssue(issue)
    }
}

async function deleteAnIssue(id) {
    cleanList()
    const getId = document.getElementById("issueId")
    if (!getId.value) {
        alert("Issue ID must be inserted")
    } else {
        const issue = await deleteIssue(getId.value)

    }
}