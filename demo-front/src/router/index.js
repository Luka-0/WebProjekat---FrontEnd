import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeesView from '../views/EmployeesView.vue'
import EmployeeView from '../views/EmployeeView.vue'
import AddEmployeeView from '../views/AddEmployeeView.vue'
import EmployeeEdit from '../views/EmployeeEdit.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import NalogView from '../views/NalogView.vue'
import PregledLicnihPodatakaView from '../views/PregledLicnihPodatakaView.vue'
import AzuriranjeLicnihPodatakaView from '../views/AzuriranjeLicnihPodatakaView.vue'
import PregledSvihKorisnikaView from '../views/PregledSvihKorisnikaView.vue'
import PregledRestoranaMenadzeraView from '../views/PregledRestoranaMenadzeraView.vue'
import PregledPorudzbinaKupcaView from '../views/PregledPorudzbinaKupcaView.vue'
import NoviMenadzerView from '../views/NoviMenadzerView.vue'
import NoviDostavljacView from '../views/NoviDostavljacView.vue'
import RestoraniView from '../views/RestoraniView.vue'
import NoviRestoranView from '../views/NoviRestoranView.vue'
import PretragaRestoranaView from '../views/PretragaRestoranaView.vue'
import PregledRestoranaView from '../views/PregledRestoranaView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/employees',
    name: 'employees',
    component: EmployeesView
  },
  {
    path: '/employee',
    name: 'employee',
    component: EmployeeView
  },
  {
    path: '/azuriranje',
    name: 'Azuriranje',
    component: EmployeeEdit
  },
  {
    path: '/add-employee',
    name: 'add-employee',
    component: AddEmployeeView
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },

  {
    path: '/nalog',
    name: 'nalog',
    component: NalogView
  },

  {
    path: '/pregled-licnih-podataka',
    name: 'pregled-licnih-podataka',
    component: PregledLicnihPodatakaView
  },

  {
    path: '/azuriranje-licnih-podataka',
    name: 'azuriranje-licnih-podataka',
    component: AzuriranjeLicnihPodatakaView
  },

  {
    path: '/pregled-svih-korisnika',
    name: 'pregled-svih-korisnika',
    component: PregledSvihKorisnikaView
  },

  {
    path: '/pregled-restorana-menadzera',
    name: 'pregled-restorana-menadzera',
    component: PregledRestoranaMenadzeraView
  },

  {
    path: '/pregled-porudzbina-kupca',
    name: 'pregled-porudzbina-kupca',
    component: PregledPorudzbinaKupcaView
  },

   {
    path: '/novi-menadzer',
    name: 'novi-menadzer',
    component: NoviMenadzerView
  },

  {
    path: '/novi-dostavljac',
    name: 'novi-dostavljac',
    component: NoviDostavljacView
  },

  {
    path: '/restorani',
    name: 'restorani',
    component: RestoraniView
  },

  {
    path: '/novi-restoran',
    name: 'novi-restoran',
    component: NoviRestoranView
  },

  {
    path: '/restorani-pretraga',
    name: 'restorani-pretraga',
    component: PretragaRestoranaView
  },

  {
    path: '/restoran',
    name: 'restoran',
    component: PregledRestoranaView
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
