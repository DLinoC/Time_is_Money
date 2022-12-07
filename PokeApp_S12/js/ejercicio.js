// fetchData()
const img = document.getElementById('imagen');
const fetchimg = async (id) => {
    const pokemonos = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const dataimg = await pokemonos.json();
    img.setAttribute('src', dataimg.sprites.other.dream_world.front_default);
}
const fetchData = async () => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/generation/generation-i`); const pokemonos = await fetch('https://pokeapi.co/api/v2/pokemon/1'); const dataimg = await pokemonos.json();const data = await res.json();const pokemon = { img: dataimg.sprites.other.dream_world.front_default, name: data.name, lista: data.pokemon_species }; llenarSelect(pokemon.lista);
    } catch (error) {
        console.log(error)
    }
}
fetchData()
const llenarSelect = (lista) => {
    const select = document.getElementById('pokemones');
    select.addEventListener('change', ( event ) => {
        fetchimg(event.target.value)
    })
    for (const key in lista) {
        const opcion = document.createElement('option');
        opcion.setAttribute('value', lista[key].name)
        opcion.textContent = lista[key].name; 
        select.append(opcion)
    }
}