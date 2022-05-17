//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const character = document.querySelector('input').value.toLowerCase()
  const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${character}&ts=1&apikey=b57d8645876b715308933549d9eeeb1c&hash=e58d245a4e4581745b2386b8da3e63d1`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        result = data;
        document.querySelector('#tableTime').innerHTML = `<tr>
				<th scope="col">Character Name</th>
				<th scope="col">Image</th>
				<th scope="col">Description</th>
				<th scope="col">Link to comics</th>
			  </tr>`;
        printNameBioImgApp(data);
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("Sorry, you've not entered a valid name")
      });
}

function printNameBioImgApp(data){
  for(let i = 0; i < data.data.results.length; i++){
    console.log(data.data.results[i].name)
    createRow(data.data.results[i]);
  }
}

function createRow(cha){
  let comicLink = cha.urls.findIndex(e=>e.type == "comiclink");
  document.querySelector('#tableTime').innerHTML += `
  <tbody>
<tr>
<td data-label="name">${cha.name}</td>
<td data-label="pic"><img src="${cha.thumbnail.path}.${cha.thumbnail.extension}" alt="${cha.name}" width="350px"></td>
<td data-label="bio">${cha.description != "" ? cha.description : "No description provided, sorry"}</td>
<td data-label="readMore">Link to <a href="${cha.urls[comicLink].url}"/>${cha.name} comics</a> here.</td>
</tr>
</tbody>
`
}


