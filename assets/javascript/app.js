
var ingredient = ["eggs+", "chicken+", "rice+"];
var queryUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&ingredients=" + ingredient + "+";
var recipeIdArray = [];
var recipeTitleArray=[];
var recipeImageArray = [];
var recipeResultArray=[];
var recipeString;

$("#submit-btn").on("click", function () {
  displayRecipe()
  $("#recipe-section").empty();
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
      var recipeImage =response[i].image;
  
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
      console.log(recipeResultArray)
      showRecipe();
      })
    }
  })

};

function showRecipe(){

  for (var i =0; i <10; i ++){

  var recipeTitle = $("<div>");
  recipeTitle.text("Title: " + recipeTitleArray[i]);

  var recipeImage = $("<img>");
  recipeImage.attr("src", recipeImageArray[i])

  var recipeList = $("<div>");
  recipeList.text("Recipe: "+ recipeResultArray[i])
  $("#recipe-section").append(recipeTitle, recipeImage, recipeList);
  }

}

