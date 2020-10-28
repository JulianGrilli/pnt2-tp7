<template>

  <section class="src-components-login-component">    
    <div class="container" style="margin-top: 50px">
      <div class="col-md-8">
        <form  nonvalidate autocomplete="off" @submit.prevent="loguearse()">

          <!-- Campo username -->
          <div class="form-group">
            <label class="label-form font-weight-bold" for="username">username</label>
            <input 
              type="text" 
              id="username" 
              class="input-valor form-control" 
              v-model="$v.f.username.$model"
              placeholder="Username"
            >
          </div>
          <!-- Validacion campo username -->
          <div v-if="$v.f.username.$error && $v.f.username.$dirty" class="alert alert-danger mt-1">
            <div v-if="$v.f.username.required.$invalid">Este campo es requerido</div>
          </div>

          <!-- Campo Password -->
          <div class="form-group">
            <label class="label-form font-weight-bold" for="password">Password</label>
            <input 
              type="password" 
              class="input-valor form-control" 
              id="password" 
              v-model="$v.f.password.$model"
              placeholder="Password"
            >
          </div>
          <!-- Validacion campo password -->
          <div v-if="$v.f.password.$error && $v.f.password.$dirty" class="alert alert-danger mt-1">
              <div v-if="$v.f.password.required.$invalid">Este campo es requerido</div>
          </div>
          <button 
            type="submit" 
            class="btn btn-success"
            :disabled="$v.$invalid || hasFormAnyEmptyField"
          >
            Ingresar
          </button>
          <div style="color: #721c24" v-if="isUsuarioValido">Username y/o password incorrecto</div> 
        </form>
      </div>
    </div>
  </section>

</template>

<script>

  
  import {required} from '@vuelidate/validators' 

  export default  {
    name: 'src-components-login-component',
    props: [],
  data () {
    return {
      f: this.resetForm(),
      usuarioValido: false,
      isFormClicked: false
    }
  },
  computed: {
    hasFormAnyEmptyField(){
      return !this.f.username || !this.f.password
    },
    isUsuarioValido(){
      return !this.usuarioValido && this.isFormClicked
    }

  },
  mounted () {

  },
  validations: {
    f: {
        username: { 
          required
        },
        password: { 
          required
        }
      }
  },
  methods: {
    loguearse(){
      let form = {
          username: this.$v.f.username.$model,
          password: this.$v.f.password.$model
      }
      console.log(form)
      this.sendDatosFormAxios(form)
      this.f = this.resetForm()
      this.$v.$reset()
    },
    resetForm(){
      return {
        username: '',
        password: ''
      }
    },
    sendDatosFormAxios(datos) {
      console.log("Datosssss ", datos);
      if(datos.username === 'root' && datos.password === '1234'){
        this.usuarioValido = true;
        sessionStorage.setItem('loginValid', true);
        this.$router.push('/getTareas')
      }
      this.isFormClicked = true;
    }
  }
}



</script>

<style scoped lang="css">
  .src-components-login-component {

  }
  button {
    position: absolute;
    right: 17px;
    margin-bottom: 20px;
    margin-top: 10px;
    box-shadow: 4px 4px #87f137b5;
}

</style>
