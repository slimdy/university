/**
 * Created by slimdy on 2019/5/9.
 */
$(document).ready(function () {

        $("#nav_ul").find('li').each(function () {
            $(this).mouseover(function () {

                $(this).children("ul").css("display",'block');
            });
            $(this).mouseout(function () {

                $(this).children("ul").css("display",'none');
            });
        });
});
