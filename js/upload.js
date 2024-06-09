
// setTimeout(functionName, num);


// UPLOAD SECTION


// image input field STEP 1
$('#imageUpload').on('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageSrc = e.target.result;
            $('#preview').attr('src', imageSrc).show();
            // Assign the image data to a JavaScript variable
            const uploadedImage = imageSrc;
            console.log('Image uploaded Successfully');
        };
        reader.readAsDataURL(file);

        // sends you to questionare
        questionare();
    } else {
        alert('Please upload a valid image file.');
    }
});

$(".button").click(saveItem);

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
    $("#confirm").toggleClass("opacityChange");
    delay(function () {$("#confirm").toggleClass("hidden");}, 151);
    console.log("Confirm opacity transition, hiding section")

    delay(function () {$("#upload").toggleClass("hidden");}, 200);
    delay(function () {$("#upload").toggleClass("opacityChange");}, 250);
    console.log("Upload opacity transition, un-hiding section")
}
// function  confirmToArray (-)
