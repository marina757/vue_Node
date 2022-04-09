  <template>
  <v-app light>
    <v-toolbar fixed app light clipped-left color="secondary" class="elevation-2">
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="white--text"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">App News</v-toolbar-title>
    </v-toolbar>

   <MainContent :articles="articles"></MainContent>
    <v-content>
      <v-container fluid> </v-container>
    </v-content>

<div id="app">
    <footer>
      <p>Copyright - Marina Villalon - {{currentYear}}</p>
    </footer>
  </div>

  </v-app>
</template>
<script>

import axios from 'axios' // per collegarsi app con news API
import MainContent from './components/MainContent.vue'

export default {

  components: {
        MainContent,
  },

  data() {
    return {
      drawer: false, //TRUE attiva visibilita del possibile menu laterale
      api_key:'', // METTERE DIGITI API KEY PERSONALE
      articles: [],
      errors: [],
      currentYear: new Date().getFullYear(), // 2022
    }
  },
  created () {
    axios.get('https://newsapi.org/v2/everything?q=Apple&from=2022-04-07&sortBy=popularity&apiKey='+this.api_key)
      .then(response => {
        this.articles = response.data.articles
        console.log('data:')
        console.log(response.data.articles)
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  setResource(source){
        axios.get('https://newsapi.org/v2/everything?q=Apple&from=2022-04-07&sortBy=popularity&apiKey='+this.api_key)
        .then(response => {
          //this.articles = response.data.articles
          this.articles = response.data.articles
          console.log('Source Articles:')
          console.log(response.data.articles) // This will give you access to the full object
        })
        .catch(e => {
          this.errors.push(e)
        })
      }
   }


</script>





