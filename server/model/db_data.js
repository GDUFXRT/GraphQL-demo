// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.

export const students = [
  {
    id: '1',
    name: 'peter',
    class: '1',
    courses: ['1', '2', '3']
  },
  {
    id: '2',
    name: 'parker',
    class: '2',
    courses: ['1', '2', '3']
  }
]

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
    name: 'Civil War',
    teachers: ['1']
  },
  {
    id: '2',
    name: 'Homecoming',
    teachers: ['2']
  },
  {
    id: '2',
    name: 'Endgame',
    teachers: ['2']
  }
]
