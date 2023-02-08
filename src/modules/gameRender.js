import { getScore } from './gameApi.js';

// Render scores to the DOM
const gameRendered = async () => {
  const recentScoreEl = document.querySelector('.recent-scores');
  recentScoreEl.innerHTML = '';
  const gameResults = await getScore();
  gameResults.result.forEach(({ user, score }) => {
    const item = `
    <li class="recent-list">${user}:${score}</li>
    `;
    recentScoreEl.insertAdjacentHTML('afterbegin', item);
  });
};

export default gameRendered;
