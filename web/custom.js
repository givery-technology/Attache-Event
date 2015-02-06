// tabs
$(document).ready(function() {
  $('.tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
});

$(function(){
    var box = $("#navbar");
    var boxTop = box.offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop() >= boxTop){
            box.addClass("fixed");
            $("body").css("margin-top","80px");
        }else{
            box.removeClass("fixed");
            $("body").css("margin-top","0px");
        }
    });
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top - 70;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

    $('#count1').animateNumber({
      number: 48
    }, 1000);
    $('#count2').animateNumber({
      number: 100
    }, 1000);
    $('#count3').animateNumber({
      number: 30
    }, 1000);
});