import Sample from './sample'

let store = null

// RootStore combines multiple stores and can share references accross stores
class RootStore {
  constructor(isServer) {
    this.sampleStore = new Sample()
  }
}

export function initStore(isServer) {
  if (isServer) {
    return new RootStore()
  } else {
    if (store === null) {
      store = new RootStore()
    }
    return store
  }
}
