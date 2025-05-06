const cron = require('node-cron');
const sendReminders = require('./utils/sendReminder.js');

// Run every minute
cron.schedule('* * * * *', async () => {
  console.log("Running reminder check...");
  await sendReminders();
});
