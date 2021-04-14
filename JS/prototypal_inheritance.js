let dragon = {
    name : 'Tanya',
    fire : true,
    fight() {
        return 9
    },
    sing(){
        if(this.fire)
        return `I am ${this.name}, the breather of fire`
    }
}
let lizard = {
    fire: true,
    name: 'Kiki',
    fight(){
        return 5
    }
}

// We are going to borrow the sing method for the lizard using bind
const singLizard = dragon.sing.bind(lizard);
//bind redirects the this keyward
console.log(singLizard())