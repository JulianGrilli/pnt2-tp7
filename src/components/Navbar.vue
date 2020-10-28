<template>

  <section class="src-components-navbar">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to='/'>
      <a class="navbar-brand" href="#">Inicio</a>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to='/crearTareaForm'>
            <a class="nav-link" href="#">Crear Tarea</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to='/getTareas'>
            <a class="nav-link" href="#">Get Tareas</a>
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <button type="button" class="btn btn-outline-danger my-2 my-sm-0" @click="logout()">Logout</button>
        </li>
      </ul>
    </div>
  </nav>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {
    },
    data () {
      return {
        access: sessionStorage.getItem('loginValid'),
        accessFromChild: false
      }
    },
    methods: {
      logout(){
        sessionStorage.removeItem('loginValid');
        this.access = false;
        this.$router.push('/')
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navbar {

  }
  button{
    float: right;}
  nav {
    box-shadow: 1px 2px #c0c0c17d;
  }
</style>
