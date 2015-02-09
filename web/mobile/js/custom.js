// tabs
$(function () {
  $(".detail_tab a").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    if (! $(target).length) return false;
    $('.tab', $(this).closest('.detail_tab')).removeClass('active');
    $(this).closest('.tab').addClass('active');

    // タブの表示切り替えとやっていることは同じです。
    $('.detail_box', $(target).closest('.content_details')).removeClass('active');
    $(target).addClass('active');
  });
});