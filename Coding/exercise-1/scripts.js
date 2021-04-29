console.log('welcome to pokefetch')

var Sprite = document.getElementById('sprite')
var Types = document.getElementById('types')
var Stats = document.getElementById('stats')
var Info = document.getElementById('info')

function pokeClear () {
  Sprite.src=''
  Types.innerText=''
  Stats.innerHTML=''
  Info.innerText=''

}

function pokeFetch () {

  pokeClear();

  var pokeSearch = document.getElementById('search').value
  console.log(pokeSearch)
  const pokeAPI = "https://pokeapi.co/api/v2/pokemon/"
  var pokeFetch = pokeAPI +  pokeSearch
  fetch(pokeFetch)
    .then(response => response.json())
    .then(data => {
      Sprite.src=data.sprites.front_default
      Types.innerText="Types:"+data.types.map(item=>item.type.name);
      Stats.innerHTML=data.stats.map(stat =>
        "<li>"+stat.stat.name+":"+stat.base_stat+"</li>"
      ).join('')
    })
    .catch((error) =>{
      console.error('Error:', error)
      Info.innerText="Error:" + error
    })

}

document.getElementById("submit").onclick = pokeFetch;