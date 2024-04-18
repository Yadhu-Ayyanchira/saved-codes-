const express = require('express');
const app = express();

const survey = [
  { survey: "survey bumper" },
  { survey: "survey one" },
  { survey: "survey two" },
  { survey: "survey three" },
  { survey: "survey four" },
  { survey: "survey five" },
  { survey: "survey six" },
  { survey: "survey seven" },
  { survey: "survey eight" },
  { survey: "survey nine" },
  { survey: "survey ten" },
  { survey: "survey 11" },
  { survey: "survey 12" },
  { survey: "survey 13" },
  { survey: "survey 14" },
];

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Route to fetch random 5 surveys
app.get('/api/random-surveys', (req, res) => {
  // Make a copy of the survey array to avoid modifying the original array
  let shuffledSurvey = survey.slice();
  
  // Shuffle the array excluding the first element (survey bumper)
  shuffledSurvey = shuffleArray(shuffledSurvey.slice(1));

  // Select the first 4 surveys from the shuffled array
  const randomSurveys = shuffledSurvey.slice(0, 4);

  // Insert the survey bumper as the first element
  randomSurveys.unshift(survey[0]);

  res.json(randomSurveys);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
