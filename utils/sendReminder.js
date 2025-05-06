const sendEmail = require('./sendEmail');

const intervals = [24, 12, 6, 2, 0.5]; // in hours

module.exports = async function sendReminders() {
  const now = new Date();
  const noww = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

  const speakers = [
    {
      name: "Avinash",
      email: "g.avinash@iitg.ac.in",
      speechDateTime: new Date(noww.getTime() + 24 * 60 * 60 * 1000), // +1 day
    },
    {
      name: "Arunika",
      email: "n.arunika@iitg.ac.in",
      speechDateTime: new Date(noww.getTime() + 24 * 60 * 60 * 1000), // +1.25 days
    },
    {
      name: "Avinash Gupta",
      email: "guptaavinash302@gmail.com",
      speechDateTime: new Date(noww.getTime() + 25 * 60 * 60 * 1000), // +2 days
    },
    {
      name: "Laladwesh",
      email: "laladwesh@gmail.com",
      speechDateTime: new Date(noww.getTime() + 24 * 60 * 60 * 1000), // +3 days
    },
    {
      name: "Kim Naskar",
      email: "kimnaskar11@gmail.com",
      speechDateTime: new Date(noww.getTime() + 26 * 60 * 60 * 1000), // +4 days
    }
  ].map(s => ({ ...s, remindersSent: [] }));

  for (const speaker of speakers) {
    const diffInHours = (speaker.speechDateTime - now) / (1000 * 60 * 60);

    for (const interval of intervals) {
      if (
        diffInHours <= interval &&
        diffInHours > interval - 0.1 && // 6-min buffer
        !speaker.remindersSent.includes(interval)
      ) {
        await sendEmail(speaker.email, `Reminder: Your speech is in ${interval} hours this message is from deployment`);
        speaker.remindersSent.push(interval);
        await speaker.save();
      }
    }
  }
};
