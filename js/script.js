/* global $ */
/*Superman answers are worth 2pts, batman answers are 5pts, ww answers are 10 pts*/

$(document).ready(function() {
    var totalScore;
    $("button").click(function() {
        var name = $("#name").val();
        var superPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var q5Result = $("#question5").val();
        
        q1(q1Result);
        q2(q2Result);
        q3(q3Result);
        q4(q4Result);
        q5(q5Result);
        
        if(totalScore<=20){
            superPlacement="Superman"
        }
    });
    
    function q1(ans1){
    if (ans1==="TAWOG" || ans1==="the amazing world of gumball"){
        return totalScore+5;
    }else if(ans1==="we bare bears"){
    return totalScore+2;
    }
    else if(ans1==="elena of avalor"){
        return totalScore+10;
    }else{
        return totalScore;
    }
}
 function q2(ans2){
    if (ans2==="a friend"){
        return totalScore+2;
    }else if(ans2==="a knife"){
    return totalScore+5;
    }
    else if(ans2==="a rope"){
        return totalScore+10;
    }else{
        return totalScore;
    }
 }
 function q3(ans3){
    if (ans3==="dog"){
        return totalScore+2;
    }else if(ans3==="a bat"){
    return totalScore+5;
    }
    else if(ans3==="cheetah"){
        return totalScore+10;
    }else{
        return totalScore;
    }
 }
  function q4(ans4){
    if (ans4==="commitment"){
        return totalScore+10;
    }else if(ans4==="geology"){
    return totalScore+2;
    }
    else if(ans4==="clowns"){
        return totalScore+5;
    }else{
        return totalScore;
    }
 }
   function q5(ans5){
    if (ans5==="farming"){
        return totalScore+2;
    }else if(ans5==="video games"){
    return totalScore+5;
    }
    else if(ans5==="secret dating "){
        return totalScore+10;
    }else{
        return totalScore;
    }
 }
});