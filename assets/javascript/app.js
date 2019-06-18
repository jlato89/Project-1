
var ingredient = ["eggs+", "chicken+", "rice+"];
var queryUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&ingredients=" + ingredient + "+";
var recipeIdArray = [];
var recipeTitleArray = [];
var recipeImageArray = [];
var recipeResultArray = [];
var recipeString;

$("#submit-btn").on("click", function () {
  displayRecipe()
  $("#recipe-section").empty();
});

var ingredientsList = [];

// Add user chosen ingredients to a global array
function checkIngr() {
   $('.chosen-ingr-item').each(function () {
      var ingredient = $(this).text().trim();
      ingredientsList.push(ingredient);
   });
   console.log(ingredientsList);
}

// Call checkIngr Function when user searches for recipes
$("#submit-btn").on("click", function () {
   checkIngr();
});

function displayRecipe() {


  $.ajax({
    url: queryUrl,
    headers: {
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '98db7bca28msh8d5ab6517d13d17p17dbecjsn45b21b9d6bda'
    },
    method: "GET"
  }).then(function (response) {

    for (var i = 0; i < 10; i++) {
      var recipeTitle = response[i].title;
      var recipeImage = response[i].image;

      recipeImageArray.push(recipeImage);
      recipeTitleArray.push(recipeTitle)
      recipeIdArray.push(response[i].id);

      recipeString = recipeIdArray.join('%2C');

    }

    console.log(recipeImageArray)
    console.log(recipeTitleArray)
    console.log(recipeIdArray)

    ajaxRecipeId();

    function ajaxRecipeId() {

      $.ajax({
        url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=" + recipeString,
        headers: {
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'X-RapidAPI-Key': '98db7bca28msh8d5ab6517d13d17p17dbecjsn45b21b9d6bda'
        },
        method: "GET"
      }).then(function (response) {
        for (var i = 0; i < 10; i++) {
          var recipeList = response[i].sourceUrl;
          recipeResultArray.push(recipeList)
        }
        showRecipe();
      })
    }
  })

};

function showRecipe() {

  for (var i = 0; i < 10; i++) {

    var recipeResult = $("<div>");
    recipeResult.attr("class", "recipe-result");

    var recipeTitle = $("<div>");
    recipeTitle.html("Title: " + recipeTitleArray[i]);
    recipeTitle.attr("class", "recipe-title")

    var recipeImage = $("<img>");
    recipeImage.attr("src", recipeImageArray[i])
    recipeImage.attr("class", "recipe-img");

    var recipeList = $("<div>");
    var thisLink = recipeResultArray[i];
    recipeList.html(recipeResultArray[i])
    recipeList.attr("class", "recipe-link");

    var recipeLink = $("<a>");
    recipeLink.attr("href", thisLink);
    recipeLink.text("Recipe Link")
    console.log(thisLink)

    recipeResult.append(recipeTitle, recipeImage, recipeLink);
    $("#recipe-section").append(recipeResult);
  }
 
}

