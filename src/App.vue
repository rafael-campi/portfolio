<template>
  <!-- <Logo/> -->
  <LanguageSwitcher/>
  
  <Perfil/>
  <Apresentation/>
  <Icons/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Perfil from './components/Perfil.vue'
import Icons from './components/Icons.vue'
import Apresentation from './components/Apresentation.vue'
import Logo from './components/Logo.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
export default {
  name: 'App',
  components: {
    LanguageSwitcher,
    HelloWorld,
    Perfil,
    Icons,
    Apresentation,
    Logo
  }
}
</script>


<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-color: #2c3e50;
}
</style>
