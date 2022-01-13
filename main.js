const buyChocolate = () => {
    const buy = {
        type: "Milk chocolate"
    }
    return buy
};

const Chocolate = buyChocolate()


const addFlavoring = (chocolateObject) => {
    chocolateObject.flavoring = "Mint"
    return chocolateObject
}

const flavoring = addFlavoring(Chocolate)



const makeBarkMixture = (chocolateObject) => {
    if (chocolateObject.flavoring === "Mint") {
        chocolateObject.mixed = true
    } else {
        chocolateObject.mixed = false
    }
    return chocolateObject
}

const mixed = makeBarkMixture(Chocolate)

const bakeCandy = (chocolateObject) => {
    if (chocolateObject.mixed === true) {
        chocolateObject.baked = true
    } else {
        chocolateObject.baked = false
    }
    return chocolateObject
}

const bakedCandy = bakeCandy(Chocolate)

const breakBark = (chocolateObject) => {
    if (chocolateObject.baked === true) {
        const newArray = [ "Mint Chocolate Bark Piece",  "Mint Chocolate Bark Piece",  "Mint Chocolate Bark Piece",  
        "Mint Chocolate Bark Piece",  "Mint Chocolate Bark Piece",  "Mint Chocolate Bark Piece"]
        return newArray
    }
}

const candy = breakBark(Chocolate)

console.log(candy)