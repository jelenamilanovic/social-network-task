import { Person } from './Person.js'

export class Network {
  people = {} // list of all the people on network
  connections = {} // list of all of the connections - personId: [ids of person's friends]

  constructor() {

  }

  // private method
  addPerson(person) {
    console.log('adding person invoked', this)
    this.people[person.id] = person
  }

  // public method
  initState = people => {
    people.forEach(person => {
      this.people[person.id] = new Person(person)
      this.connections[person.id] = person.friends
    })
  }

  // it doesn't have much sense here as the people property has no private accessibility
  getPeople() {
    return this.people
  }

  getConnections() {
    return this.connections
  }

  findPersonById = id => {
    return this.people[id]
  }

  getPersonsDirectFriends = personId => {
    let directFriendsIds = this.connections[personId]
    let directFriends = []
    directFriendsIds.forEach(id => {
      directFriends.push(this.findPersonById(id))
    })
    return directFriends
  }

  // one degree of separation
  getPersonsIndirectContacts = personId => {
    let indirectContacts = []
    let directFriendsIds = this.connections[personId]
    let friendsOfFriends = new Set()

    // find all friends of friends
    directFriendsIds.forEach(friendId => {
      let friendsOfFriendIds = this.connections[friendId]
      friendsOfFriendIds.forEach(id => {
        if (id != personId)
          friendsOfFriends.add(id)
      })
    })

    // filter contacts that are not friends of the selected person
    friendsOfFriends = Array.from(friendsOfFriends)
    friendsOfFriends.forEach(contactId => {
      if (directFriendsIds.indexOf(contactId) < 0) {
        indirectContacts.push(this.findPersonById(contactId))
      }
    })

    return indirectContacts
  }

  getFriendSuggestions = personId => {
    let suggestions = []
    let indirectContacts = {}
    let directFriendsIds = this.connections[personId]

    // get through the list of indirect contacts and count the number of connections
    directFriendsIds.forEach(friendId => {
      let friendsOfFriendIds = this.connections[friendId]
      friendsOfFriendIds.forEach(id => {
        if (id == personId) return
        if (indirectContacts[id] === undefined) {
          indirectContacts[id] = 1
        } else {
          indirectContacts[id] = indirectContacts[id] + 1
        }
      })
    })

    // filter contacts with at least 2 connections
    for (let contactId in indirectContacts) {
      if (indirectContacts[contactId] >= 2)
        suggestions.push(this.findPersonById(contactId))
    }

    return suggestions
  }
}
