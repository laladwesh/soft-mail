const mongoose = require('mongoose');
const Speaker = require('../models/Speaker');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

    const speakers = [
        {
          name: "Avinash",
          email: "g.avinash@iitg.ac.in",
          speechDateTime: new Date(now.getTime() + 24 * 60 * 60 * 1000), // +1 day
        },
        {
          name: "Arunika",
          email: "n.arunika@iitg.ac.in",
          speechDateTime: new Date(now.getTime() + 24 * 60 * 60 * 1000), // +1.25 days
        },
        {
          name: "Avinash Gupta",
          email: "guptaavinash302@gmail.com",
          speechDateTime: new Date(now.getTime() + 25 * 60 * 60 * 1000), // +2 days
        },
        {
          name: "Laladwesh",
          email: "laladwesh@gmail.com",
          speechDateTime: new Date(now.getTime() + 24 * 60 * 60 * 1000), // +3 days
        },
        {
          name: "Kim Naskar",
          email: "kimnaskar11@gmail.com",
          speechDateTime: new Date(now.getTime() + 26 * 60 * 60 * 1000), // +4 days
        }
      ].map(s => ({ ...s, remindersSent: [] }));
      

  await Speaker.deleteMany({});
  await Speaker.insertMany(speakers);

  console.log('Dummy speakers inserted');
  process.exit();
});
