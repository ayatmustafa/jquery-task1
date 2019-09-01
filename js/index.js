var menuOpen=$("#menuOpen");
var menuelinks=$(".menuelinks")


$("#close").click(function(){
    menuelinks.eq(0).animate({"width":"0px"},500)
     
  //  $("body,html").animate({scrollTop:0} , 1000)
})
function calcDate(x="11/5/2020"){
   /* var y=x.split("/")
    var tdate = new Date();
var dd = tdate.getDate(); //yields day
var h = tdate.getHours();//RETURN HOUSRS NOW
var MM = tdate.getMinutes();; //yields minits
var ss = tdate.getSeconds();; //yields minits
var yyyy = (y[1]-tdate.getFullYear())*24; //yields year*/

var z = setInterval(function() { 
    var y=x.split("/")
    var tdate = new Date();
var dd = tdate.getDate(); //yields day
var h = tdate.getHours();//RETURN HOUSRS NOW
var MM = tdate.getMinutes(); //yields minits
var ss = tdate.getSeconds(); //yields minits
var yyyy = (y[1]-tdate.getFullYear())*24;
$("#day").html((yyyy+dd)+"D");

$("#hour").html((h)+"h");
$("#min").html((MM)+"m" )
$("#sec").html((ss)+"s");
}, 1000); 


}
calcDate()
menuOpen.click(function(){
    menuelinks.eq(0).animate({"width":"250px"},500)
 
})

$(".second-section li").find("p").css({"display": "none"})
$(".second-section li:first-child ").find("p").css({"display": "block"})
$(".second-section li ").click(function(){
    $(this).siblings().find("p").slideUp();

   
    $(this).find("p").slideToggle();
})
$(window).scroll(function(){
    if($(window).scrollTop()>=200){
       $("#menuOpen").css({"color":"black"})
       $(".topsection .overlay .menue h3").css({"padding-top":"0","backgroundColor":"gray","padding":"10px","color":"white"})
       
    }
    else{
        $("#menuOpen").css({"color":"white"})
        $(".topsection .overlay .menue h3").css({"padding-top":"65vh","backgroundColor":"transparent"})
    }
})

$("#menubar li a").click(function(){
 var linkname=$(this).attr("href");
 let profileOffset = $(linkname).offset().top-150;
 $("body,html").animate({scrollTop:profileOffset} , 1000)

})
$("textarea").keyup(function(){
var xyz=$(this).val();
if(xyz.length<=100){
$(".numtext").html(100-(xyz.length))
//alert()
}
else{
    $(".numtext").html("your available character finished")
    
}
})

