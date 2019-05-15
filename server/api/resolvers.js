import { students, teachers, courses } from '../data'

const resolvers = {
  // Query: {
  //   getStudent: function(parent, { id }) {
  //     console.log('parent: ', parent)
  //     return students.find(student => student.id === id)
  //   },
  //   getTeacher: function(parent, { id }) {
  //     console.log('parent: ', parent)
  //     return teachers.find(teacher => teacher.id === id)
  //   },
  //   getCourse: function(parent, { id }) {
  //     console.log('parent: ', parent)
  //     return courses.find(course => course.id === id)
  //   }
  // },
  Query: {
    user(root, { name }, { userModel }) {
      return userModel.getUserByName(name)
    },
    allUsers(root, args, { userModel }) {
      return userModel.getAllUsers()
    }
  },
  User: {
    followingUsers(user, args, { userModel }) {
      return userModel.getUsersByIds(user.followingUserIds)
    },
    bestFriend(user, args, { userModel }) {
      return userModel.getUserById(user.bestFriendId)
    }
  }
}

export default resolvers
