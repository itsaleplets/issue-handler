const mongoose = require('mongoose')

const issueSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please, enter an issue title"]
        },
        description: {
            type: String,
            required: [true, "Please, enter an issue description"]
        },
    },
    {
        timestamps: true
    }
)

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;