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
      "background-position": "80% 5%",
      "background-repeat": "no-repeat",
      "-webkit-transition": "all" + "1s",
      "-moz-transition": "all" + "1s",
      "-o-transition": "all" + "1s",
      "transition": "all" + "1s"
    })
    $(".text-1 p").css({
      "color": "red"
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
      "color": "red"
    })
  })

  $(".event-3").mouseenter (function() {
    $(".name-3").css({
      "color": "black",
      "transition": "0.2s",
    })
    $(".afisha").css({
      "background-image": "url(images/.orpheus2.png)",
      "background-size": "40%",
      "background-position": "90% 48%",
      "background-repeat": "no-repeat",
      "-webkit-transition": "all" + "1s",
      "-moz-transition": "all" + "1s",
      "-o-transition": "all" + "1s",
      "transition": "all" + "1s"
    })
    $(".text-3 p").css({
      "color": "red"
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
      "color": "red"
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
      "color": "red"
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
      "color": "white"
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
      "color": "white"
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
      "color": "white"
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
      "color": "white"
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
      "color": "white"
    })
  })
});
