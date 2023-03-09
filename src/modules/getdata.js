export const getData = async () => {
  const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yILAt9hHFpCy3D3LuPBP/scores/');
  const data = await request.json();
  data.result.sort((a, b) => b.score - a.score);

  const displayData = async (data) => {
    data.result.forEach((elemenT) => {
      document.querySelector('.scores').innerHTML += `
         <p> ${elemenT.user} : ${elemenT.score}</p>
        `;
    });
  };
  displayData(data);
};

export const postData = async (item) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yILAt9hHFpCy3D3LuPBP/scores/', {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: item.name,
      score: item.score,
    }),
  });
  const responseload = await response.json();
  return responseload;
};
