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
$(document).ready(function () {
	$("#portfolio").mouseover(function () {
		$("#work").show();
	}).mouseout(function () {
		$("#work").hide();
	});
});
$(document).ready(function(){
    $("#portfolio1").mouseover(function(){
        $("#work1").show();
    }).mouseout(function(){
        $("#work1").hide();
    })
});

$(document).ready(function(){
    $("#portfolio2").mouseover(function(){
        $("#work2").show();
    }).mouseout(function(){
        $("#work2").hide();
    })
});

$(document).ready(function(){
    $("#portfolio3").mouseover(function(){
        $("#work3").show();
    }).mouseout(function(){
        $("#work3").hide();
    })
});

$(document).ready(function(){
    $("#portfolio4").mouseover(function(){
        $("#work4").show();
    }).mouseout(function(){
        $("#work4").hide();
    })
});

$(document).ready(function(){
    $("#portfolio5").mouseover(function(){
        $("#work5").show();
    }).mouseout(function(){
        $("#work5").hide();
    })
});

$(document).ready(function(){
    $("#portfolio6").mouseover(function(){
        $("#work6").show();
    }).mouseout(function(){
        $("#work6").hide();
    })
});

$(document).ready(function(){
    $("#portfolio7").mouseover(function(){
        $("#work7").show();
    }).mouseout(function(){
        $("#work7").hide();
    })
});

$(document).ready(function(){
    var namey = $('input#name').val();
    $("form").submit(function(){
        alert(namey + "  We have received your message. Thank you for reaching out to us.");

    });
    
});

  