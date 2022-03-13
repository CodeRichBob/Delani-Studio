//Toggle image and text in what we do section

$(document).ready(function(){
    $("#design-img").click(function(event){
        $("#design-img").slideDown().hide();
        $("#design").show();
    });
    $("#design").click(function(){
        $("#design").slideUp();
        $("#design-img").slideDown();
    });

    //Toggle image and text in development column of the what we do section
    
    $("#develop-img").click(function(){
        $("#develop-img").slideDown().hide();
        $("#development").show();
    });
    $("#development").click(function(){
        $("#development").slideUp();
        $("#develop-img").slideDown();
    });

    //Toggle image and text in product management column of the what we do section

    $("#product-img").click(function(){
        $("#product-img").slideDown().hide();
        $("#product-mgt").show();
    });
    $("#product-mgt").click(function(){
        $("#product-mgt").slideUp();
        $("#product-img").slideDown();
    });

});