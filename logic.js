

var topics = ["Batman","Joker","Dogs","Cats","Dragon Ball Z", "Dragon Ball Super", "Bleach","Superman","The Flash","The Green Arrow"];




function getData() {

    var input = $(this).attr("data-name");

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=PLj8jeRiNydRJ7WcauFcAcatQE52qpAT&limit=10" );

    xhr.done(function (response) {
        console.log("success got data", response);
        var spawnFix = $("<div>")
        var jiffs = response.data
        for (i = 0; i < jiffs.length; i++) {
            spawnFix.append("<img src='" + jiffs[i].images.original_still.url + "' data-still='" + jiffs[i].images.original_still.url + "' data-animate='" + jiffs[i].images.original.url + "' data-state= 'still' class= 'gif'>" )
            // spawnFix.append("<img src=' still-gif ' class='gif' data-state='still' data-still='still-gif' data-animate='animate-gif'>")
            
        }
        $("#inner").html(spawnFix)
        
   
    });

    

    

}

// click stop / pause functiom

$(document).on("click", ".gif", function(){
 // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
 var state = $(this).attr("data-state");
 // If the clicked image's state is still, update its src attribute to what its data-animate value is.
 // Then, set the image's data-state to animate
 // Else set src to the data-still value
 if (state === "still") {
   $(this).attr("src", $(this).attr("data-animate"));
   $(this).attr("data-state", "animate");
 } else {
   $(this).attr("src", $(this).attr("data-still"));
   $(this).attr("data-state", "still");
 }

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




