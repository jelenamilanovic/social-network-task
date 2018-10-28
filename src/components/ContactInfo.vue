<template>
  <div class="contact">
    <div class="info-wrapper">
      <div class="profile-pic">
        <img src="../assets/profilepic.png" alt="name">
      </div>
      <div class="contact-info">
        <h2>{{contact.firstName}} {{contact.surname}}</h2>
        <div class="connection-info">
          <h4>Direct Friends: </h4>
          <span>{{contact.directFriends}}</span>
        </div>
        <div class="connection-info">
          <h4>Indirect Contacts: </h4>
          <span>{{contact.indirectContacts}}</span>
        </div>
        <div class="connection-info">
          <h4>Suggestions: </h4>
          <span>{{contact.friendSuggestions || 'No suggestions.'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contact"]
};
</script>

<style scoped>
.contact {
  width: 70%;
  position: fixed;
  top: 20px;
  left: calc(30% + 40px);
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

.contact-info {
  flex: 1 1 90%;
  padding: 20px auto;
}

.contact-info h2 {
  text-align: center;
}

.connection-info {
  margin: 10px 0;
}

.connection-info h4 {
  margin-bottom: 5px;
}
</style>
