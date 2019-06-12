
  var ingredient = ["eggs+", "apples+", "rice"];
  var queryUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&ingredients=" + ingredient;
  

  var popularIngredients = ["chicken", "steak", "pork", "salt", "cumin", "tomatoes", "eggs", "milk", "rice", "cheese", "chicken broth", "tomato paste", "rolled oats", "nuts", "worcestershire sauce", "flour", "garlic", "onions", "oregano", "cinnamon", "cayenne", "black pepper", "kosher salt", "yogurt", "oil", "vingear", "potatoes", "syrup", "beans", "lemons", "tuna", "butter", "bell peppers", "sugar"]
  // var popularMeats = [""];

  // var popularVegetables = [""];

  // var popularFruits = [""];

  // var popularDairy = [""];

  // var popularSpices = [""];

function displayIngredient(){
  $("#ingredientsection").empty();

  for (var i =0; i<popularIngredients.length; i++){
    var newButton = $("<button>").text(popularIngredients[i]);
      //gives the button a class of new button
          newButton.addClass("ingredients");
          //gives the data attribute of data-name
          newButton.attr("data-name", popularIngredients[i]);
          //puts button in button section
          $("#ingredientsection").append(newButton);
    }
  }


  $("#add-ingredient-button").on("click", function(event){

    event.preventDefault();
    var newIngredient = $("#ingredient-input").val().trim();
    popularIngredients.push(newIngredient)
    
    displayIngredient()
    $("#ingredient-input").val("");

  })

displayIngredient();

 $("#submit-button").on("click", function(){

  displayRecipe()

});


function displayRecipe(){
console.log("it worked")
// var movie = $(this).attr("data-name");

$.ajax({
  url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples%2Cflour%2Csugar",
  headers: { 
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '98db7bca28msh8d5ab6517d13d17p17dbecjsn45b21b9d6bda'},
  method: "GET"
}).then(function(response) {
  console.log(response);





for (var i =0; i<10;i++){
  var recipeDiv = $("<div>");
   

  var recipeImage = $("<img>")
  var recipeTitle = $("<div>")

  recipeImage.attr("src", response[i].image);
  
  recipeTitle.text("Title: "+ response[i].title)

  recipeDiv.append(recipeImage, recipeTitle)
  $("#recipesection").append(recipeDiv);


console.log(recipeImage)
console.log(recipeTitle)


  
}
})

};
