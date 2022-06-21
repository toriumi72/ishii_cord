$(function() {
    // ハンバーガーメニュー
    $('.bl-hamburger-bg-w').hide();
    $('.bl-hamburger-button, .bl-hamburger-menu, .bl-hamburger-menu-li a').click(function() {
        $('.bl-hamburger-bg-w').fadeToggle(300);
        $('.bl-hamburger-button, .bl-hamburger-menu').toggleClass('js-hamburger-open');
        $('body').toggleClass('js-hamburger-no-scroll')
    });

    //アコーディオン
    $('.ly-faq-li:not(:first-child) .ly-faq-li-a').hide();
    $('.ly-faq-li').on('click', function(e) {
        $('.ly-faq-li-a',this).slideToggle('fast');
    });

    //スムーススクロール
    var windowWidth = $(window).width();
    var headerHeight = 94;
    $("a[href^='#']").click(function(){
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href=="#" || href==""?"html":href);
        var position = target.offset().top - headerHeight;
        $("body,html").animate({scrollTop:position}, speed, "swing");
        return false;
    });


    // contactページの、必須項目及びプライバシーポリシーのチェックがないと送信ボタンが押せなi
    const $submitBtn = $("#js-submit");
    $('.alert').hide();
    $("#form input, #form textarea").on("change", function(){
      if(
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="email"]').val() !== "" &&
        $('#form textarea').val() !== "" &&
        $('#form #confirmation').prop('checked') === true
      ){
        $submitBtn.prop('disabled', false);
        $('.alert').hide();
        $('.form').css('paddingBottom', 35);
      }else{
        $submitBtn.prop('disabled', true);
        $('.alert').fadeIn();
        $('.form').css('paddingBottom', 0);
      }
    });
});
'use strict'; 
{
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1.5, // １度に表示するスライド数
    centeredSlides: true, //現在のスライドを中央に表示
    spaceBetween: 20, // スライド同士の余白
  
    // 自動再生
    autoplay: {
      delay: 5000 // 次のスライドに切り替わる時間の設定（ミリ秒:1000=1秒）
    },

    breakpoints: {
      1001: {
        slidesPerView: 3.75, // １度に表示するスライド数
        spaceBetween: 56, // スライド同士の余白
      } 
    },  
  });

  // spのsafariにおける100vh表示の調整
  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  window.addEventListener('resize', setFillHeight);

  setFillHeight();

  
}

// フェードイン
AOS.init({

})