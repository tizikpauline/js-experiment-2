var app = {

  chars: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'],

  init: function () {
    app.container = document.createElement('div');
    app.container.className = 'animation-container';
    $(".heading").append(app.container)
    window.setInterval(app.add, 100);
  },

  add: function () {
    var element = document.createElement('span');
    app.container.appendChild(element);
    app.animate(element);
  },

  animate: function (element) {
    var character = app.chars[Math.floor(Math.random() * app.chars.length)];
    var duration = Math.floor(Math.random() * 10) + 1;
    var offset = Math.floor(Math.random() * (100 - duration * 2)) + 3;
    var size = 10 + (15 - duration);
    element.style.cssText = 'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s;';
    element.innerHTML = character;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element);
  },

};

document.addEventListener('DOMContentLoaded', app.init);

$(document).ready(function(){

  var $randomnbr = $('.nbr')
  var $timer= 10
  var $it
  var $data = 0
  var index
  var change
  var letters = ["н", "е", "й", "р", "о", "о", "п", "е", "р", "а"]

  $randomnbr.each(function(){

    change = Math.round(Math.random()*100)
    $(this).attr('data-change', change)

  })

  function random(){
    return Math.round(Math.random()*9)
  }

  function select(){
    return Math.round(Math.random()*$randomnbr.length+1)
  }

  function value(){
    $('.nbr:nth-child('+select()+')').html(''+random()+'')
    $('.nbr:nth-child('+select()+')').attr('data-number', $data)
    $data++

    $randomnbr.each(function(){
        if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
          index = $('.ltr').index(this)
          $(this).html(letters[index])
          $(this).removeClass('nbr')
        }
    })
  }

  $it = setInterval(value, $timer)

  $(".event-1").mouseenter (function() {
    $(".name-1").css({
      "color": "black",
      "transition": "0.4s"
    })
    $(".afisha").css({
      "background-image": "url(images/dido_1.png)",
      "background-size": "40%",
      "background-position": "85% 3%",
      "background-repeat": "no-repeat",
      "-webkit-transition": "all" + "1s",
      "-moz-transition": "all" + "1s",
      "-o-transition": "all" + "1s",
      "transition": "all" + "1s"
    })
    $(".text-1 p").css({
      "color": "red",
      "transition": "0.2s"
    })
  })

  $(".event-2").mouseenter (function() {
    $(".name-2").css({
      "color": "black",
      "transition": "0.4s"
    })
    $(".afisha").css({
      "background-image": "url(images/orpheus2.png)",
      "background-size": "40%",
      "background-position": "90% 28%",
      "background-repeat": "no-repeat",
      "-webkit-transition": "all" + "1s",
      "-moz-transition": "all" + "1s",
      "-o-transition": "all" + "1s",
      "transition": "all" + "1s"
    })
    $(".text-2 p").css({
      "color": "red",
      "transition": "0.2s"
    })
  })

  $(".event-3").mouseenter (function() {
    $(".name-3").css({
      "color": "black",
      "transition": "0.2s"
    })
    $(".afisha").css({
      "background-image": "url(images/ariadna.png)",
      "background-size": "40%",
      "background-position": "90% 48%",
      "background-repeat": "no-repeat",
      "-webkit-transition": "all" + "1s",
      "-moz-transition": "all" + "1s",
      "-o-transition": "all" + "1s",
      "transition": "all" + "1s"
    })
    $(".text-3 p").css({
      "color": "red",
      "transition": "0.2s"
    })
  })

  $(".event-4").mouseenter (function() {
    $(".name-4").css({
      "color": "black",
      "transition": "0.2s"
    })
    $(".afisha").css({
      "background-image": "url(images/orpheus2.png)",
      "background-size": "40%",
      "background-position": "95% 70%",
      "background-repeat": "no-repeat",
      "-webkit-transition": "all" + "1s",
      "-moz-transition": "all" + "1s",
      "-o-transition": "all" + "1s",
      "transition": "all" + "1s"
    })
    $(".text-4 p").css({
      "color": "red",
      "transition": "0.2s"
    })
  })

  $(".event-5").mouseenter (function() {
    $(".name-5").css({
      "color": "black",
      "transition": "0.2s"
    })
    $(".afisha").css({
      "background-image": "url(images/orpheus2.png)",
      "background-size": "40%",
      "background-position": "98% 98%",
      "background-repeat": "no-repeat",
      "-webkit-transition": "all" + "1s",
      "-moz-transition": "all" + "1s",
      "-o-transition": "all" + "1s",
      "transition": "all" + "1s"
    })
    $(".text-5 p").css({
      "color": "red",
      "transition": "0.2s"
    })
  })

  $(".event-1").mouseleave (function() {
    $(".name-1").css({
      "color": "transparent",
      "transition": "0.2s"
    })
    $(".afisha").css({
      "background-image": "none",
      "transition": "1s"
    })
    $(".text-1 p").css({
      "color": "white",
      "transition": "0.2s"
    })
  })

  $(".event-2").mouseleave (function() {
    $(".name-2").css({
      "color": "transparent",
      "transition": "0.2s"
    })
    $(".afisha").css({
      "background-image": "none",
      "transition": "1s"
    })
    $(".text-2 p").css({
      "color": "white",
      "transition": "0.2s"
    })
  })

  $(".event-3").mouseleave (function() {
    $(".name-3").css({
      "color": "transparent",
      "transition": "0.2s"
    })
    $(".afisha").css({
      "background-image": "none",
      "transition": "1s"
    })
    $(".text-3 p").css({
      "color": "white",
      "transition": "0.2s"
    })
  })

  $(".event-4").mouseleave (function() {
    $(".name-4").css({
      "color": "transparent",
      "transition": "0.2s"
    })
    $(".afisha").css({
      "background-image": "none",
      "transition": "1s"
    })
    $(".text-4 p").css({
      "color": "white",
      "transition": "0.2s"
    })
  })

  $(".event-5").mouseleave (function() {
    $(".name-5").css({
      "color": "transparent",
      "transition": "0.2s"
    })
    $(".afisha").css({
      "background-image": "none",
      "transition": "1s"
    })
    $(".text-5 p").css({
      "color": "white",
      "transition": "0.2s"
    })
  })
});
