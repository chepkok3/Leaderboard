import { getScore } from './gameApi.js';

// Render scores to the DOM
const gameRendered = async () => {
  const recentScoreEl = document.querySelector('.recent-scores');
  recentScoreEl.innerHTML = '';
  const gameResults = await getScore();
  gameResults.result.forEach(({ user, score }) => {
    const item = `
    <li class="recent-list">
      <span class="user">${user}:</span>
      <span class="score">${score}</span>
    </li>
    `;
    recentScoreEl.insertAdjacentHTML('afterbegin', item);
  });
};

export default gameRendered;
