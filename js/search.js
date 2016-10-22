define(["./jquery"], function(jquery) {

    $(function() {
        $(".ser-text").on("focus", function() {
            $(".hot-words").fadeOut();
        }).on("blur", function() {
            $(".hot-words").fadeIn()
        })

    })
});
