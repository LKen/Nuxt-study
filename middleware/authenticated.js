/* eslint-disable */
export default function({ store, redirect, route }) {
  if (route.fullPath === '/') return
  if (route.fullPath.indexOf('/robot') > -1) return
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
