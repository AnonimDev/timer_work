$( document ).ready(function() {

    var timer = setInterval(timer, 1000);

    $.fn.wait = function(time, type) {
        time = time || 1000;
        type = type || "fx";
        return this.queue(type, function() {
            var self = this;
            setTimeout(function() {
                $(self).dequeue();
            }, time);
        });
    };
    function runIt() {
        $(".q").wait()
            .animate({"opacity": 0},250)
            .wait()
            .animate({"opacity": 1},250,runIt);
    }
    runIt();

    function timer() {
        var var1 = $("#var1");
        var var2 = $("#var2");
        var var3 = $("#var3");
        var table = $(".table");
        var h = $("#elem-2");
        var now = new Date();

        var time_1 = "10"; //Часы, с которого времени начинается рабочий день
        var time_2 = "19"; //Часы, до которого времени рабочий день
        // nowHours = now_time.getHours();
        // nowMinutes = now_time.getMinutes();
        // nowSeconds = now_time.getSeconds();

        var n = (now.getHours() >= time_2) ? 1 : 0;
        var full = new Date(now.getFullYear(), now.getMonth(), now.getDate() + n, time_2, 0, 0);
        var diff =  Math.floor((full - now)/1000);

        var hoursRemain   = Math.floor(diff/(60*60));
        var minutesRemain = Math.floor((diff-hoursRemain*60*60)/60);
        var secondsRemain = Math.floor(diff%60);

        if (hoursRemain <= ((time_2 - time_1)-1) && !(getWeekDay(now) === 'Воскресенье') && !(getWeekDay(now) === 'Суббота')) {
            var1.text(addZero(hoursRemain));
            var2.text(addZero(minutesRemain));
            var3.text(addZero(secondsRemain));
        } else if ((getWeekDay(now) == 'Воскресенье') || (getWeekDay(now) == 'Суббота')){
            table.hide();
            h.append('<br><br><br><h2>Сегодня выходной!!!</h2>');
            clearInterval(timer);
        } else if (now.getHours() >= time_2 && now.getHours() <= 23){
            table.hide();
            h.append('<br><br><br><h2>Рабочий день уже закончился!!!</h2>');
            clearInterval(timer);
        } else {
             table.hide();
             h.append('<br><br><br><h2>Рабочий день еще не начался!!!</h2>');
             clearInterval(timer);
        }
    }

    function getWeekDay(date) {
        date = date || new Date();
        var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        var day = date.getDay();

        return days[day];
    }

    function addZero(num){
        if(num <=9) return '0'+num;
        else return num;
    }

});