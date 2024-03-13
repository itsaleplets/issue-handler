const express = require('express');
const Issue = require('./models/issueModel')
const mongoose = require('mongoose');

const app = express(); 
const PORT = 8000;

// Connection to MongoDB Database
mongoose.connect('mongodb+srv://Brasil:admin123@cluster0.ucuhdto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log(error)
})

app.use(express.json())
app.listen(PORT, () => console.log(`it's live on http://localhost:${PORT}`))

// Handle Cors Permission Errors 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept",
    );
    next();
  });


// Routes
app.get('/issues', async(req, res) => {
    try {
        const issues = await Issue.find({}) 
        res.status(200).json(issues)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
});

app.get('/issues/:id', async(req, res) => {
    try {
        const { id } = req.params
        const issues = await Issue.findById(id) 
        res.status(200).json(issues)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
});

app.post('/issues', async(req, res) => {
    try {
        const issue = await Issue.create(req.body)
        res.status(200).json(issue);

    } catch(error) {
        res.status(500).json({message: error.message})
    }
});

app.put('/issues/:id', async(req, res) => {
    try {
        const { id } = req.params
        const issue = await Issue.findByIdAndUpdate(id, req.body)
        if (!issue){
            return res.status(404).json({message: `cannot find any issue with id ${id}`})
        }
        const issue_updated = await Issue.findById(id)

        res.status(200).json(issue_updated)

    } catch(error) {
        res.status(500).json({message: error.message})
    }
});

app.delete('/issues/:id', async(req, res) => {
    try {
        const { id } = req.params
        const issue = await Issue.findByIdAndDelete(id)
        if (!issue){
            return res.status(404).json({message: `cannot find any issue with id ${id}`})
        }
        res.status(200).json(issue)

    } catch(error) {
        res.status(500).json({message: error.message})
    }
});
