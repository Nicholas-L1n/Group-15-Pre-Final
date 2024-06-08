
// setTimeout(functionName, num);

// JQUERY Event Listener
$(".selector").click(function(){
    $(".selector").removeClass("selected");
    $(this).toggleClass("selected");

});

function delay(fnName, ms) {
    console.log("delaying")
    setTimeout(fnName, ms);
}
