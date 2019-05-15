const resolvers = {
  Student: {
    courses: (student, _, { userModel }) =>
      userModel.getCoursesByIds(student.courses)
  },
  Course: {
    teachers: (Course, _, { userModel }) =>
      userModel.getTeachersByIds(Course.teachers)
  },
  Query: {
    getStudent: (_, { id }, { userModel }) =>
      userModel.getStudentsByIds([id])[0],
    getTeacher: (_, { id }, { userModel }) =>
      userModel.getTeachersByIds([id])[0],
    getCourse: (_, { id }, { userModel }) => userModel.getCoursesByIds([id])[0]
  },
  Mutation: {
    setStudent: (_, { name, classId, coursesIds }, { userModel }) =>
      userModel.setStudent(name, classId, coursesIds)
  }
}

export default resolvers
