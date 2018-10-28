<template>
 <div class="people-list">
  <ul>
    <li v-for="(person, index) in people" :key="index">
      <span @click="showContactInfo(person.id)" :class="{'is-selected': selectedId === person.id}">{{ person.firstName }} {{ person.surname }}</span>
    </li>
  </ul>
 </div>
</template>

<script>
export default {
  props: ["people"],

  data() {
    return {
      selectedId: -1
    };
  },

  methods: {
    showContactInfo(personId) {
      this.selectedId = personId;
      this.$emit("showContactInfo", personId);
    }
  }
};
</script>

<style scoped>
.people-list {
  width: 30%;
}

ul {
  list-style-type: none;
}

li {
  padding: 20px;
  text-align: center;
  border: 1px solid #cacaca;
}

li + li {
  border-top: 0;
}

li span {
  color: dodgerblue;
  font-family: "Courier New", Courier, monospace;
  cursor: pointer;
  text-decoration: none;
}

.is-selected {
  font-weight: 600;
}
</style>
