<template>
  <div class="network">
    <h1>Network users: </h1>
    <people-list :people="people"></people-list>
  </div>
</template>

<script>
import PeopleList from './PeopleList.vue'
import {store} from '../store'
import {Network} from '../store'

export default {
  data () {
    return {
      people: []
    }
  },

  mounted () {
    store.fetchData()
      .then(response => {        
        this.people = store.network.getPeople()
        console.log('find id 5', store.network.findPersonById(5))
        console.log('connections ', store.network.getConnections())
      })
  },

  components: {
    PeopleList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  color: #474747;
  text-align: center;
  margin-bottom: 2em;
}

a {
  color: #42b983;
}
</style>
