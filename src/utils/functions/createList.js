const createNode = (data, prev, next) => ({
  data,
  prev,
  next,
})

const createList = () => {
  let head = null
  let tail = null
  let current = null

  const insert = (data) => {
    const newNode = createNode(data, tail, null)

    if (!head) {
      head = newNode
    }
    if (tail) {
      tail.next = newNode
    }
    tail = newNode
    current = newNode
  }

  const undoEdit = () => {
    const preData = current.prev

    if (preData) {
      current = preData

      return preData.data
    } else {
      return null
    }
  }

  const redoEdit = () => {
    const nextData = current.next

    if (nextData) {
      current = nextData

      return nextData.data
    } else {
      return null
    }
  }

  return {
    insert,
    undoEdit,
    redoEdit,
  }
}

const storeData = createList()

export default storeData
