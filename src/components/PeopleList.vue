<template>
 <div class="people-list">
  <ul v-for="(person, index) in people" :key="index">
    <li>
      <router-link :to="'/' + person.id">
        <span>{{ person.firstName }} {{ person.surname }}</span>
      </router-link>
    </li>
  </ul>
 </div>
</template>

<script>
  export default {
    props: ['people']
  }
</script>

<style scoped>
.people-list {
  width: 60%;
  margin: auto;
}

ul {
  list-style-type: none;
}

li {
  padding: 20px;
  text-align: center;
  border: 1px solid #cacaca;
}

li a {
  color: dodgerblue;
  font-family: 'Courier New', Courier, monospace;
  cursor: pointer;
  text-decoration: none;
}
</style>
