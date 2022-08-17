
// const title = document.getElementById("main-heading");

// title.style.color = "red";

// const listItem = document.getElementsByClassName("list-items");
// console.log(listItem);

// const listItem2 = document.getElementsByTagName("li");
// console.log(listItem2);

//Variables para la ventana Login

// let input1 = document.getElementById("nombre");
// input1.addEventListener("input", () => {console.log(input1.value)});


//  let btn = document.querySelector("#new-quote");
//  let quote = document.querySelector(".quote");
//  let person = document.querySelector(".person");

//  const quotes = [{
//         quote: "Be yourself; everyone else is already taken.",
//         person: "Shakira"    
//  },{
//     quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
//     person: "Albert Einstein"
//  },{
//     quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
//     person: "Bernard M. Baruch"
//  },{
//     quote: "A room without books is like a body without a soul.",
//     person: "Marcus Tullius Cicero"
//  }, ];
//  btn.addEventListener("click", function(){
//     let random = Math.floor(Math.random() * quotes.length);
//     quote.innertext = quotes[random].quote;
//     person.innertext = quotes[random].person;
//  });

(function ($) {
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        };
        var options = $.extend(defaults, options);

        options.elem.click(function(event){     
            event.preventDefault();
            var offset = ($(this).attr('data-offset')) ? $(this).attr('data-offset') : false,
                position = ($(this).attr('data-position')) ? $(this).attr('data-position') : false;         
            if (offset) {
                var toMove = parseInt(offset);
                $('html,body').stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, options.speed);
            } else if (position) {
                var toMove = parseInt(position);
                $('html,body').stop(true, false).animate({scrollTop: toMove }, options.speed);
            } else {
                $('html,body').stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, options.speed);
            }
        });

    };
})(jQuery);

$(function(){
    $(".scroller").arctic_scroll({
        speed: 600

    });
});