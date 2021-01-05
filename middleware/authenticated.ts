/* export default function ({ store, redirect, route }) {
  if (route.fullPath === '/') return
  if (route.fullPath.indexOf('/robot') > -1) return
  if (!store.state.authenticated) {
    return redirect('/login')
  }
} */

// import { Context } from '@nuxt/types/app'

// export default function ({ store, redirect, route }: Context): Promise<void> | void {
//   if (route.fullPath === '/') return
//   if (route.fullPath.indexOf('/robot') > -1) return
//   if (!store.state.authenticated) {
//     return redirect('/login')
//   }
// }

import { Middleware } from '@nuxt/types'

const myMiddleware: Middleware = ({ store, redirect, route }) => {
  if (route.fullPath === '/') return
  if (route.fullPath.indexOf('/robot') > -1) return
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}

export default myMiddleware
