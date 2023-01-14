<template>
  <div id="app">
      <h1>Adrian Rodriguez Mejia</h1>
      <h2>CRUD Factura Tech</h2>

      <CrudUsers />
      <footer>
        <ExercisesTest />
      </footer>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
    CrudUsers: () =>
      import('./components/crud-users/index'),
    ExercisesTest: () =>
    import('./components/exercises/index'),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
