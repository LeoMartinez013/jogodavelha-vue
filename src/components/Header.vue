<template>
    <header>
        <h1>Jogo da velha com Vuejs</h1>
    </header>
    <div id="acessarPainel" @click="abrirPainel">
        <img src="../assets/painel.png" alt="painel ">
    </div>
</template>
<script>
export default {
    name: 'Header',
    methods: {
        abrirPainel() {
            document.querySelector('#overlay').style.display = 'flex'
        }
    }
}
</script>
<style>
header {
    display: flex;
    height: 3rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    color: #2c3e50;
    background-color: transparent;

    margin: 0 0 1rem 0;
}
header > h1 {
    font-size: 1.3rem;
}
#acessarPainel {
    position: fixed;
    left: 1rem;
    top: 0.5rem;
    height: 2rem;
    width: 2rem;

    cursor: pointer;
}
#acessarPainel > img {
    height: 100%;
    width: auto;
}
</style>