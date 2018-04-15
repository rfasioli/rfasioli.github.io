
$(document).ready(function ($) {
    var dicionario = Dicionario;
    $('.skill-progress').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).unbind('inview');
        }
    });

    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1200);
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
});