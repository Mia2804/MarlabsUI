// 1. Bind creates a new function, that when calls has its this keyword
// set to be the provided context.

var pokemon = {
    // Difference between : and = -->
    firstName : 'Pika',
    lastName : 'Chu',
    getPokeName: function() {
        var fullName = this.firstName+' '+this.lastName
        return fullName;
    }

};

var pokemonName = function(snack, hobby){
    console.log(this.getPokeName() + ' I choose you')
    console.log(this.getPokeName() + ' I love '+snack+ ' and '+hobby)
}

// bindPokemon is the new function created
var bindPokemon = pokemonName.bind(pokemon)

bindPokemon('sushi', 'JavaScript')

// 2. Call: call a function with a given this and arguments provided indivdually 

pokemonName.call(pokemon, 'Kimchi', 'Python')

pokemonName.apply(pokemon, ['Kimchi', 'Python'])