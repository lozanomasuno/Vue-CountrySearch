<template>  
  <div class="home">
   <SearchBar />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'HomeView',
  components: {
    SearchBar: defineAsyncComponent( () => import('../ListCountry/components/SearchBar.vue') )
  }
}
</script>
