<template>
  <div class="person">
    <div class="info-wrapper">
      <div class="profile-pic">
        <img src="../assets/profilepic.png" alt="name">
      </div>
      <div class="person-info">
        <h2>{{person.firstName}} {{person.surname}}</h2>
        <div class="connection-info">
          <h4>Direct Friends: </h4>
          <span>{{person.directFriends}}</span>
        </div>
        <div class="connection-info">
          <h4>Indirect Contacts: </h4>
          <span>{{person.indirectContacts}}</span>
        </div>
        <div class="connection-info">
          <h4>Suggestions: </h4>
          <span>{{person.friendSuggestions}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  data() {
    return {
      person: null
    };
  },

  methods: {
    getFullname(friend) {
      return friend.firstName + " " + friend.surname;
    }
  },

  created() {
    let id = this.$route.params.id;
    this.person = { ...store.network.findPersonById(id) };
    this.person.directFriends = store.network
      .getPersonsDirectFriends(id)
      .map(this.getFullname)
      .join(", ");
    this.person.indirectContacts = store.network
      .getPersonsIndirectContacts(id)
      .map(this.getFullname)
      .join(", ");
    this.person.friendSuggestions = store.network
      .getFriendSuggestions(id)
      .map(this.getFullname)
      .join(", ");
  }
};
</script>

<style scoped>
.person {
  width: 70%;
  margin: auto;
}

.info-wrapper {
  display: flex;
  border: 1px solid #cacaca;
  height: 300px;
}

.profile-pic {
  flex: 1 1 10%;
  align-self: center;
  margin: 0 20px;
}

.person-info {
  flex: 1 1 90%;
  padding: 20px auto;
}

.person-info h2 {
  text-align: center;
}
</style>
