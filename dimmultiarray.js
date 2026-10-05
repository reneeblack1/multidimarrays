//Task 1: Create a multi-dimensional array with nine books and/or movies of your choice.
let booksAndMovies = [
    ["The Hunger Games", "Powerless", "Twilight"],
    ["The Wolf of Wall Street", "Mean Girls", "Divergent"],
    ["Dune", "Project Hail Mary", "The Lord of The Rings"]
];



//Task 2: Access and log all the elements in the array using bracket notation with numbers.

console.log(
    booksAndMovies[0][0], booksAndMovies[0][1], booksAndMovies[0][2],
    booksAndMovies[1][0], booksAndMovies[1][1], booksAndMovies[1][2],
    booksAndMovies[2][0], booksAndMovies[2][1], booksAndMovies[2][2]
);




//Task 3: Access and log all the elements in the array using bracket notation with variables as indices. Use the variables row and item.
for (let row = 0; row < booksAndMovies.length; row++) { 
    for (let item = 0; item < booksAndMovies[row].length; item++) {
        console.log(booksAndMovies[row][item]);
    }
}

//Task 4: Write a loop that prints all the items on the second shelf.
for (let secondShelf = 0; secondShelf < booksAndMovies[1].length; secondShelf++) {
    console.log(booksAndMovies[1][secondShelf]);
}