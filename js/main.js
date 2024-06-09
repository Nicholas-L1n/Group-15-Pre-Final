
// delay function
function delay(fnName, ms) {
    console.log("delaying")
    setTimeout(fnName, ms);
}








// PAGE SELECTOR

// function to check which section is selected and show that section

function checkID(element, previousElement, previousPage) {

    if (previousElement == element) {
        console.log("do nothing")
        return;
    }

    // check element is pointing to what is selected
    console.log(element)

    $(".section").removeClass("present");

    if (element.id === 'upload'){
        console.log("run upload");
        uploadShow(previousPage);

    } else if (element.id === 'items') {
        console.log("run items");
        itemsShow(previousPage);

    } else if (element.id === 'generator') {
        console.log("run generator")
        generatorShow(previousPage);

    } else if (element.id === 'closet') {
        console.log("run closet")
        closetShow(previousPage);

    }
}

$(".menu").click(function(){
    var previousElement = document.querySelector('.selected.menu');
    var previousPage = document.querySelector('.present.section');

    console.log(previousPage)

    $(".menu").removeClass("selected");
    $(this).toggleClass("selected");

    // element I want to check (what has the selected class)
    var element = document.querySelector('.selected.menu');


    checkID(element, previousElement, previousPage);
});













