<?php
include "php/header.php";
?>
<div class="container">
    <div class="starter-template">
        <div>
            <div class="elem">
                <h1>Таймер рабочего времени</h1>
                <br>
                <h2 id="elem-2">До конца рабочего дня осталось:</h2>
                <br>
                <table class="table">
                    <thead>
                    <tr>
                        <th colspan="2">Часы</th>
                        <th>Минуты</th>
                        <th colspan="2">Секунды</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td id="var1">00</td>
                        <td class="q">:</td>
                        <td id="var2">00</td>
                        <td class="q">:</td>
                        <td id="var3">00</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<?php
include "php/footer.php";
?>