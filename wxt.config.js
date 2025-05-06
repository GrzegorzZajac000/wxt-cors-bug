import { defineConfig } from 'wxt';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  vite: () => ({
    css: {
      modules: {
        localsConvention: "camelCase"
      }
    },
    plugins: [svgr()]
  }),
  manifest: ({ browser, manifestVersion, mode, command }) => {
    return {
      manifest_version: manifestVersion,
      name: 'WXT CORS Bug',
      short_name: 'wxt-cors-bug',
      author: 'Grzegorz Zając',
      description: 'Wxt Cors Bug',
      default_locale: 'en',
      minimum_chrome_version: '130',
      incognito: 'spanning',
      icons: {
        16: 'icons/icon16.png',
        32: 'icons/icon32.png',
        48: 'icons/icon48.png',
        96: 'icons/icon96.png',
        128: 'icons/icon128.png'
      },
      action: {
        default_icon: {
          16: 'icons/icon16.png',
          32: 'icons/icon32.png',
          48: 'icons/icon48.png',
          96: 'icons/icon96.png',
          128: 'icons/icon128.png'
        },
        default_title: 'WXT CORS Bug'
      },
      content_security_policy: {
        "extension_pages": "script-src 'self'; object-src 'self'"
      },
      permissions: [
        "activeTab",
        "tabs",
        "storage",
        "notifications",
        "contextMenus",
        "clipboardWrite",
        "webNavigation",
        "alarms",
        "idle",
        "privacy",
        "scripting",
        "webRequest"
      ],
      host_permissions: [
        "*://*/*"
      ],
      web_accessible_resources: [
        {
          "resources": ["/fonts/*"],
          "matches": ["https://*/*", "http://*/*"]
        }
      ]
    }
  }
});
