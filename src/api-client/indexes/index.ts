export default {
  get() {
    return fetch('/api/list-index').then((resp) => resp.json())
  }
}
