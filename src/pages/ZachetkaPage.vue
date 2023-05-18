<template>
    <div class="elzach">
        <h2>Электронная зачетка</h2>
    </div>


    <table class="zachetka">
        <tr>

            <td style="background-color: yellow;">Предмет/Дата</td>
            <td style="background-color: lightyellow;">02/05</td>
            <td style="background-color: lightyellow;">03/05</td>
            <td style="background-color: lightyellow;">04/05</td>
            <td style="background-color: lightyellow;">05/05</td>

        </tr>

        <tr>
            <td style="background-color: lightyellow;">ПРЕДМЕТ 1<br>ФИО преподавателя</td>
            <td>ЗАЧЕТ
                <div class="img_spor">
                    <a href="spor">ОТКРЫТЬ СПОР</a>
                </div>
            </td>
            <td>Экзамен 5
                <div class="img_spor">
                    <a href="spor">ОТКРЫТЬ СПОР</a>
                </div>
            </td>
            <td></td>
            <td></td>

        </tr>
        <tr>
            <td style="background-color: lightyellow;">ПРЕДМЕТ 2<br>ФИО преподавателя</td>
            <td>неЗАЧЕТ <div class="img_spor"><a href="spor">ОТКРЫТЬ СПОР</a></div></td>
            <td>Экзамен недопущен <div class="img_spor"><a href="spor">ОТКРЫТЬ СПОР</a></div></td>
            <td></td>
            <td></td>

        </tr>
        <tr>
            <td style="background-color: lightyellow;">ПРЕДМЕТ 3<br>ФИО преподавателя</td>
            <td>ЗАЧЕТ <div class="img_spor"><a href="spor">ОТКРЫТЬ СПОР</a></div></td>
            <td>Экзамен 3 <div class="img_spor"><a href="spor">ОТКРЫТЬ СПОР</a></div></td>
            <td></td>
            <td></td>

        </tr>
        <tr>
            <td style="background-color: lightyellow;">ПРЕДМЕТ 4<br>ФИО преподавателя</td>
            <td>ЗАЧЕТ <div class="img_spor"><a href="spor">ОТКРЫТЬ СПОР</a></div></td>
            <td>Экзамен 4 <div class="img_spor"><a href="spor">ОТКРЫТЬ СПОР</a></div></td>
            <td></td>
            <td></td>

        </tr>
        <tr>
            <td style="background-color: lightyellow;">ПРЕДМЕТ 5<br>ФИО преподавателя</td>
            <td>неЗАЧЕТ <div class="img_spor"><a href="spor">ОТКРЫТЬ СПОР</a></div></td>
            <td>Экзамен недопущен <div class="img_spor"><a href="spor">ОТКРЫТЬ СПОР</a></div></td>
            <td></td>
            <td></td>

        </tr>
        <tr>
            <td style="background-color: lightyellow;">ПРЕДМЕТ 6<br>ФИО преподавателя</td>
            <td>ЗАЧЕТ <div class="img_spor"><a href="spor">ОТКРЫТЬ СПОР</a></div></td>
            <td>Экзамен 5 <div class="img_spor"><a href="spor">ОТКРЫТЬ СПОР</a></div></td>
            <td></td>
            <td></td>

        </tr>

    </table>
</template>

<script>
export default {
    name: "ZachetkaPage"
}
</script>

<style scoped>
a{
    color: blue;
}
table{
    display: table;
}
td, th {
    border: 1px solid #264537;  /* границы между столбцами */

}
</style>