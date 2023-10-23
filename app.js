const mongoose = require('mongoose');
const { teamMembers } = require('./modelTeamMember');
const { records } = require('./modelRecord');

const dbURL = 'mongodb://127.0.0.1:27017/work_tracker_app';


// Conection
async function conectToMongoDB() {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conected to MongoDB');

    // Puedes realizar más operaciones aquí
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

conectToMongoDB();

const createTeamMember = () => {
  teamMembers.create(
    {
      name: 'Tutu',
      email: 'tutu@gmail.com',
      rates:{
          setUpRate: 20,
          shopRate: 18
        }      
    }
  )
};

createTeamMember();

const createRecord = () => {
  records.create(
    {
      jobDate: 

    }
  )

};
