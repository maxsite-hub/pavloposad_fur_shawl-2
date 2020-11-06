"use strict";

// WINDOW WIDTH DETECT
var currentWidth = $(window).width();
$(window).resize(function () {
  currentWidth = $(window).width();
});
$(function () {
  'use strict'; //timer

 

  $("[type=tel]").inputmask({
    mask: '+7 (999) 99-99-999',
    "clearIncomplete": true,
    "showMaskOnHover": false,
    "clearMaskOnLostFocus": false
  }); //popup 2

  $('.popup__close').on('click', function (e) {
    e.preventDefault();
    $('.popup-wrapper').removeClass('is-visible');
  });
  // $('body').on('click', '.catalog-item__btn > a, .tovarimg', function (e) {
  //   e.preventDefault();
  //   $('.popup-wrapper').addClass('is-visible');
	// var id = $(this).attr('id_product') ;
	// 	//var vis = $('.item'+id).offset().top ;
	// 	//var vis = 20;
	// 	var name = $('.item'+id+' .nametovar').text() ;
	// 	//var desc = $('.item'+id+' .desc').text() ;
	// 	var oldprice = $('.item'+id+' .oldprlist strike').text() ;
	// 	var price = $('.item'+id+' .pricenum').text() ;
	// 	var img = $('.item'+id+' .tovarimg').attr('imgattr') ;
		
		
	// 	//alert(oldprice) ;
	// 	$('.popup__title').text(name) ;
	// 	$('.strprise').text(oldprice) ;
	// 	$('.pricetoday').text(price) ;
	// 	$('.popup__img').css('background-image','url("img/catalog/img'+id+'.jpg")') ;
	// 	//$('.popup-wrapper').attr('style','top:'+vis+'px');
	// 	//$('.allfon').attr('style','display:block;');
	// 	$('.popzakbtnbig').attr('id_product',id) ;
	// 	$('.slesh').text('#'+id) ;
	// 	//$('.bezslesh').text(desc) ;
	// 	$('.bistro').val(id) ;
	// 	$('.bistro_price').val(price) ;
	
  // }); //basket

  $('.basket__btn').on('click', function (e) {
    e.preventDefault();

    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $(this).next().slideUp();
    } else {
      $(this).addClass('is-active');
      $(this).next().slideDown();
    }
  });
  $(document).on('click', function (e) {
    var icon = $('.basket__btn'),
        icon2 = $('.basket__body');

    if (!icon.is(e.target) && icon.has(e.target).length === 0 && !icon2.is(e.target) && icon2.has(e.target).length === 0) {
      $('.basket__body').slideUp();
      $('.basket__btn').removeClass('is-active');
    }
  }); //scroll

  function animateScroll() {
    $('.js-scroll').click(function (e) {
      e.preventDefault();
      var id;
      id = $(this).attr('href');
      id = id.replace('#', '');
      $('html, body').animate({
        scrollTop: $('.' + id).offset().top
      }, 1400, 'swing');
    });
  }

  animateScroll();
});