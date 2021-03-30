import { withDocus } from 'docus'

export default withDocus({
  // target: 'static',
  i18n: {
    locales: () => [{
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr-FR.js',
      name: 'Français'
    }, {
      code: 'en',
      file: 'en-US.js',
      iso: 'en-US',
      name: 'English'
    }],
    defaultLocale: 'en'
  },
})
