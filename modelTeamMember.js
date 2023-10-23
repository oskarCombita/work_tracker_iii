const mongoose = require('mongoose');

// Schemas
const teamMemberSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        rates: {
                setUpRate: {
                    type: Number,
                    require: true
                },
                shopRate: {
                    type: Number,
                    require: true
                }
            }
               
    },
    { versionKey: false }
);

// Models
const teamMembers = new mongoose.model('teamMembers', teamMemberSchema);

module.exports = { teamMembers };