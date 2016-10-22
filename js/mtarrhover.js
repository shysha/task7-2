define(["./jquery"], function(jquery) {
    // 媒体报道的箭头显影
    $(function() {

        $(".lun2").hover(function() {
            $(".jiantou2").css("display", "block")
        }, function() {
            $(".jiantou2").css("display", "none")
        })
    });
});
