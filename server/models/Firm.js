const { Schema, model } = require('mongoose');

const FirmSchema = new Schema(
    {
        firmName: {
            type: String,
            required: true
        },
        firmOwner: {
            type: Schema.Types.String,
            ref: 'User',
            required: true
        },
        projects: [
            {
                type: Schema.Types.ObjectID,
                ref: 'Project'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

FirmSchema.virtual('projectCount').get(function () {
    return this.projects.length;
})

const Firm = model('Firm', FirmSchema);

module.exports = Firm;