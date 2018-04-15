export function makeLocalStorageHelper (key) {
  let makeGet = _key => () => localStorage.getItem(_key)
  let makeSet = _key => data => localStorage.setItem(_key, data)
  let makeRemove = _key => () => localStorage.removeItem(_key)

  return {
    get: makeGet(key),
    set: makeSet(key),
    remove: makeRemove(key)
  }
}

export const storedToken = makeLocalStorageHelper('__token__')
