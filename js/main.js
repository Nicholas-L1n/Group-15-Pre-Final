
// delay function
function delay(fnName, ms) {
    console.log("delaying")
    setTimeout(fnName, ms);
}








// PAGE SELECTOR

// function to check which section is selected and show that section
function checkID(element) {

    // check element is pointing to what is selected
    console.log(element)


    if (element.id === 'upload'){
        console.log("run upload")

    } else if (element.id === 'items') {
        console.log("run items")

    } else if (element.id === 'generator') {
        console.log("run generator")

    } else if (element.id === 'closet') {
        console.log("run closet")
        
    }
}

$(".menu").click(function(){
    $(".menu").removeClass("selected");
    $(this).toggleClass("selected");
    // console.log(this)

    // element I want to check (what has the selected class)
    var element = document.querySelector('.selected.menu');

    checkID(element);
});












// Questionare selectors (bottom ui)

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

