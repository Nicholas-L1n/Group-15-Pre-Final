var coldHats = [];

var coldShirts = [];

var coldPants = [];

var coldShoes = [];

var hotHats = [];

var hotShirts = [];

var hotPants = [];

var hotShoes = [];




$("#generatorSelector").click(function() {

    console.log("GENERATOR SORT FUNCTION")

    coldHats = [];

    coldShirts = [];

    coldPants = [];

    coldShoes = [];

    hotHats = [];

    hotShirts = [];

    hotPants = [];

    hotShoes = [];

    for (var i=0; i<itemClosetArray.length; i++) {
        sortClothes(itemClosetArray, i);
        
    }

});

$("#generateOutfit").click(function() {
    if (temperature == 'hot') {
        console.log("indexing hot arrays")

        indexClothingArray(hotHats, '#generatorCarousel.hat')

        indexClothingArray(hotShirts, '#generatorCarousel.shirt')

        indexClothingArray(hotPants, '#generatorCarousel.pants')

        indexClothingArray(hotShoes, '#generatorCarousel.shoes')

    } else {
        console.log("indexing cold arrays")

        indexClothingArray(coldHats, '#generatorCarousel.hat')

        indexClothingArray(coldShirts, '#generatorCarousel.shirt')

        indexClothingArray(coldPants, '#generatorCarousel.pants')

        indexClothingArray(coldShoes, '#generatorCarousel.shoes')
    }



});
    

function sortClothes(itemClosetArray, x) {
    if (itemClosetArray.length==0) {
        return
    }

    itemType = itemClosetArray[x].clothingType;
    itemTemperature = itemClosetArray[x].temperature;

    if (itemTemperature == 'hot'){
        if (itemType == 'shirt') {
            hotShirts.push(itemClosetArray[x])
        } else if (itemType == 'hat') {
            hotHats.push(itemClosetArray[x])
        } else if (itemType == 'pants') {
            hotPants.push(itemClosetArray[x])
        } else if (itemType == 'shoes') {
            hotShoes.push(itemClosetArray[x])
        }
    } else {
        if (itemType == 'shirt') {
            coldShirts.push(itemClosetArray[x])
        } else if (itemType == 'hat') {
            coldHats.push(itemClosetArray[x])
        } else if (itemType == 'pants') {
            coldPants.push(itemClosetArray[x])
        } else if (itemType == 'shoes') {
            coldShoes.push(itemClosetArray[x])
        }
    }


}

// random math generator based on items on input max parameter
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


// indexes array and creates an image
function indexClothingArray(clothingArray, classAdd) {
    if (clothingArray.length == 0) {
        console.log("ending generation")
        return
    }

    $(classAdd).empty();

    randomIndex = getRandomInt(clothingArray.length);

    imagePreview = $('<img>', {
        src: clothingArray[randomIndex].uploadedImage
    });

    imagePreview.addClass('generatorPreview');

    $(classAdd).append(imagePreview);


    
};