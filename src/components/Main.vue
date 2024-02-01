<template>
<main>
    <Jogo/>
</main>
</template>
<script>
import Jogo from './Jogo.vue'
export default {
    name: 'Main',
    components: {
        Jogo
    }
}
</script>
<style>
main {
    height: 80vh;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
}
</style>