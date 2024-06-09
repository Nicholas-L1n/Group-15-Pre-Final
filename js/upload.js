
// setTimeout(functionName, num);


// UPLOAD SECTION


// image input field STEP 1
$('#imageUpload').on('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            var imageSrc = e.target.result;
            $('#preview').attr('src', imageSrc);
            // Assign the image data to a JavaScript variable
            uploadedImage = imageSrc;
            console.log('Image uploaded Successfully');
        };
        reader.readAsDataURL(file);

        // sends you to questionare
        questionare();
    } else {
        alert('Please upload a valid image file.');
    }
});






// questionare objects, arrays, and variables
var itemClosetArray= [];

var itemObject = {};

var temperature="";

var clothingType="";

var uploadedImage="";



// saves item to items
$("#save").click(saveItem);







// Questionare selectors (bottom ui)

// clothing type
$(".typeSelect").click(function(){
    $(".typeSelect").removeClass("selected");
    $(this).toggleClass("selected");

    var element = document.querySelector('.selected.typeSelect');

    if (element.id === 'hat') {
        clothingType="hat";
    } else if (element.id === 'shirt') {
        clothingType="shirt";
    } else if (element.id === 'pants') {
        clothingType="pants";
    } else if (element.id === 'shoes') {
        clothingType="shoes";
    }


});

// temperature type
$(".temperatureSelect").click(function(){
    $(".temperatureSelect").removeClass("selected");
    $(this).toggleClass("selected");

    var element = document.querySelector('.selected.temperatureSelect');

    if (element.id === 'hot'){
        temperature="hot";
    } else {
        temperature="cold";
    }

});

















// save to items STEP 2 
function questionare() {
    $("#upload").toggleClass("opacityChange");
    delay(function () {$("#upload").toggleClass("hidden");}, 151);
    console.log("Upload opacity transition, hiding section")

    delay(function () {$("#confirm").toggleClass("hidden");}, 200);
    delay(function () {$("#confirm").toggleClass("opacityChange");}, 250);
    console.log("Confirm opacity transition, un-hiding section")

}



// closet array STEP 3

function saveItem() {

    // saves slected attributes to the object item, then adds the object to the item closet array
    itemObject = {}
    itemObject.temperature = temperature;
    itemObject.clothingType= clothingType;
    itemObject.uploadedImage = uploadedImage;

    console.log(itemObject);

    itemClosetArray.push(itemObject);

    console.log(itemClosetArray.length);

    addImageItemsPage(uploadedImage);

    // reshows browse section
    $("#confirm").toggleClass("opacityChange");
    delay(function () {$("#confirm").toggleClass("hidden");}, 151);
    console.log("Confirm opacity transition, hiding section")

    delay(function () {$("#upload").toggleClass("hidden");}, 200);
    delay(function () {$("#upload").toggleClass("opacityChange");}, 250);
    console.log("Upload opacity transition, un-hiding section")


    // resets questionare
    $(".temperatureSelect").removeClass("selected");
    $(".typeSelect").removeClass("selected");






}



// adds item thumbnail to the items section
function addImageItemsPage (imgLink) {
    $(".itemsDescription").addClass("hidden");
    $(".itemsCTA").addClass("hidden");

    $("#itemThumnailContainer").removeClass("hidden");
    $("#generatorContainer").removeClass("hidden");


    var img = $('<img>', {
        src: imgLink
    });

    img.addClass('thumbnail');

    $('#itemThumnailContainer').append(img);

}
