<template>
  <header>
    <Topo/>
  </header>
  <main>
    <Jogo/>
  </main>
  <footer>
    <Rodape/>
  </footer>
</template>
<script>
import Jogo from './components/Jogo.vue'
import Rodape from './components/Rodape.vue'
import Topo from './components/Topo.vue'
export default {
  name: 'App',
  components: {
    Topo,
    Rodape,
    Jogo
  }
}

    Topo</script>
<style>
  body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  color: #2c3e50;

  background-image: linear-gradient(to bottom, #e2a431, #68320e);

  
  padding: 0px;
  margin: 0px;


}
</style>
