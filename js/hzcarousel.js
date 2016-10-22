define(["./jquery"], function(jquery) {
	
// 合作企业
$(function() {
    var h = 3;

    var hsize = $(".lun .bo ").size();

    $(".jiantou-l").click(function() {
            (function() {

                h++;
                if (h >= 7) {
                    $(".lun .bo").stop().animate({
                        left: -960
                    }, 500)
                    h = 6;
                } else {
                    $(".lun .bo").stop().animate({
                        left: -(h) * 160
                    }, 500)

                }
            })();

        })
        // 向右的按钮
    $(".jiantou-r").click(function() {



        (function() {

            h--;
            if (h <= -1) {

                $(".lun .bo").stop().animate({
                    left: 0
                }, 500)
                h = 0
            } else {

                $(".lun .bo").stop().animate({
                    left: -(h) * 160
                }, 500)
            }

        })();

    })

})
});