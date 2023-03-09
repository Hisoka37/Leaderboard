import './style.css';
import { getData, postData } from './modules/getdata.js';
import BoardList from './modules/bordlist.js';

const score = document.querySelector('#score');
const refreshBtn = document.querySelector('#refreshBtn');
const scoresTable = document.querySelector('.scores');
const submitBtn = document.querySelector('#submitBtn');
const name = document.querySelector('.name');

submitBtn.addEventListener('click', (e) => {
  const table = new BoardList(name.value, score.value);
  e.preventDefault();
  postData(table);
  scoresTable.innerHTML = '';
  name.value = '';
  score.value = '';
  setTimeout(getData, 300);
});

refreshBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  scoresTable.innerHTML = '';
  getData();
});

window.addEventListener('DOMContentLoaded', getData);