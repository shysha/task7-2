// 合作企业的箭头显影

define(["./jquery"], function(jquery) {
    // 媒体报道的箭头显影
    $(function() {

        $(".strategy").hover(function() {
            $(".jiantou").css("display", "block")
        }, function() {
            $(".jiantou").css("display", "none")
        })
    });
});
