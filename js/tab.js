define(["./jquery"], function(jquery) {
    // 点击切换标签页
    $(document).ready(function() {
        $(".news-n").each(function(index) {
            $(this).mouseover(function() {
                // 移除样式
                $(" .xianshi").removeClass("xianshi");
                $(".xianshi2").removeClass("xianshi2")
                    // 添加样式
                $(" .yiyang").eq(index).addClass("xianshi");
                $(".news-n").eq(index).addClass("xianshi2");
            })
        });

    })
});
