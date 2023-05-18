<script setup>
import Header from "@/components/Header.vue";

</script>

<template>
    <Header></Header>
    <router-view></router-view>
</template>

<style>
html{
    box-sizing: border-box;
}

*,
*::before,
*::after{
    box-sizing: inherit;
}

body{
    background-image: url('assets/images/back.jpg');
    overflow-y: scroll;

}
.container1{
    mx-width: 1280px;
    padding: 0 60px;
    margin:  10px;


}

h1 {
    font-family: 'IBM Plex Mono', monospace;
    text-align: center;
    font-size: 38px;
    font-weight: 600;
    color: #fdfdfe;
    text-shadow: 0px 0px 5px #36b346, 0px 0px 10px #36b346, 0px 0px 10px #36b346,
    0px 0px 20px #36b346;

}
h5{
    font-size: 24px;
    text-align: center;
    text-shadow: sandybrown;
}
.razdel{

    display: flex;
    justify-content: center;
    height: 100%;

}
.enter{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 18px;
    boarder-radius: 35px;
    width: 90px;
    height: 20px;
}

.menuinf{
    display: flex;
    justify-content: center;
    height: 100%;
}

button{
    border-radius: 50px;
    font-size: 23px;
    margin: 12px;
    background-color: #e0fad4;
}
.information{
    font-family:'Roboto Condensed', sans-serif;;
    padding-left: 240px;
    padding-right: 240px;
    font-size: 20px;
    text-align: justify;


}
video{
    position: absolute;
    justify-content: center;


    width: 40%;
    height: 40%;

    object-fit: cover;
}
.container {
    display: flex;
    justify-content: center;

}

.adds{
    font-family:'Roboto Condensed', sans-serif;;
    padding-left: 360px;
    padding-right: 400px;
    font-size: 18px;

    display: flex;
    justify-content: center;
}
h4{
    font-family: 'Raleway', sans-serif;
    font-size: 28px;
    text-align: center;
    text-shadow: sandybrown;
}
.sostfac{
    font-family:'Roboto Condensed', sans-serif;;
    padding-left: 520px;
    padding-right: 240px;
    margin-top: -310px;
    font-size: 20px;
    text-align: justify;
    color: forestgreen;
}
.esc {
    position: absolute;
    top: 10px;
    left: 0;
    font-size: 18px;
    border-radius: 0px;
    size: auto;

}

.foto{
    padding-left: 100px;
}
h2{

    text-align: center;

}
h6{
    font-family:'Raleway', sans-serif;
    font-size: 25px;
    color: darkgreen;
    text-align: center;
}
h4{
    font-family: 'Raleway', sans-serif;
    font-size: 28px;
    text-align: center;
    text-shadow: sandybrown;
}
h7{
    padding-left: 210px;
    font-family: 'Nunito', sans-serif;
    font-size: 21px;
    color: gray;
    text-align: left;
}
.infbezop{
    font-family: 'Comfortaa', cursive;;
    padding-left: 210px;
    padding-right: 210px;
    font-size:19px ;
    text-align: justify;
}
.prikinf{
    font-family: 'Comfortaa', cursive;;
    padding-left: 210px;
    padding-right: 210px;
    font-size:19px ;
    text-align: justify;
}
.infsistechn{
    font-family: 'Comfortaa', cursive;;
    padding-left: 210px;
    padding-right: 210px;
    font-size:19px ;
    text-align: justify;
}
.infsistechnmag{
    font-family: 'Comfortaa', cursive;;
    padding-left: 210px;
    padding-right: 210px;
    font-size:19px ;
    text-align: justify;
}
.infbezopmag{
    font-family: 'Comfortaa', cursive;;
    padding-left: 210px;
    padding-right: 210px;
    font-size:19px ;
    text-align: justify;
}
.otzivi{
    text-align: center;
    font-family:'Roboto Condensed', sans-serif;
    font-size: 26px;
}
.login{
    display: flex;
    justify-content: center;
    height: 100%;

}

.pass{
    display: flex;
    justify-content: center;
    height: 100%;


}

.vhod{
    display: flex;
    justify-content: center;
    height: 100%;
}

.razdelstudent{
    display: flex;
    justify-content: center;
    height: 100%;

}

.razdeldekanat{
    display: flex;
    justify-content: center;
    height: 100%;
}
.razdeldekanat2{
    display: flex;
    justify-content: center;
    height: 100%;
}
.razdelteacher{
    display: flex;
    justify-content: center;
    height: 100%;
}

.service{
    display: flex;
    justify-content: center;

}
.service2{
    display: flex;
    justify-content: center;

}
.service3{
    display: flex;
    justify-content: center;
}
.service img{
    width: 1300px;
    height: 380px;

}
.service2 img{

    justify-content: center;
    width: 1400px;
    height: 480px;

}
.service3 img{

    justify-content: center;
    width: 1300px;
    height: 300px;

}

table{
    display: flex;
    justify-content: center;
    height: 100%;
}
.raspzan{
    text-align: center;
}
.raspzan button{
    width: 500px;
    height: 50px;
}
.rasp{
    margin-top: 30px;
    text-align: center;
}
.rasp button{
    background-color: #ffffaa;
}
.kurs{
    margin-top: 10px;
    text-align: center;
}
.kurs button{
    background-color: skyblue;
    width: 70px;
    height: 70px;
}
.raspict{
    display: flex;
    justify-content: center;
    height: 100%;
}
.raspict img{

    width: 750px;
    height: 550px;
    border-radius: 60px;
}
.group{
    display: flex;
    justify-content: center;
    height: 100%;
    width: auto;
}
.group button{
    width: 400px;
    height: 130px;
}

.text-field {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 10px;
}
/* стили для label */
.text-field__label {
    display: block;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18;
    margin-bottom: 0.25rem;
    color: darkgreen;
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 100px;
}
/* стили для input */
.text-field__input {
    display: block;
    width: 50%;
    height: calc(9rem + 2px);
    padding: 0rem 0.75rem;
    font-family: 'Comfortaa', cursive;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #206e4c;
    background-color: #D9D9D9;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.sporstud {
    margin-top: 150px;
    margin-left: -230px;
    justify-content: right;
    display: flex;
    height: 100%;

}
.elzach{
    text-align: center;
}
.elzach button{
    width: 500px;
    height: 50px;
}
table{
    border-spacing:10px;
    border-color:darkgreen;
    border-style:solid;
    background-color: #E2F0D9;
}
td, th {
    border: 1px solid #264537;  /* границы между столбцами */

}
.img_spor{
    margin-left: 160px;
    margin-top: -17px;
}
.save_vedomost{
    display: flex;
    justify-content: center;
}

.select{
    margin: 0 auto;
    width: 500px;
    display: flex;
    justify-content: center;
}
.spravka_zayvka{
    margin: 0 auto;
    width: 250px;
    display: flex;
    justify-content: center;
}

</style>