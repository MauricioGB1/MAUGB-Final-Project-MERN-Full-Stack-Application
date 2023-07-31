const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0,
    },
    postedAt: {
        type: Date,
        default: Date.now,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        // required: true,
    },
});

const Project = model("Project", ProjectSchema);

module.exports = Project;