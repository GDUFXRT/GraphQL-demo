import { students, teachers, courses } from './data'

const userModal = (() => {
  const users = [
    { id: 1, name: 'A', bestFriendId: 2, followingUserIds: [2, 3, 4] },
    { id: 2, name: 'B', bestFriendId: 1, followingUserIds: [1, 3, 4, 5] },
    { id: 3, name: 'C', bestFriendId: 4, followingUserIds: [1, 2, 5] },
    { id: 4, name: 'D', bestFriendId: 5, followingUserIds: [1, 2, 5] },
    { id: 5, name: 'E', bestFriendId: 4, followingUserIds: [2, 3, 4] }
  ]

  const genPromise = (value, text) =>
    new Promise(resolve => {
      setTimeout(() => {
        console.log(text)
        return resolve(value)
      }, 100)
    })

  return {
    getUserById: id =>
      genPromise(users.find(user => user.id === id), `getUserById: ${id}`),
    getUserByName: name =>
      genPromise(
        users.find(user => user.name === name),
        `getUserByName: ${name}`
      ),
    getUsersByIds: ids =>
      genPromise(
        users.filter(user => ids.includes(user.id)),
        `getUsersByIds: ${ids}`
      ),
    getAllUsers: () => genPromise(users, 'getAllUsers')
  }
})()

export default userModal
