var random_result = 0;
var wins = 0;       
var losses = 0;
var sumOfCrystal = 0;
var startGame = function() {
    $(".crystal").empty(); 
}
random_result = Math.floor((Math.random() * 69) + 30);
$(".total-score").append("Total result: " + random_result);

console.log(random_result);

$(".crystal img").each(function(){
    var random = Math.floor(Math.random() * 11) + 1;
    $(this).attr("data-value", random);
});


$(".crystalstone").click(function () {
    var num = parseInt($(this).attr("data-value"));
    // console.log(num);
    sumOfCrystal += num;
    console.log(sumOfCrystal);
    $("#score").text(sumOfCrystal);

    if (sumOfCrystal > random_result) {
        console.log("you lose");
        losses++;
        $("#losses").text(losses);
        console.log(losses);
    }
    else if (sumOfCrystal === random_result) {
        console.log("you win");
        wins++;
        $("#wins").text(wins);
        resetAndStart();
 
    }
    
});
 
//  function resetAndStart() {
     
 
//  resetAndStart(); 
