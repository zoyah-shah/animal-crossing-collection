var Airtable = require("airtable");
console.log(Airtable);

var base = new Airtable({ apiKey: "keyUKsTPPNZc3s7p2" }).base(
  "appfx4251bX3jwNEN"
);

base("letters")
  .select({})
  .eachPage(gotPageOfLetters, gotAllLetters);

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
  letters.forEach(letter => {
    console.log("Letter:", letter);
    console.log(letter.fields.filter)
  });
}

function showLetters() {
  console.log("showLetters()");
  letters.forEach(letter => {
    var letterContainer = document.createElement("div");

    letterContainer.classList.add("letter-container");

    document.querySelector(".letter-grid").append(letterContainer);

    // add image to letter container
    var letterImage = document.createElement("img");
    letterImage.classList.add("letter-image");
    letterImage.src = letter.fields.letter_image[0].url;
    letterContainer.append(letterImage);

   

    // get filter field from airtable
    // loop through the array and add each filter
    // add a class to the letter container

    var filter = letter.fields.filter;
    filter.forEach(function(filter){
      letterContainer.classList.add(filter);
    })
    
    //HUA COMMENTS: look for an ".eric" div I created in html as a button,
    //HUA COMMENTS: so it can attach event listener and listen for click
    //HUA COMMENTS: when cick, search if the letterContainer div contains "Eric" class
   var filterBlue = document.querySelector(".blue");
    filterBlue.addEventListener("click", function() {
      if (letterContainer.classList.contains("Blue")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        //HUA COMMENTS: hide the entries that does not contain eric
        letterContainer.style.display = "none";
      }
    });

    var filterWhite = document.querySelector(".white");
    filterWhite.addEventListener("click", function() {
      if (letterContainer.classList.contains("White")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterRed = document.querySelector(".red");
    filterRed.addEventListener("click", function() {
      if (letterContainer.classList.contains("Red")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterGreen = document.querySelector(".green");
    filterGreen.addEventListener("click", function() {
      if (letterContainer.classList.contains("Green")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterBrown = document.querySelector(".brown");
    filterBrown.addEventListener("click", function() {
      if (letterContainer.classList.contains("Brown")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterYellow = document.querySelector(".yellow");
    filterYellow.addEventListener("click", function() {
      if (letterContainer.classList.contains("Yellow")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterBlack = document.querySelector(".black");
    filterBlack.addEventListener("click", function() {
      if (letterContainer.classList.contains("Black")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterGrey = document.querySelector(".grey");
    filterGrey.addEventListener("click", function() {
      if (letterContainer.classList.contains("Grey")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterPink = document.querySelector(".pink");
    filterPink.addEventListener("click", function() {
      if (letterContainer.classList.contains("Pink")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterPurple = document.querySelector(".purple");
    filterPurple.addEventListener("click", function() {
      if (letterContainer.classList.contains("Purple")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterReset = document.querySelector('.js-reset');
        filterReset.addEventListener("click", function(){
            // letterContainer.style.display = "none";
            console.log (letterContainer);
            letterContainer.style.display = "block";
            
        })

    
    
  });  
}



