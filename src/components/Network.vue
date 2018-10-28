<template>
  <div class="network">
    <people-list :people="people" @showContactInfo="showContactInfo"></people-list>
    <contact-info v-if="selectedContact" :contact="selectedContact"></contact-info>
  </div>
</template>

<script>
import PeopleList from "./PeopleList.vue";
import ContactInfo from "./ContactInfo.vue";
import { store } from "../store";
import { Network } from "../store";

export default {
  data() {
    return {
      people: [],
      selectedContact: null
    };
  },

  mounted() {
    store.fetchData().then(response => {
      this.people = store.network.getPeople();
    });
  },

  methods: {
    getFullname(contact) {
      return `${contact.firstName} ${contact.surname}`.trim();
    },

    getContactList(contactList) {
      return contactList.map(this.getFullname).join(", ");
    },

    showContactInfo(id) {
      this.selectedContact = { ...store.network.findPersonById(id) };
      this.selectedContact.directFriends = this.getContactList(
        store.network.getPersonsDirectFriends(id)
      );
      this.selectedContact.indirectContacts = this.getContactList(
        store.network.getPersonsIndirectContacts(id)
      );
      this.selectedContact.friendSuggestions = this.getContactList(
        store.network.getFriendSuggestions(id)
      );
    }
  },

  components: {
    PeopleList,
    ContactInfo
  }
};
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

<style>
.network:after {
  content: "";
  display: block;
  clear: both;
}

.people-list,
.contact-info {
  float: left;
  margin: 20px;
}
</style>

