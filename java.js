function trafficLight(x){
    switch(x)
    {
        case "Red":
            console.log("Stop")
            break;
        case "Orange":
            console.log("tiyar")
            break;
        case "Green":
        console.log("Go")
        break ;
        default :
        console.log("Invalid Input")
    }
}
trafficLight("Green")

function fruitName(x){
    switch(x)
    {
        case "Apple":
        console.log("1kg: 200/Rs")
        break;

        case "Peace":
        console.log("1kg: 100/Rs")
        break;

        case "Mango":
        console.log("1kg: 250/Rs")
        break;

        case "Banana":
        console.log("1kg: 80/Rs")
        break;
        default :
        console.log("invalid friut name")
    }
}
fruitName("Apple")






//problem ----- 3
function vhicleName(code){
    switch(code)
    {
        case "c":
        console.log("C for:: Car")
        break;

        case "M":
        console.log("M for:: MotorCycle")
        break;

        case "T":
        console.log("T for:: Truck")
        break;

        case "J":
        console.log("J for:: Jeep")
        break;
        default :
        console.log("invalid Code Name")
    }
}
vhicleName("J")