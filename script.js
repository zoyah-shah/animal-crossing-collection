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
   var filterEric = document.querySelector(".eric");
    filterEric.addEventListener("click", function() {
      if (letterContainer.classList.contains("Eric")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        //HUA COMMENTS: hide the entries that does not contain eric
        letterContainer.style.display = "none";
      }
    });

    var filterTeddy = document.querySelector(".teddy");
    filterTeddy.addEventListener("click", function() {
      if (letterContainer.classList.contains("Teddy")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterDom = document.querySelector(".dom");
    filterDom.addEventListener("click", function() {
      if (letterContainer.classList.contains("Dom")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterWillow = document.querySelector(".willow");
    filterWillow.addEventListener("click", function() {
      if (letterContainer.classList.contains("Willow")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterTia = document.querySelector(".tia");
    filterTia.addEventListener("click", function() {
      if (letterContainer.classList.contains("Tia")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterRaymond = document.querySelector(".raymond");
    filterRaymond.addEventListener("click", function() {
      if (letterContainer.classList.contains("Raymond")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterLucky = document.querySelector(".lucky");
    filterLucky.addEventListener("click", function() {
      if (letterContainer.classList.contains("Lucky")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterKabuki = document.querySelector(".kabuki");
    filterKabuki.addEventListener("click", function() {
      if (letterContainer.classList.contains("Kabuki")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterBangle = document.querySelector(".bangle");
    filterBangle.addEventListener("click", function() {
      if (letterContainer.classList.contains("Bangle")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterPapi = document.querySelector(".papi");
    filterPapi.addEventListener("click", function() {
      if (letterContainer.classList.contains("Papi")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterJulia = document.querySelector(".julia");
    filterJulia.addEventListener("click", function() {
      if (letterContainer.classList.contains("Julia")) {
        console.log (letterContainer);
        letterContainer.style.display = "block";
        // letterContainer.style.border = "1px solid red";
      } else {
        letterContainer.style.display = "none";
      }
    });

    var filterBella = document.querySelector(".bella");
    filterBella.addEventListener("click", function() {
      if (letterContainer.classList.contains("Bella")) {
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



