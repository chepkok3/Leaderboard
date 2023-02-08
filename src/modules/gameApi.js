const gameId = 'SsLhSlrcPcqjttmPHLrh';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

// Sending score data to the API:
export const addScore = async (score) => {
  const response = await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });

  const { result } = await response.json();
  return result;
};
// Fetch scores data from API
export const getScore = async () => {
  const scoreData = await fetch(`${url}`);
  const result = await scoreData.json();
  return result;
};
