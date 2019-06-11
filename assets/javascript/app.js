console.log("HI")

$.ajax({
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com&apikey=4dfa7d01a2msh5e0284ccab04185p1fe451jsn99c32d12fa03",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
 // 4dfa7d01a2msh5e0284ccab04185p1fe451jsn99c32d12fa03

  //"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com&apikey=4dfa7d01a2msh5e0284ccab04185p1fe451jsn99c32d12fa03"





// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/4632/summary")
// .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "4dfa7d01a2msh5e0284ccab04185p1fe451jsn99c32d12fa03")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });