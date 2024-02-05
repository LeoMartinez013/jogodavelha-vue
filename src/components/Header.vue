<template>
    <header>
        <h1>Jogo da velha com Vuejs</h1>
    </header>
</template>
<script>
export default {
    name: 'Header',
}
</script>
<style>
    header {
        display: flex;
        height: 3rem;
        width: 100%;
        align-items: center;
        justify-content: center;

        background-color: transparent;

        margin: 0 0 1rem 0;
    }
    header > h1 {
        font-size: 1.3rem;
    }
</style>