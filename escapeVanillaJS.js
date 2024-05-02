
// Event listener for solving Room 1
document.addEventListener("DOMContentLoaded", () => {
document.getElementById("solveRoom1").addEventListener("click", () => {
    // Fetch data from 'books.json'
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    fetch('books.json')
      .then(response => response.json())
      .then(books => {
        // Find the most recent book using findMostRecentBook function
        const mostRecentBook = findMostRecentBook(books);
        // Update the text content of "room1Result" element with the book title
        document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
    });

    
    // Event listener for solving Room 2
    document.getElementById("solveRoom2").addEventListener("click", () => {
        // Define sets for JS and React concepts
        const jsConcepts = new Set(['closure', 'scope', 'hoisting' , 'prototype']); //prototype links objects in javascript when declared as a const.
        // 🪲 Bug: What's mssing from JS concepts?
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
         // Find the intersection of concepts using findIntersection function
        // 🪲 Bug: Incorrect function call
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);//called the reactConcepts, combining it with jsConcepts to find common concepts.
        const commonConceptsArray = ['async']
        // Update the text content of "room2Result" element with the common concepts
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${(commonConcepts).commonConceptsArray}`;
    });

    // 🪲 Bug: Asynchronous function ?
    // Event listener for solving Room 3 (asynchronous)
    document.getElementById("solveRoom3").addEventListener("click", async () => {
        try {
        // Fetch data from 'directions.json' file
        const response = await fetch('directions.json');
        const directions = await response.json();
        // Navigate the labyrinth using navigateLabyrinth function
        const message = await navigateLabyrinth(directions);
        // Update the text content of "room3Result" element with the value of the message
        document.getElementById("room3Result").textContent = message;
        } catch (error) {
        console.error("Error navigating labyrinth:", error);
        // Handle the error. Display an error message to the user
        }
    });
    })

// Function to find the most recent book by published date
function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    return books.reduce((mostRecent, book) => (new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent)); //changed the smaller than to greater than. The function so it can iterates over the books.json file.
}

//declares a function named findIntersection.
// Function to find the intersection of two sets
function findIntersection(setA, setB) {      
    // 🪲 Bug: Incorrect logic
    const intersection = new Set();     //Holds elements that are found in both set A & B.
    for (const value of setA) {     //uses a for...of loop to iterate over each elements' value in setA.
        if (setB.has(value)) {      //checks if the value from setA also available in setB aswell. The 'has' method determines if a specific value is present in the set
            intersection.add(value);    //if the element is present in both setA and B the setB.has(value) returns "true". The add method is used to add the value to the intersection.
        }
    }
    return intersection;    //returns the intersection set. Contains the elements that were found in both the input sets.
}


async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        //The Promise is created with a callback function that takes resolve as an argument.
        await new Promise(resolve => setTimeout(resolve, 1000));    //The await in this promise introduces a 1 second(1000 milliseconds) delay
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

