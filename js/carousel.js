define(["./jquery"], function(jquery) {
    $(function() {
        var i = 0;
        var clone = $(".mimg .mimg-img li").first().clone();
        $(".mimg .mimg-img").append(clone);
        var size = $(".mimg .mimg-img li ").size();

        for (var j = 0; j < size - 1; j++) {
            $(".mimg .num").append("<li></li>");
        }
        $(".mimg .num li").first().addClass("on");
        // 鼠标划入下部按钮
        $(".mimg .num li").hover(function() {
            var index = $(this).index();
            i = index;
            $(".mimg .mimg-img").stop().animate({
                left: -index * 560
            }, 500)
            $(this).addClass("on").siblings().removeClass("on")
        });
        // 自动轮播 定时器
        var t = setInterval(function() {
                i++;
                move()
            }, 2000)
            // 对定时器进行操作
        $(".mimg").hover(function() {
                clearInterval(t);
            }, function() {
                t = setInterval(function() {
                    i++;
                    move()
                }, 2000)
            })
            // 向左的按钮
        $(".btn-l").click(function() {
                i++;
                move();
            })
            // 向右的按钮
        $(".btn-r").click(function() {
                i--;
                move();
            })
            // 运动函数
        function move() {
            if (i == size) {
                $(".mimg .mimg-img").css({
                    left: 0
                })
                i = 1;
            }
            if (i == -1) {
                $(".mimg .mimg-img").css({
                    left: -(size - 1) * 560
                })
                i = size - 2;
            }
            $(".mimg .mimg-img").stop().animate({
                left: -i * 560
            }, 500)
            if (i == size - 1) {
                $(".mimg .num li").eq(0).addClass("on").siblings().removeClass("on")
            } else {
                $(".mimg .num li").eq(i).addClass("on").siblings().removeClass("on")
            }
        }

    })
});
