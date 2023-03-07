import './style.css';
import getScores from './modules/score.js';

const scoresTable = document.querySelector('.scores');

getScores(scoresTable);