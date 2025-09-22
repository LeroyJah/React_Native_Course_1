export function fetchAPI(){
    fetch('https://pokeapi.co/api/v2/pokemon/golisopod')
    .then(res => res.json)
    .then(obj => console.log(obj))
}
