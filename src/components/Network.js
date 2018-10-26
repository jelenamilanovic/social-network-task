import {Person} from './Person.js'

export class Network {
  people = {}
  connections = {}

  constructor () {

  }

// private method
  addPerson (person) {
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
  getPeople () {
    return this.people
  }

  getConnections () {
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
}
