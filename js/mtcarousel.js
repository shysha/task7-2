define(["./jquery"], function(jquery) {
    // 媒体报道
    $(function() {
        var m = 3;

        var msize = $(".lun2 .bo2 ").size();

        $(".jiantou2-l").click(function() {
                (function() {

                    m++;
                    if (m >= 7) {
                        $(".lun2 .bo2").stop().animate({
                            left: -960
                        }, 500)
                        m = 6;
                    } else {
                        $(".lun2 .bo2").stop().animate({
                            left: -(m) * 160
                        }, 500)

                    }
                })();

            })
            // 向右的按钮
        $(".jiantou2-r").click(function() {



            (function() {

                m--;
                if (m <= -1) {

                    $(".lun2 .bo2").stop().animate({
                        left: 0
                    }, 500)
                    m = 0
                } else {

                    $(".lun2 .bo2").stop().animate({
                        left: -(m) * 160
                    }, 500)
                }

            })();

        })

    })
});
