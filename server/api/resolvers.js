import { students, teachers, courses } from '../data'

const resolvers = {
  Query: {
    getStudent: function(parent, { id }) {
      console.log('parent: ', parent)
      return students.find(student => student.id === id)
    },
    getTeacher: function(parent, { id }) {
      console.log('parent: ', parent)
      return teachers.find(teacher => teacher.id === id)
    },
    getCourse: function(parent, { id }) {
      console.log('parent: ', parent)
      return courses.find(course => course.id === id)
    }
  }
}

export default resolvers
