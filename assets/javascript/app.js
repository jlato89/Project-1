var ingredientsList = [];
var recipeIdArray = [];
var recipeTitleArray = [];
var recipeImageArray = [];
var recipeResultArray = [];
var recipeString;

$("#submit-btn").on("click", function () {
  $("#recipe-section").empty();
  checkIngr();
  displayRecipe();
});


// Add user chosen ingredients to a global array
function checkIngr() {
  
  $('.chosen-ingr-item').each(function () {
    var ingredient = $(this).text().trim();
    ingredientsList.push(ingredient);
  });
}
function displayRecipe() {
  var queryUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&ingredients=" + ingredientsList.join('+');
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

$(document).ready(function () {
  $('#chosen-ingr-list').empty();
  $('.ingr-item').on("click", function () {
    if (!userSelection) {
      var userSelection = $(this).text().trim() + " ";
      var ingrBtn = $("<span>");
      ingrBtn.attr("class", "chosen-ingr-item tag is-medium");
      var ingrDelete = $('<button>');
      ingrDelete.attr("class", "delete is-small");
      ingrBtn.append(userSelection, ingrDelete);
      $('#chosen-ingr-list').append(ingrBtn);
      console.log(userSelection);
    };
  })

});

// Delete Button Fucntion//
$("#chosen-ingr-list").on("click", ".delete", function(event){
	event.preventDefault()
		$(this).parent().remove();
})


function showRecipe() {
  for (var i = 0; i < 10; i++) {
    var thisLink = recipeResultArray[i];

    var recipeResult = $("<div>");
    recipeResult.attr("class", "recipe-result");

    var recipeTitle = $("<div>");
    recipeTitle.html("Title: " + recipeTitleArray[i]);
    recipeTitle.attr("class", "recipe-title")

    var recipeImage = $("<img>");
    recipeImage.attr("src", recipeImageArray[i])
    recipeImage.attr("class", "recipe-img");

    var recipeLink = $("<a>");
    recipeLink.attr("href", thisLink);
    recipeLink.attr("class", "recipe-link");
    recipeLink.text("Recipe Link")
    console.log(thisLink)

    recipeResult.append(recipeTitle, recipeImage, recipeLink);
    $("#recipe-section").append(recipeResult);
  }
};

//textbox user input
$("form").on("submit", function (event) {
  event.preventDefault();
  userValidation();
})


function userValidation() {

  var isIngr = true;
  var newIngredient = $("#ingredient").val().trim();
  var queryUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&ingredients=" + newIngredient;
  $.ajax({
    url: queryUrl,
    headers: {
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '98db7bca28msh8d5ab6517d13d17p17dbecjsn45b21b9d6bda'
    },
    method: "GET"
  }).then(function (response) {
    if (!$.trim(response)) {
      isIngr = false;
    }

    if (isIngr) {
      var ingrBtn = $("<span>");
      ingrBtn.attr("class", "chosen-ingr-item tag is-medium");
      var ingrDelete = $("<button>")
      ingrDelete.attr("class", "delete is-small")
      ingrBtn.append(newIngredient, ingrDelete)
      $("#chosen-ingr-list").append(ingrBtn);
      $("#ingredient").val("");
    }
    else {
      errorModal();
      $("#ingredient").val("");
    }
  })
}


function errorModal() {
  var modal = $("#myModal")[0];
  var span = $(".modal-box")[0];
  modal.style.display = "block";

  // When the user clicks on (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal box, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}


