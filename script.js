var Airtable = require("airtable");
console.log(Airtable);

var base = new Airtable({ apiKey: "keyUKsTPPNZc3s7p2" }).base(
    "appfx4251bX3jwNEN"
  );

  base("letters").select({}).eachPage(gotPageOfLetters, gotAllLetters);

  const letters = [];

  // callback function that receives our data
function gotPageOfLetters(records, fetchNextPage) {
    console.log("gotPageOfLetters()");
    // add the records from this page to our letters array
      letters.push(...records);
    // request more pages
    fetchNextPage();
  }

  // call back function that is called when all pages are loaded
function gotAllLetters(err) {
    console.log("gotAllLetters()");
  
    
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }

      // call function to show the letters
  consoleLogLetters();
  showLetters();
}

// just loop through the letters and console.log them
function consoleLogLetters() {
    console.log("consoleLogLetters()");
    letters.forEach((letter) => {
      console.log("Letter:", letter);
    });
  }


 
  function showLetters() {
    console.log("showLetters()");
    letters.forEach((letter) => {

        var letterContainer = document.createElement("div");
        letterContainer.classList.add("letter-container");
        document.querySelector(".container").append(letterContainer);
      
        // add image to letter container
        var letterImage = document.createElement("img");
        letterImage.classList.add("letter-image");
        letterImage.src = letter.fields.letter_image[0].url;
        letterContainer.append(letterImage);


        // get filter field from airtable
        // loop through the array and add each filter
        // add a class to the letter container

        var filter = letters.fields.filter;
        filter.forEach(function(filter) {
        letterContainer.classList.add(filter);
    });



