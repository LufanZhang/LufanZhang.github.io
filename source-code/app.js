var main = function() {
  $('.dropdown-toggle').hover(function() {
    $('.dropdown-menu').show("slow");
  }
  );
  $('.dropdown-menu').hover(function() {
    $('.dropdown-menu').show("slow");
  }, function() {
    $('.dropdown-menu').hide("slow");
  }
  );
  
  $('.arrow-next').click(function(){
    var currentScreen = $('.active-screen');
    var nextScreen = currentScreen.next();
    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();
    
    if(nextScreen.length == 0){
        nextScreen = $('.screen').first();
        nextDot = $('.dot').first();
    }
    currentScreen.fadeOut(600).removeClass('active-screen');
    nextScreen.fadeIn(600).addClass('active-screen');
    
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });
   $('.arrow-prev').click(function(){
    var currentScreen = $('.active-screen');
    var prevScreen = currentScreen.prev();
    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();
    
    if(prevScreen.length == 0){
        prevScreen = $('.screen').last();
        prevDot = $('.dot').last();
    }
    currentScreen.fadeOut(600).removeClass('active-screen');
    prevScreen.fadeIn(600).addClass('active-screen');
    
    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });
}

$(document).ready(main);