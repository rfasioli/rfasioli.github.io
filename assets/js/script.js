new WOW().init();

$(document).ready(function ($) {
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
        setTimeout(function(){ $(".loader-container").fadeOut(600); }, 1000);
    });			

    var dicionario = Dicionario;
    $('.skill-progress').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).unbind('inview');
        }
    });

    $(".select ul").on("click", ".init", function() {
        $(this).closest("ul").children('li:not(.init)').toggle();
    });
    
    var allOptions = $(".select ul").children('li:not(.init)');
    $(".select ul").on("click", "li:not(.init)", function() {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $(".select ul").children('.init').html($(this).html());
        allOptions.toggle();
    });
    

    var _t = $('body').translate({lang: "pt", t: dicionario.returnT()});
    var str = _t.g("translate");
  
    $(".li-click").click(function(ev) {
      var lang = $(this).attr("data-value");
      _t.lang(lang);
      ev.preventDefault();
    });

    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500);
        e.preventDefault();
    });
    
});