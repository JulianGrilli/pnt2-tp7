import { createWebHistory, createRouter } from 'vue-router'
import CrearTareaForm from '../components/CrearTareaForm.vue'
import GetTareas from '../components/GetTareas.vue'
import LoginComponent from '../components/LoginComponent.vue'

const routes = [
    { path: '/', name: 'Home', component: LoginComponent },
    { path: '/crearTareaForm', name: 'CrearTareaForm', component: CrearTareaForm },
    { path: '/getTareas', name: 'GetTareas', component: GetTareas }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


