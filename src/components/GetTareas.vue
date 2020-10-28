<template>
  <div class="alert alert-warning" role="alert" v-if="!access">
    No tienes acceso a este recurso
  </div>
  <section class="src-components-get-tareas-table" v-if="access">
    
    <div class="jumbotron">
      <h1 class="display-4">Obtener Tareas</h1>
      <hr>
      <p class="lead">- Tabla de tareas obtenidas de MockApi.io -</p>
    </div>
    <div class="container">
      <div v-if="tareas.length == 0 && requestCompleted" class="alert alert-warning mt-1">
        <span>No hay tarea registrados.</span>      
      </div>
      <table class="table table-striped " v-if="tareas.length > 0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Fecha Creación</th>
                <th scope="col">Mail</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tarea, index) in tareas"
              :key="index">
                <td></td>
                <td>{{tarea.nombre}}</td>
                <td>{{tarea.descripcion}}</td>
                <td>{{dateFormat(tarea.createdAt)}}</td>
                <td>{{tarea.correo}}</td>
              </tr>
            </tbody>
      </table>
    </div>
  </section>


</template>

<script>
import Filter from '../Filter.js';
export default  {
    name: 'src-components-get-tareas-table',
    mixins: [Filter],
    props: [],
    mounted () {
      this.getDatosFormAxios()
    },
    data () {
      return {
        tareas: [],
        requestCompleted: false,
        url: 'https://5f86225bc8a16a0016e6ab42.mockapi.io/api/v1/usuarios/tareas',
        access: sessionStorage.getItem('loginValid')
      }
    },
    methods: {
      async getDatosFormAxios() {
        let response = await this.axios(this.url)
        try {
          console.log(response.data)
          this.tareas = response.data
          this.requestCompleted = true;
        } catch (error) {
          console.log("Error obtenido haciendo el GET de los tarea")
        }
      },
    },
    computed: {

    }
}

</script>

<style scoped lang="css">
  .src-components-get-tareas {

  }
</style>
