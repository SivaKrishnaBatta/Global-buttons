
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Global-buttons/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Global-buttons/buttons",
    "route": "/Global-buttons"
  },
  {
    "renderMode": 2,
    "route": "/Global-buttons/buttons"
  },
  {
    "renderMode": 2,
    "route": "/Global-buttons/testing"
  },
  {
    "renderMode": 2,
    "route": "/Global-buttons/button-sizes"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 561, hash: 'd7a3c44d5d012c0e933f4945e13aed6b95f058f10b1b915dcadb275ded4dc97c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 963, hash: '57a801b32ffed9dfe22a7fac6002856cf9bc9b1a416f250832ae037f03f26c6b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'button-sizes/index.html': {size: 1598, hash: 'd04a29c62e510365e9e5e5a3313c62a2b76ba5ba8bd931a105b71febcc56c17b', text: () => import('./assets-chunks/button-sizes_index_html.mjs').then(m => m.default)},
    'testing/index.html': {size: 1768, hash: 'bb3a99f7295f9878f2c93a1fc3d17f4c45949689e53a6cc3ecee69f7905735ef', text: () => import('./assets-chunks/testing_index_html.mjs').then(m => m.default)},
    'buttons/index.html': {size: 10126, hash: 'be2d42ba8e564643db3c5eb4d06d79a308a87819979e9836a56fd732092d780a', text: () => import('./assets-chunks/buttons_index_html.mjs').then(m => m.default)},
    'styles-W6RQJ4QH.css': {size: 3237, hash: 'd/gBTja9+5s', text: () => import('./assets-chunks/styles-W6RQJ4QH_css.mjs').then(m => m.default)}
  },
};
