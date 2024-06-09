// Functions to change which page is shown


// UPLOAD
function uploadShow(previousPage) {

    // resets questionare
    $(".temperatureSelect").removeClass("selected");
    $(".typeSelect").removeClass("selected");

    // identifies upload as the present section
    $("#uploadConfirmDiv").addClass("present");


    $(previousPage).toggleClass("opacityChange");
    delay(function () {$(previousPage).toggleClass("hidden");}, 151);
    console.log("Previous opacity transition, hiding section")

    delay(function () {$("#uploadConfirmDiv").toggleClass("hidden");}, 200);
    delay(function () {$("#uploadConfirmDiv").toggleClass("opacityChange");}, 250);
    console.log("Upload opacity transition, un-hiding section")
}








// ITEMS
function itemsShow(previousPage) {
    // identifies items as the present section
    $("#items").addClass("present");


    $(previousPage).toggleClass("opacityChange");
    delay(function () {$(previousPage).toggleClass("hidden");}, 151);
    console.log("Previous opacity transition, hiding section")

    delay(function () {$("#items").toggleClass("hidden");}, 200);
    delay(function () {$("#items").toggleClass("opacityChange");}, 250);
    console.log("Items opacity transition, un-hiding section")
}







// GENERATOR
function generatorShow(previousPage)  {

    // resets questionare
    $(".temperatureSelect").removeClass("selected");
    $(".typeSelect").removeClass("selected");

    // identifies generator as the present section
    $("#generator").addClass("present");


    $(previousPage).toggleClass("opacityChange");
    delay(function () {$(previousPage).toggleClass("hidden");}, 151);
    console.log("Previous opacity transition, hiding section")

    delay(function () {$("#generator").toggleClass("hidden");}, 200);
    delay(function () {$("#generator").toggleClass("opacityChange");}, 250);
    console.log("Generator opacity transition, un-hiding section")
}






