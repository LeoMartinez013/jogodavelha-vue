<template>
    <Header/>
    <Main/>
    <Footer/>
</template>
<script>
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
    name: "App",
    components: {
        Header,
        Footer,
        Main,
    },
};
</script>
<style>
body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    color: #2c3e50;

    background-image: linear-gradient(to bottom, #98ffaf, #076d1d);

    min-height: 100vh;

    width: 100%;
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
}
</style>
