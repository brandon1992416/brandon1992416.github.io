$(document).ready(function () {
  $('.popup-phone').magnificPopup({
    
  });
  $(document).on('click', '.popup-modal-dismissphone', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});

$(document).ready(function () {
	$('.popup-link').magnificPopup({
		
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

$(document).ready(function () {
	$('.popup-btn').magnificPopup({
		
	});
	$(document).on('click', '.popup-modal-dismiss1', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

//Анимация

$(window).scroll(function() {
    $('.movdown').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+10) {
        $(this).addClass('fadeInDown');
      }
    });
  });

$(window).scroll(function() {
    $('.movleft').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+200) {
        $(this).addClass('fadeInLeft');
      }
    });
  });

$(window).scroll(function() {
    $('.movright').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+200) {
        $(this).addClass('fadeInRight');
      }
    });
  });

$(window).scroll(function() {
    $('.movright1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+300) {
        $(this).addClass('fadeInRight');
      }
    });
  });

$(window).scroll(function() {
    $('.movleft1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+1000) {
        $(this).addClass('fadeInLeft');
      }
    });
  });

$(window).scroll(function() {
    $('.movright2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+1000) {
        $(this).addClass('fadeInRight');
      }
    });
  });

$(window).scroll(function() {
    $('.movtop').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).addClass('fadeInRight');
      }
    });
  });

$(window).scroll(function() {
    $('.movhead').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+200) {
        $(this).addClass('fadeInRight');
      }
    });
  });


//картинки в модалке

var $big_img = $('img#big_img');
$('a.small_img').on('click', function(e){
    e.preventDefault();
    $big_img.attr('src', $(this.children[0]).attr('src'));
});


//модальные картинки

// var imgArr = document.getElementsByClassName('img-mod');
// var modalWindow = document.getElementById('my__modal');
// var modalImg = document.getElementById('img01');
// var caption = document.getElementById('caption');
// var span = document.getElementById('close_mod');
// var modalBlock = document.getElementById('modal__block');



// for (var i = 0; i < imgArr.length; i++) {
//     var picture = imgArr[i];
//     picture.onclick = function () {
//         openImg(this.children);
//         console.dir(this.children);
//     }
// }
// function openImg(pic) {
//     modalWindow.style.display = 'block';
//     modalBlock.style.transform = 'translateY(0%)';
//     modalImg.src = pic[0].currentSrc;
//     modalImg.alt = pic[0].alt;
//     caption.innerHTML = modalImg.alt;
// }

// function close() {
//     modalWindow.style.display = 'none';
// }
// span.onclick = function () {
//     modalBlock.style.transform = 'translateY(-500%)';
//     setTimeout(close, 500);
// }


$(document).ready(function() {

  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

});

//форма 

// Отправка заявки 
$(document).ready(function() {
	$('.form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		$.ajax({
			type: "POST",
			url: "php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('.form').trigger('reset');
		});
		return false;
	});
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thank-you').fadeOut();
    }
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+7(999) 999-9999");
});

// Отправка заявки phone 
$(document).ready(function() {
  $('.formphone').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    $.ajax({
      type: "POST",
      url: "php/mailphone.php",
      data: $(this).serialize()
    }).done(function() {
      $('.js-overlay-thank-you').fadeIn();
      $(this).find('input').val('');
      $('.formphone').trigger('reset');
    });
    return false;
  });
});

// Отправка заявки phone servicesteam
$(document).ready(function() {
  $('.formservicesteam').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    $.ajax({
      type: "POST",
      url: "php/mailservicesteam.php",
      data: $(this).serialize()
    }).done(function() {
      $('.js-overlay-thank-you').fadeIn();
      $(this).find('input').val('');
      $('.formservicesteam').trigger('reset');
    });
    return false;
  });
});

//Аккордеон 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle ("active");

    this.nextElementSibling.classList.toggle("show");
  }
}