const scoreslist = [
  { name: 'Name', score: 100 },
  { name: 'Name', score: 20 },
  { name: 'Name', score: 50 },
  { name: 'Name', score: 78 },
  { name: 'Name', score: 125 },
  { name: 'Name', score: 77 },
  { name: 'Name', score: 42 },
];

const getScores = (scoresTable) => {
  scoresTable.innerHTML = '';
  const list = document.createElement('ul');
  list.classList = 'list-container';
  scoresTable.appendChild(list);
  for (let i = 0; i < scoreslist.length; i += 1) {
    const element = document.createElement('li');
    element.classList = 'list-element';
    element.innerHTML = `
        <li>
        <span>${scoreslist[i].name}</span>
        <span>:</span>
        <span>${scoreslist[i].score}</span>
      </li>     
        `;
    list.appendChild(element);
  }
};

export default getScores;