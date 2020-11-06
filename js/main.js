$(document).ready(function(){
   $('.main-btn a,.best-btn a,.comments-btn a').click( function(){ // ловим клик по ссылке с классом go_to
	
       
	    $('html, body').animate({ scrollTop: $('.tovar-section').offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        
	    return false; // выключаем стандартное действие
    });
    $('.btnscrollcat').click( function(){ // ловим клик по ссылке с классом go_to
	
       
	    $('html, body').animate({ scrollTop: $('.catalog').offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        
	    return false; // выключаем стандартное действие
    });
	$('.ollia2').click( function(){ // ловим клик по ссылке с классом go_to
	
       
	    $('html, body').animate({ scrollTop: $('.quality-section').offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        
	    return false; // выключаем стандартное действие
    });
	$('.ollia3').click( function(){ // ловим клик по ссылке с классом go_to
	
       
	    $('html, body').animate({ scrollTop: $('.comments-section').offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        
	    return false; // выключаем стандартное действие
    });
	$('.ollia4').click( function(){ // ловим клик по ссылке с классом go_to
	
       
	    $('html, body').animate({ scrollTop: $('.advantages-section').offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        
	    return false; // выключаем стандартное действие
    });
     
  $(".tel").keypress(function (e)  
    { 
     var phone = $(this).val();
     var value_str5 = phone.substr(0,5);
        	//alert(value_str5) ;	
    if(value_str5=='+7(89'){
              //$(this).css({'border':'1px solid red','color':'red'});
				$(this).val('+7(9');
      
			}  
    });
  $('.buttons22').click( function(){ // аЛаОаВаИаМ аКаЛаИаК аПаО бббаЛаКаЕ б аКаЛаАббаОаМ go_to
	 
    var nomer =  $(this).attr('nomer');
       
	var phone = $('#lv-formLanding'+nomer+' .tel').val();
    var phone_length = phone.length;
    var value_str4 = phone.substr(0,4);
     var value_str5 = phone.substr(0,5);
    
   
   // alert(value_str4); 
    var error = [0];
			if(phone_length!=16){
              $('#lv-formLanding'+nomer+' .tel').css({'border':'1px solid red','color':'red'});
				error.push(1);
			} else {
				//$('#lv-formLanding'+nomer+' .tel').css({'border':'none','color':'#000'});
				//error.push(0);
				
			}
    		if(value_str4=='+7(8' || value_str4=='+7(1' || value_str4=='+7(2' || value_str4=='+7(3' || value_str4=='+7(5' || value_str4=='+7(6' || value_str4=='+7(0'  || value_str4=='+7(7'){
              $('#lv-formLanding'+nomer+' .tel').css({'border':'1px solid red','color':'red'});
				error.push(1);
			} else {
				//error.push(0);
				
			}
    if(value_str5=='+7(89'){
              $('#lv-formLanding'+nomer+' .tel').css({'border':'1px solid red','color':'red'});
				$('#lv-formLanding'+nomer+' .tel').val('+7(9');
      error.push(1);
			} else {
				//error.push(0);
				
			}
			if(phone=='+7(495)112-02-02'){
              $('#lv-formLanding'+nomer+' .tel').css({'border':'1px solid red','color':'red'});
				error.push(1);
			} else {
				//error.push(0);
				
			}
			
			
function charst(string, symbol)
{
  var count = 0;
  for (var i = 0; i < string.length; i ++)
  {
    if (string.charAt(i) == symbol)
    {
      count++;
    }
  }
  return count;
}
var count1 = charst(phone,"1");
    var count2 = charst(phone,"2");
    var count3 = charst(phone,"3");
    var count4 = charst(phone,"4");
    var count5 = charst(phone,"5");
    var count6 = charst(phone,"6");
    var count7 = charst(phone,"7");
    var count8 = charst(phone,"8");
    var count9 = charst(phone,"9");
    var count0 = charst(phone,"0");
    //alert(count1) ;

if(parseInt(count1)>5 || parseInt(count1)>5 || parseInt(count2)>5 || parseInt(count3)>5 || parseInt(count4)>5 || parseInt(count5)>5 || parseInt(count6)>5 || parseInt(count7)>5 || parseInt(count8)>5 || parseInt(count9)>5 || parseInt(count0)>5){
              $('#lv-formLanding'+nomer+' .tel').css({'border':'1px solid red','color':'red'});
				error.push(1);
			} else {
				//error.push(0);
				
			}
		
			
			var err=0;
			for (i in error){ 
				//console.log(error[i]);
				if (error[i]==1){
					err=1;
				}
			}
            if (err==0){ //return false; 
//alert('ok'); 
            }else {
                //alert('err'); 
               return false; 
            }
    
   
        
	    
    });
    
	
	$('.tovar_item').hover( function(){ 
	
       $(this).addClass('tovar_hover') ;
	   //$(this).find('.incart').text('Добавить в корзину') ;
	   
    },function(){ // ловим клик по ссылке с классом go_to
	
       $(this).removeClass('tovar_hover') ;
	     //$(this).find('.incart').text('Заказать') ;
    });
   
    /*$('.podrob,.bzak,.tovarimg').click(function(){
		
		var id = $(this).attr('id_product') ;
		var vis = $('.item'+id).offset().top ;
		var vis = 20;
		var name = $('.item'+id+' .nametovar').text() ;
		var desc = $('.item'+id+' .desc').text() ;
		var oldprice = $('.item'+id+' .oldprlist strike').text() ;
		var price = $('.item'+id+' .pricenum').text() ;
		var img = $('.item'+id+' .bigimg img').attr('src') ;
		
		
		//alert(oldprice) ;
		$('.hpop').text(name) ;
		$('.popapvspl strike').text(oldprice) ;
		$('.popapvspl .pricetoday').text(price) ;
		$('.popleft img').attr('src',img) ;
		$('.popup-wrapper').attr('style','display:block;top:'+vis+'px');
		$('.allfon').attr('style','display:block;');
		$('.popzakbtnbig').attr('id_product',id) ;
		$('.slesh').text('#'+id) ;
		$('.bezslesh').text(desc) ;
		$('#popform .bistro').val(id) ;
		$('#popform .bistro_price').val(price) ;
		
		
		
		return false;	
	});	*/
	$('.popup-close, .allfon_').click(function(){
		$('.popup-wrapper, .allfon').attr('style','display:none;');
	});
	$('.back-catalog-xs').click(function(){
		$('.popup-wrapper,.allfon').css('display','none');
	})
	$(window).scroll(function(){ // задаем функцию при срабатывании события "scroll" на элементе <div>
		var topp = $(this).scrollTop();
		
		if(topp>=66){
			$('.cartpopolz_doin').addClass('fixedcart');
		}else{
			$('.cartpopolz_doin').removeClass('fixedcart');
		} 
	})
	$('body').on('click','.cartminiitem .up',function() { 
		
		$qnobj = $(this).prev('a').prev('input');
		var id = parseInt($(this).attr('id_product'));
		var q = parseInt($qnobj.val()) ;
		//alert(q) ;
		$qnobj.text(q+1);
		$.post(
					  "/ajax.php",
					  {
						id: id,
						q:q+1,
						action:'edit'
						 
					  },function onAjaxSuccess(data){
						   $('.cartblokosn').html(data);
						  
						  
						
					  }
			 )
		return false;	
	});	
	$('body').on('click','.cartminiitem .down',function() { 
	
		$qnobj = $(this).prev('input');
		var id = parseInt($(this).attr('id_product'));
		var q = parseInt($qnobj.val()) ;
		//alert(q) ;
		if(q>1){
			
			$qnobj.text(q-1);
			$.post(
					  "/ajax.php",
					  {
						id: id,
						q:q-1,
						action:'edit'
						 
					  },function onAjaxSuccess(data){
						   $('.cartblokosn').html(data);
						  
						  
						
					  }
			 )
		}else {
			$.post(
					  "/ajax.php",
					  {
						id: id,
						action:'delete'
						 
					  },function onAjaxSuccess(data){
						
						  $('.cartblokosn').html(data);
						  
						  
						
					  }
					 )
		}
		
		return false;	
	});	
	$('.incart.add').click(function(){
		var id = parseInt($(this).attr('id_product'));
		var q = 1;
		$.post(
					  "/ajax.php",
					  {
						id: id,
						q:q,
						action:'add'
						 
					  },function onAjaxSuccess(data){
						  $('.item'+id+' .add').text("в корзине");
						 $('.cartblokosn').html(data);
						  
						  
						
					  }
					 )
		
		return false;	
	});	
	$('.popzakbtnbig').click(function(){
		var id = parseInt($(this).attr('id_product'));
		var q = 1;
		$.post(
					  "/ajax.php",
					  {
						id: id,
						q:q,
						action:'add'
						 
					  },function onAjaxSuccess(data){
						  $('.popzakbtnbig').text("Добавлен в корзину");
						 $('.cartblokosn').html(data);
						 setTimeout(function () {
		                    $('.popzakbtnbig').text("добавить в корзину и продолжить покупки");
							$('.popup-wrapper, .allfon').removeClass('is-visible');
	                	 }, 1000)
						  
						  
						
					  }
					 )
		
		return false;	
	});	
	
	/*$('.cartpopolz').on('click','.xx',function() { 
		var id = parseInt($(this).attr('id_product'));
		
		$.post(
					  "/ajax.php",
					  {
						id: id,
						action:'delete'
						 
					  },function onAjaxSuccess(data){
						
						  $('.cartpopolz').html(data);
						  
						  
						
					  }
					 )
		
		return false;	
	});*/
	//плюсминус корзина
		
	$('.cartblock').on('click','.cartbasket .up',function() { 
	
		$qnobj = $(this).prev('input');
		var id = parseInt($(this).attr('id_product'));
		var q = parseInt($qnobj.val()) ;
		
		$qnobj.text(q+1);
		$.post(
					  "/ajax_cart.php",
					  {
						id: id,
						q:q+1,
						action:'edit'
						 
					  },function onAjaxSuccess(data){
						   $('.cartblock').html(data);
						  
						  
						
					  }
			 )
		return false;	
	});	
	$('.cartblock').on('click','.cartbasket .down',function() { 
	
		$qnobj = $(this).next('input');
		var id = parseInt($(this).attr('id_product'));
		var q = parseInt($qnobj.val()) ;
		
		if(q>1){
			//alert(q) ;
			$qnobj.text(q-1);
			$.post(
					  "/ajax_cart.php",
					  {
						id: id,
						q:q-1,
						action:'edit'
						 
					  },function onAjaxSuccess(data){
						   $('.cartblock').html(data);
						  
						  
						
					  }
			 )
		}else {
			$.post(
					  "/ajax_cart.php",
					  {
						id: id,
						action:'delete'
						 
					  },function onAjaxSuccess(data){
						
						  $('.cartblock').html(data);
						  
						  
						
					  }
					 )
		}
		
		return false;	
	});	
	$('.popzakbtn').click(function(){
		var phone = $('#popform .phone').val();
		
		if(phone==''){
				$('#popform .phone').addClass('inp-error');
				
			} else {
				$('#popform .phone').removeClass('inp-error');
				$('#popform').submit();
				
			}
			return false;	
	});
	setTimeout(function () {

			cc();
			function cc(){
				var counter = 28;
				var interval = setInterval(function() {
					counter = counter - 1;
					$('.akckor span').text(counter);
					// Display 'counter' wherever you want to display it.
					//$('.items .bottom span').addClass('active');
					//setTimeout(function(){ $('.items .bottom span').removeClass('active') }, 1000);
					if (counter == 3) {
						// Display a login box
						clearInterval(interval);

					}
				}, 4000);				
			}
			
		
        },4000);  
	


	$('.popup-close').on('click', function(){
		$('.popup-wrapper').toggleClass(' hidden');
	});
	
});