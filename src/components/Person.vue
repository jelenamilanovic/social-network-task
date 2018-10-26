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
          <h4>Undirect Contacts: </h4>
        </div>
        <div class="connection-info">
          <h4>Suggestions: </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {store} from '../store'

  export default {
    data () {
      return {
        person: null
      }
    },

    created () {
      let id = this.$route.params.id
      console.log(store.network)
      this.person = {...store.network.findPersonById(id)}
      this.person.directFriends = store.network.getPersonsDirectFriends(id)
                                    .map(friend => {
                                      return friend.firstName + ' ' + friend.surname 
                                    })
                                    .join(', ')
    }
  }
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
