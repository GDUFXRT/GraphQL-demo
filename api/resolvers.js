// root 提供所有 API 入口端点相应的解析器函数
class Message {
  constructor(id, { content, author }) {
    this.id = id
    this.content = content
    this.author = author
  }
}

const fakeDatabase = {}

const root = {
  getMessage: function({ id }) {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id)
    }
    return new Message(id, fakeDatabase[id])
  },
  createMessage: function({ input }) {
    // Create a random id for our "database".
    var id = Math.random()
      .toString(36)
      .split('.')[1]

    fakeDatabase[id] = input
    return new Message(id, input)
  },
  updateMessage: function({ id, input }) {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id)
    }
    // This replaces all old data, but some apps might want partial update.
    fakeDatabase[id] = input
    return new Message(id, input)
  }
}

export default root
