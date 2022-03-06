/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        if (this.budget > 100000000) {
            return true;
        } else {
            return false;
        }
    }
}


// For testing porpose:
const Endgame = new Movie('Endgame', 'Director1', 400000000);
const Pirates = new Movie('Pirates of the Caribbean: On Stranger Tides', 'Director2', 379000000);
const Avatar = new Movie('Avatar', 'Director3', 237000000);
const Mulan = new Movie('Mulan', 'Director4', 200000000);
const Cinderella = new Movie('Cinderella', 'Director5', 95000000);
const Rio = new Movie('Rio', 'Director', 92000000);
console.log(Avatar.wasExpensive());