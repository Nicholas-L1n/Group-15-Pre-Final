var hats = [];

var shirts = [];

var pants = [];

var shoes = [];



$("#generatorSelector").click(function() {

    console.log("GENERATOR SORT FUNCTION")

    hats = [];

    shirts = [];

    pants = [];

    shoes = [];

    for (var i=0; i<itemClosetArray.length; i++) {
        sortClothes(itemClosetArray, i);
    }

    console.log(hats.length, shirts.length, pants.length, shoes.length)
});



function sortClothes(itemClosetArray, x) {
    if (itemClosetArray.length==0) {
        return
    }

    itemType = itemClosetArray[x].clothingType

    if (itemType == 'shirt') {
        shirts.push(itemClosetArray[x])
    } else if (itemType == 'hat') {
        hats.push(itemClosetArray[x])
    } else if (itemType == 'pants') {
        pants.push(itemClosetArray[x])
    } else if (itemType == 'shoes') {
        shoes.push(itemClosetArray[x])
    }

}