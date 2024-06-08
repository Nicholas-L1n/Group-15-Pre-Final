

// image input field
$('#imageUpload').on('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageSrc = e.target.result;
            $('.preview').attr('src', imageSrc).show();

            // Assign the image data to a JavaScript variable
            const uploadedImage = imageSrc;
            console.log('Image uploaded:', uploadedImage);
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please upload a valid image file.');
    }
});