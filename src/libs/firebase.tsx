import { getAuth } from 'firebase/auth'
import { initializeApp, getApps } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'
import { getStorage } from 'firebase/storage'

import { firebaseConfig } from '@/config/firebase-config'

// Initialize Firebase
const verifyApp = () => {
  const app = getApps()
  if (app.length) {
    return app[0]
  }

  return initializeApp(firebaseConfig)
}

export const app = verifyApp()

export const analytics = () => getAnalytics(app)
export const auth = getAuth(app)
export const db = () => getFirestore(app)
export const storage = () => getStorage(app)
export const appCheck = () =>
  initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(firebaseConfig.keySiteReCAPTCHAEnterprise),
    isTokenAutoRefreshEnabled: true,
  })
