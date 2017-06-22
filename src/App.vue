<template>
  <div>
    <counter :count="count"></counter>
  </div>
</template>

<script>
export default {
  name: 'app',
  data :function(){
    return{
      count : "5"
    }
  },
  components : {
    counter : require("./components/counter.vue")
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
