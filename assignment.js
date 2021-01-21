






// ***kilometerToMeter part***

function kilometerToMeter(kilometer){
    var meter = 1000 * kilometer;

    return meter;
}
var result = kilometerToMeter(7);
console.log(result);





// ***budgetCalculator part***

function budgetCalculator(watch, phone, laptoff){
    var total = watch * 50 + phone * 100 + laptoff * 500;
    return total;
 }
 
 var result = budgetCalculator(5,3,1);
 console.log(result);
 



// ***hotelCost part***

function hotelCost(day){
    var totalCost = 0

    if(day <= 10){
        totalCost = day * 100;
    }
    else if(day <= 20){
        var firstPeriod = 10 * 100;
        var remaining = day - 10;
        var secondPeriod = remaining * 80;
        var totalCost = firstPeriod + secondPeriod;
    }
    else{
        var firstPeriod = 10 * 100;
        var secondPeriod = 10 * 80
        var remaining = day - 20;
        var thirdPeriod = remaining * 50;
        var totalCost = firstPeriod + secondPeriod + thirdPeriod
    };

    return totalCost;
}

var result = hotelCost(24);
console.log(result)





// ***megaFriend part***

function megaFriend(friends){
    var longestName = "";

    for(var i = 0; i <friends.length; i++){

        if( longestName.length < friends[i].length){
            longestName = friends[i];
        }
    }
    return longestName;
}

var bondhu = ['boni', 'hafijul', 'hossain', 'asaduzzaman', 'mahim', 'zahir', 'nurjahanbegom'];
var result = megaFriend(bondhu);
console.log(result)






