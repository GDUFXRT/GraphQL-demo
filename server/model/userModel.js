import { students, teachers, courses } from './db_data'

// Store data in memory
const MemoryData = {
  students,
  teachers,
  courses
}

const userModal = {
  getStudentsByIds: ids =>
    MemoryData.students.filter(student => ids.includes(student.id)),
  getTeachersByIds: ids =>
    MemoryData.teachers.filter(teacher => ids.includes(teacher.id)),
  getCoursesByIds: ids =>
    MemoryData.courses.filter(course => ids.includes(course.id)),

  setStudent: (name, classId, coursesIds) => {
    const newMember = {
      id: (MemoryData.students.length + 1).toString(),
      name,
      class: classId,
      courses: coursesIds
    }
    MemoryData.students.push(newMember)

    return newMember
  }
}

export default userModal
