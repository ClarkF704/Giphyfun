

var topics = ["Batman","Joker","Dogs","Cats","Dragon Ball Z", "Dragon Ball Super", "Bleach","Superman","The Flash","The Green Arrow"];




function getData() {

    var input = $(this).attr("data-name");

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=PLj8jeRiNydRJ7WcauFcAcatQE52qpAT&limit=10");

    xhr.done(function (response) {
        console.log("success got data", response);
        var spawnFix = $("<div>")
        var jiffs = response.data
        for (i = 0; i < jiffs.length; i++) {
            spawnFix.append("<img src='" + jiffs[i].images.original.url + "'>")
            
        }
        $("#inner").html(spawnFix)
        
   
    });

    

    

}

// click stop / pause functiom

$(".get").on("click", function(){
    var state = $(this).attr("data-state");
});



//////////////////////---------------------------------------

function renderButtons() {

    
    $("#buttons-view").empty();

    
    for (var i = 0; i < topics.length; i++) {

      
      var a = $("<button>");


    
      a.addClass("movie-btn");
    
      a.attr("data-name", topics[i]);
     
      a.text(topics[i]);
      
      $("#buttons-view").append(a);
    }
  }

  
  $("#searchgifs").on("click", function(event) {
    event.preventDefault();
   
    var movie = $("#searchtext").val().trim();

    
    topics.push(movie);

    
    renderButtons();
  });

  
  $(document).on("click", ".movie-btn", getData);

  
  renderButtons();


  $( document ).ready(function() {
    renderButtons();
});




