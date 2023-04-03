<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
    <Header></Header>
    <router-view></router-view>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #abe691;
    overflow-y: scroll;

}

a{
    color: inherit;
    text-decoration: none;
}

.container{
    max-width: 1280px;
    padding: 0 60px;
    margin:  10px;
}


.nav{
    display: flex;
    justify-content: space-between;
}

.menu-list{
    display: flex;
    gap: 0 30px;
}

button{
    border-radius: 50px;
    font-size: 23px;
    margin: 12px;
    padding: 0 10px;
    background-color: #e0fad4;
}

h1 {
    font-family: 'IBM Plex Mono', monospace;
    text-align: center;
    font-size: 38px;
    font-weight: 600;
    color: #fdfdfe;
    text-shadow: 0 0 5px #36b346, 0 0 10px #36b346, 0 0 10px #36b346,
    0 0 20px #36b346;

}

.enter button {

    position: absolute;
    top: 0;
    right: 0;
    font-size: 18px;
    border-radius: 35px;
    width: 110px;
    height: 24px;
}






.vhod{
    display: flex;
    justify-content: center;
    height: 100%;
}

h2{

    text-align: center;

}

h3{
    text-align:  center;
}

h4{
    font-family: 'Raleway', sans-serif;
    font-size: 28px;
    text-align: center;
    text-shadow: sandybrown;
}

h5{
    font-family: sans-serif;
    font-size: 24px;
    text-align: center;
    text-shadow: sandybrown;
}

h6{
    font-family:'Raleway', sans-serif;
    font-size: 25px;
    color: darkgreen;
    text-align: center;
}

h7{
    padding-left: 210px;
    font-family: 'Nunito', sans-serif;
    font-size: 21px;
    color: gray;
    text-align: left;
}

.information{
    font-family:'Roboto Condensed', sans-serif;;
    padding-left: 240px;
    padding-right: 240px;
    font-size: 20px;
    text-align: justify;

}

video{
    position: fixed;
    top: 470px;
    left: 470px;

    width: 40%;
    height: 40%;

    object-fit: cover;
}

.menuinf{
    display: flex;
    justify-content: center;
    height: 100%;
}

.foto{
    padding-left: 100px;
}

.adds{
    font-family:'Roboto Condensed', sans-serif;;
    padding-left: 360px;
    padding-right: 400px;
    font-size: 18px;
    text-align: justify;
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
</style>