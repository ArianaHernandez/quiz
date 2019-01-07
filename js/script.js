/* global $ */
/*Superman answers are worth 2pts, batman answers are 5pts, ww answers are 10 pts*/

$(document).ready(function() {
    var totalScore= 0;
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
        
       
        result(name,totalScore);
    });
    
    function q1(ans1){
    if (ans1==="tawog" || ans1==="the amazing world of gumball"){
        totalScore=totalScore+5;
    }else if(ans1==="we bare bears"){
   totalScore= totalScore+2;
    }
    else if(ans1==="elena of avalor"){
        totalScore= totalScore+10;
    }else{
        totalScore=totalScore;
    }
}
 function q2(ans2){
    if (ans2==="a friend"){
        totalScore= totalScore+2;
    }else if(ans2==="a knife"){
    totalScore=totalScore+5;
    }
    else if(ans2==="a rope"){
        totalScore= totalScore+10;
    }else{
        totalScore=totalScore;
    }
 }
 function q3(ans3){
    if (ans3==="dog"){
        totalScore= totalScore+2;
    }else if(ans3==="bat"){
    totalScore=totalScore+5;
    }
    else if(ans3==="cheetah"){
        totalScore= totalScore+10;
    }else{
        totalScore=totalScore;
    }
 }
  function q4(ans4){
    if (ans4==="commitment"){
        totalScore= totalScore+10;
    }else if(ans4==="geology"){
    totalScore=totalScore+2;
    }
    else if(ans4==="clowns"){
        totalScore= totalScore+5;
    }else{
        totalScore=totalScore;
    }
 }
   function q5(ans5){
    if (ans5==="farming"){
        totalScore= totalScore+2;
    }else if(ans5==="video games"){
    totalScore= totalScore+5;
    }
    else if(ans5==="secret dating"){
        totalScore= totalScore+10;
    }else{
        totalScore= totalScore;
    }
   }
   function result(name,num){
       if(num<10){
     $("button").hide();
       $(".result").css("color","gold");
        $(".result").css("background-color","blue");
         $("body").css("background-image","url('https://66.media.tumblr.com/80876c77fd6699758a855b27901163e3/tumblr_osuva5as6N1thn7k6o1_400.gif')");
       $("body").css("background-size","cover");
       $("body").css("background-repeat","no-repeat");
     $(".placement").text("You aren't any of the original heroes, "+name);
      $(".hero").text("You're Booster Gold, because you can't follow directions");
       }
     else if(num<25){
       $(".result").css("color","blue");
           $("body").css("background-image","url('https://media.giphy.com/media/12PKZzezmy2vqE/giphy.gif')");
       $("body").css("background-size","cover");
       $("body").css("background-repeat","no-repeat");
        $("button").hide();
       $(".placement").text("Congratulations, "+name+". You are");
       $(".hero").text("Superman");
       $(".placement2").text("You are friendly, loyal and strong");
         }
    else if(num<50){
         $("button").hide();
           $("body").css("background-image","url('https://media.giphy.com/media/10yeoHw5v2dk2s/giphy.gif')");
       $("body").css("background-size","cover");
       $("body").css("background-repeat","no-repeat");
          $(".result").css("color","grey");
       $(".placement").text("Congratulations, "+name+". You are");
       $(".hero").text("Batman");
       $(".placement2").text("You are tactical, smart, and have a dark sense of humor");
    } else{
         $("button").hide();
          $("body").css("background-image","url('https://thumbs.gfycat.com/SkeletalGiddyJaguar-size_restricted.gif')");
       $("body").css("background-size","cover");
       $("body").css("background-repeat","no-repeat");
          $(".result").css("color","red");
        $(".placement").text("Congratulations, "+name+". You are");
       $(".hero").text("Wonder Woman");
       $(".placement2").text("You are a born leader, independent, and agile");
    }
   }
});