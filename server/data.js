// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.

export const teachers = [
  {
    id: '1',
    name: 'Tony'
  },
  {
    id: '2',
    name: 'Stark'
  }
]

export const courses = [
  {
    id: '1',
    name: 'Homecoming',
    teachers: [teachers[0]]
  },
  {
    id: '2',
    name: 'Endgame',
    teachers: [teachers[1]]
  }
]

export const students = [
  {
    id: '1',
    name: 'peter',
    class: '1',
    courses: [courses[0]]
  },
  {
    id: '2',
    name: 'parker',
    class: '2',
    courses: [courses[1]]
  }
]
