define(["./jquery"], function(jquery) {
    // 中间栏下小图手动轮播
    $(function() {
        var x = 1;

        var xsize = $(".xtu .xtul ").size();
        // 向左
        $(".xtbtn-l").click(function() {
                (function() {

                    x++;
                    if (x >= 3) {
                        $(".xtu .xtul").stop().animate({
                            left: -558
                        }, 500)
                        x = 2;
                    } else {
                        $(".xtu .xtul").stop().animate({
                            left: -(x) * 186
                        }, 500)

                    }
                })();

            })
            // 向右的按钮
        $(".xtbtn-r").click(function() {



            (function() {

                x--;
                if (x <= -1) {

                    $(".xtu .xtul").stop().animate({
                        left: 0
                    }, 500)
                    x = 0
                } else {

                    $(".xtu .xtul").stop().animate({
                        left: -(x) * 186
                    }, 500)
                }

            })();

        })

    })
});
