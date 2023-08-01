// import admin, { ServiceAccount, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase/auth'
import { initializeApp, getApps } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'
import { getStorage } from 'firebase/storage'

import { firebaseConfig } from '@/config/firebase-config'
// import serviceAccount from '@/credentials/firebase-service-account-key.json'

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

// TODO Implementar posterior
export function getAdminApp() {
  // console.log(serviceAccount)
  // const adminApps = admin.getApps()

  // if (adminApps.length) return adminApps[0]

  // return admin.initializeApp({
  //   credential: cert(serviceAccount as ServiceAccount),
  //   storageBucket: firebaseConfig.storageBucket,
  // })
}
