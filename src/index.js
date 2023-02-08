import './style.css';
import { addScore } from './modules/gameApi.js';
import gameRendered from './modules/gameRender.js';

const refreshButton = document.querySelector('.refresh-button');
const scoresForm = document.querySelector('.scores-form');

scoresForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const user = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  if (!user || !score) return;
  const recentScore = {
    user,
    score,
  };
  addScore(recentScore);
  scoresForm.reset();

  refreshButton.addEventListener('click', (e) => {
    e.preventDefault();
    gameRendered();
  });
  // initialize the function "async" when the page completely loads
  document.addEventListener('DOMContentLoaded', async () => {
    gameRendered();
  });
});
