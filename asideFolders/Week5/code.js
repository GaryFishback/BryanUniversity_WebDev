axios.get("https://rickandmortyapi.com/api/character/61").then((response) => {
  //    for(let i = 0; i < response.data.length; i++){
  //     const data= response.data[i]
  //     showData(data.object[0].character/61)
  //      console.log(data.object[0].character/61)
  showData(response.data);
  console.log(response.data);
});
axios.get("https://rickandmortyapi.com/api/character/332").then((response) => {
  //  for(let i = 0; i < response.data.length; i++){
  showData(response.data);
  console.log(response.data);
});
axios.get("https://rickandmortyapi.com/api/character/201").then((response) => {
  //  for(let i = 0; i < response.data.length; i++){
  showData(response.data);
  console.log(response.data);
});
function showData(arr) {
  // for(let i = 0; i < arr.length; i++){
  const h1 = document.createElement("h1");
  h1.textContent = arr.name;
  document.body.appendChild(h1);
}
// }}})
