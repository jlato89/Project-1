var ingredientList=[]
var queryUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&ingredients=" + ingredient + "+";
var queryURL=  "https://the-cocktail-db.p.rapidapi.com/random.php"
var recipeIdArray = [];
var recipeTitleArray=[];
var recipeImageArray = [];
var recipeResultArray=[];
var recipeString;
var recipeTitle = $("<div>")
var recipeImage = $("<img>");
var recipeList = $("<div>");

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
      recipeTitle = response[i].title;
      recipeImage =response[i].image;
  
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
          recipeList = response[i].sourceUrl;
          recipeResultArray.push(recipeList)
   
         
         
        }
        console.log(recipeResultArray)
      })
    }
  })
};
// function displayUserIngredient (){
//     $('').each(function(){
//     var userChoice=$(this).text().trim();
//     ingredientList.push(userChoice)});}

// console.log(ingredientList)

// displayUserIngredient()

    $.ajax({
        url: queryURL,
        headers: {
            "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
            "X-RapidAPI-Key": "147749aee4mshcd867948b97e9f7p16bdacjsn257d0be55a77"
        },
        method:"GET"
    }).then(function(response) {
        for (var i= 0; i< 1; i++){
            drinkDisplay= response[i]
            drinkName= response[i]
            console.log(response)
        }
    })
    


    