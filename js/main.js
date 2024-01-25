//slick
$('.eb_slider_list').slick({
    pauseOnHover:false,/* 마우스 띄면 자동플 멈춤 */
    dots:true,
    arrows:false,
    atoplay:true
});


// $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });




//정지/재생 버튼

// 선택자.addEventListner('click',function(){})  자바언어
// 선택자.onclick(function(){})   자바언어

$('.event_box2 .page_act .btn_stop').click(function(e){
 e.preventDefault();
 if($('.event_box2 .page_act').hasClass('on')){//on이라는 클래스명을 가지고 있다면 true, 없다면 false}
    $('.event_box2 .page_act').removeClass('on');
    $('.your-element').slick('slickPause'); //slick methods
 }
})

//튕김방지 (a태그라서 아이디를 찾으려 올라가기때문)



$('.event_box2 .page_act .btn_play').click(function(e){
    e.preventDefault();
    if(!$('.event_box2 .page_act').hasClass('on')){

          //  !--> not   !!-->긍정
    $('.event_box2 .page_act').addClass('on')}
    $('.eb_slider_list').slick('slickPlay');
})


$('.card').slick({
    pauseOnHover:false,/* 마우스 띄면 자동플 멈춤 */
    dots:true,
    arrows:false,
    atoplay:true
   
  });

  
//정지/재생 버튼

// 선택자.addEventListner('click',function(){})  자바언어
// 선택자.onclick(function(){})   자바언어

$('.event_box3 .page_act .btn_stop').click(function(e){
    e.preventDefault();
    if($('.event_box3 .page_act').hasClass('on')){//on이라는 클래스명을 가지고 있다면 true, 없다면 false}
       $('.event_box3 .page_act').removeClass('on');
       $('.your-element').slick('slickPause'); //slick methods
    }
   })

   
   $('.event_box3 .page_act .btn_play').click(function(e){
    e.preventDefault();
    if(!$('.event_box3 .page_act').hasClass('on')){

        //! --> not   !! --> 긍정   
    $('.event_box3 .page_act').addClass('on');
    $('.card').slick('slickPlay');
    }
})


/* life 버튼 */
let tab=$('.life_menu ul li');
let menu=$('.life_style ul li');

tab.mouseover(function(){
   let target = $(this);
   let index = target.index();
   console.log(index)
   menu.css({opacity:0})
   menu.eq(index).css({opacity:1})
});