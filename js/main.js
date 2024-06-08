
// delay function
function delay(fnName, ms) {
    console.log("delaying")
    setTimeout(fnName, ms);
}






// JQUERY Event Listeners


// page selector
$(".menu").click(function(){
    $(".menu").removeClass("selected");
    $(this).toggleClass("selected");

});




// query selectors

// clothing type
$(".typeSelect").click(function(){
    $(".typeSelect").removeClass("selected");
    $(this).toggleClass("selected");

});

// temperature type
$(".temperatureSelect").click(function(){
    $(".temperatureSelect").removeClass("selected");
    $(this).toggleClass("selected");

});

