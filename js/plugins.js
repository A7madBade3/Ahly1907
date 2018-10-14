$(document).ready(function(){
    
    $('.carousel').carousel({
        
        interval:5000
        
    });
    
    // Show Color Option Div When Click On The Gear
    
    $(".fa-cog").click(function(){
        
        $(".theme-color ul").fadeToggle();
        
    });
    
    // Change Theme Color On Click
    
    var colorLi = $(".theme-color ul li");
    
    colorLi
        .eq(0).css("backgroundColor","#de3f3f").end()
        .eq(1).css("backgroundColor","purple").end()
        .eq(2).css("backgroundColor","#4ee06e").end()
        .eq(3).css("backgroundColor","#deca3f");
    
    colorLi.click(function() {
        
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
        
    });
    
    // Caching The Scroll Top Element
    
    var scrollButton = $("#scroll-top");
    
    $(window).scroll(function()
    {
        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
    });
    
    // Click On Button To Scroll Top
        
    scrollButton.click(function() {
        
        $("html,body").animate({scrollTop : 0 }, 600);

    });
    
});

// Remove Overflow

$("body").css("overflow","auto");

// Loading Screen 

$(window).on('load',function() {
   
    $(".loading").fadeOut(3000);
    
});


