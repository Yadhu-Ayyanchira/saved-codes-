async function searchSurvey(input) {
  try {
    const regex = new RegExp(input, "i"); // 'i' flag for case-insensitive matching
    const result = await db.collection_name
      .find({
        $or: [
          { name: regex },
          { description: regex },
          { surveyCategory: regex },
          { businessName: regex },
          { researchGoal: regex },
          { tag: regex }
        ],
      })
      .toArray();

    return result;
  } catch (error) {
    console.error("Error searching survey:", error);
    throw error;
  }
}

// Example usage
const userInput = "Intimate"; // This could be whatever comes from the frontend
searchSurvey(userInput)
  .then((result) => {
    console.log("Search result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
