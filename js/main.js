"use strict";

$(document).ready(function(){

    var $imageBox = $('.box');

    $imageBox.viewportChecker({
        classToAdd: 'is-visible',
        callbackFunction: function(elem, action){

            // setTimeout(function(){
                var image = $(elem).find('img')
                var path = $(image).data('id');
                $(image).attr('src', path);
            // },1000)
            
        },
    })
    var counter = 0;
    document.body.addEventListener('click', function(event){
        console.log(event);
        
           if (event.target.tagName === 'IMG'){
               counter++;
               console.log(counter);
           }
        
    })

});

// Artem Diachenko [1:47 PM] всплытие событий!!!
// document.body.addEventListener(‘click’, function() {
//        console.log(‘body’);
//        event.stopPropagation();
//    }, true);

//    document.querySelector(‘img’).addEventListener(‘click’, function(event) {
//        console.log(‘img’);

//        // event.stopPropagation();
//    }, true)