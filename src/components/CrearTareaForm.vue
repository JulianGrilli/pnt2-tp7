<template>
  <div class="alert alert-warning" role="alert" v-if="!access">
    No tienes acceso a este recurso
  </div>
  <section class="src-components-crear-tarea-form" v-if="access">
    <div class="jumbotron">
      <h1 class="display-4">Crear Tarea</h1>
      <hr>
      <p class="lead">- Formulario para crear nueva tarea asociada a un usuario -</p>
    </div>
    <div class="container">
      <div class="col-md-12">
        <form  nonvalidate autocomplete="off" @submit.prevent="enviar()">

          <!-- Campo Descripcion -->
          <div class="form-group">
            <label class="label-form font-weight-bold" for="nombre">Descripción</label>
            <textarea               
              class="input-valor form-control" 
              id="nombre" 
              v-model="$v.f.descripcion.$model"
              placeholder="Ingrese la descripción de la tarea"
            >
            </textarea>
          </div>
          <!-- Validacion campo Descripcion -->
          <div v-if="$v.f.descripcion.$error && $v.f.descripcion.$dirty" class="alert alert-danger mt-1">
              <div v-if="$v.f.descripcion.required.$invalid">Este campo es requerido</div>
              <div v-else-if="$v.f.descripcion.minLength.$invalid">Este campo debe tener al menos 10 caracteres</div>
              <div v-else-if="$v.f.descripcion.maxLength.$invalid">Este campo debe tener como maximo 50 caracteres</div>
          </div>

          <!-- Campo Nombre -->
          <div class="form-group">
            <label class="label-form font-weight-bold" for="nombre">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              class="input-valor form-control" 
              v-model="$v.f.nombre.$model"
              placeholder="Ingrese el nombre de la persona responsable de la tarea"
            >
          </div>
          <!-- Validacion campo Nombre -->
          <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
            <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
            <div v-else-if="$v.f.nombre.minLength.$invalid">Este campo debe tener al menos 5 caracteres</div>
            <div v-else-if="$v.f.nombre.maxLength.$invalid">Este campo debe tener como maximo 15 caracteres</div>
          </div>

          <!-- Campo Mail -->
          <div class="form-group">
            <label class="label-form font-weight-bold" for="correo">Mail</label>
            <input 
              type="mail" 
              class="input-valor form-control" 
              id="correo" 
              v-model="$v.f.correo.$model"
              placeholder="Ingrese el mail de la persona que hará la tarea"
            >
          </div>
          <!-- Validacion campo Mail -->
          <div v-if="$v.f.correo.$error && $v.f.correo.$dirty" class="alert alert-danger mt-1">
              <div v-if="$v.f.correo.required.$invalid">Este campo es requerido</div>
              <div v-else-if="$v.f.correo.email.$invalid">Debe ser un mail valido</div>
          </div>
          <button 
            type="submit" 
            class="btn btn-success"
            :disabled="$v.$invalid || hasFormAnyEmptyField"
          >
            Crear Tarea
          </button> 
        </form>
      </div>
    </div>
  </section>
</template>

<script>

  import {required, email, minLength, maxLength} from '@vuelidate/validators' 
  export default  {
    name: 'src-components-crear-tarea-form',
    props: [],
  data () {
    return {
      f: this.resetForm(),
      url: 'https://5f86225bc8a16a0016e6ab42.mockapi.io/api/v1/usuarios/tareas',
      access: sessionStorage.getItem('loginValid')
    }
  },
  computed: {
    hasFormAnyEmptyField(){
      return !this.f.nombre || !this.f.descripcion || !this.f.correo 
    }
  },
  mounted () {

  },
  validations: {
    f: {
        nombre: { 
          required
        },
        descripcion: { 
          required,
          minLength: minLength(10),
          maxLength: maxLength(50)
        },
        correo: {
          required,
          email
        }
      }
  },
  methods: {
    sendsFormData(datos){
      console.log(datos)
    },
    enviar(){
      let form = {
          nombre: this.$v.f.nombre.$model,
          descripcion: this.$v.f.descripcion.$model,
          correo: this.$v.f.correo.$model
      }
      console.log(form)
      this.sendDatosFormAxios(form)
      this.f = this.resetForm()
      this.$v.$reset()
    },
    resetForm(){
      return {
        nombre: '',
        descripcion: '',
        correo: ''
      }
    },
    sendDatosFormAxios(datos) {
      this.axios.post(this.url, datos, {'content-type': 'application/json'})
      .then(res => console.log(res.data))
      .catch(error => console.log('HTTP POST ERROR', error))
    }
  }
}



</script>

<style scoped lang="css">
  .src-components-crear-tarea-form {

  }
  .label-form {
    float: left;
    margin-left: 3px;
    margin-top: 35px;
}

h1 {
    font-size: 30px;
}

button {
    position: absolute;
    right: 17px;
    margin-bottom: 20px;
    margin-top: 10px;
    box-shadow: 4px 4px #87f137b5;
}

.jumbotron {
    background-color: #ffef9c;
    box-shadow: 1px 2px #cabc1794;
}

.input-valor {
    box-shadow: 4px 4px #d8e7f77d;
}
</style>
