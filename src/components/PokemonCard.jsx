
function PokemonCard(props) {
    const pokemon = props.pokemonBox
0
    return pokemon && pokemon.imgSrc ?

        <figure>

            <img src={pokemon.imgSrc} alt={pokemon.imgSrc} />

            <figcaption>{pokemon.imgSrc}</figcaption>
        </figure>




        : <p>???</p>
}



export default PokemonCard;
