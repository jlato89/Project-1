$.ajax({
    url: queryURL,
    headers: {
        "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
        "X-RapidAPI-Key": "147749aee4mshcd867948b97e9f7p16bdacjsn257d0be55a77"
    },
    method: "GET"
}).then(function (response) {
    for (var i = 0; i < 1; i++) {
        var drinkImg = response.drinks[i].strDrinkThumb
        var drinkName = response.drinks[i].strDrink
        var drinkInstructions= response.drinks[i].strInstructions
        var drinkIngredient1= response.drinks[i].strIngredient1
        var drinkIngredient2= response.drinks[i].strIngredient2
        var drinkIngredient3= response.drinks[i].strIngredient3
        var drinkIngredient4= response.drinks[i].strIngredient4
        var drinkIngredient5= response.drinks[i].strIngredient5
        var drinkIngredient6= response.drinks[i].strIngredient6
        var drinkIngredient7= response.drinks[i].strIngredient7
        var drinkIngredient8= response.drinks[i].strIngredient8
        var drinkIngredient9= response.drinks[i].strIngredient9
        console.log(response)
        console.log(drinkImg)
        console.log(drinkName)
        console.log(drinkInstructions)
        console.log(drinkIngredient1)
        console.log(drinkIngredient2)
        console.log(drinkIngredient3)
        console.log(drinkIngredient4)
        console.log(drinkIngredient5)

        
        }
    }
)
$('#drinkImg').prepend(drinkImg)