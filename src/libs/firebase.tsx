import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'

import { firebaseConfig } from '@/config/firebase-config'

// Initialize Firebase
export const app = () => initializeApp(firebaseConfig)

export const analytics = () => getAnalytics(app())
export const auth = () => getAuth(app())

export const db = () => {
  console.log(firebaseConfig)
  return getFirestore(app())
}

export const appCheck = () =>
  initializeAppCheck(app(), {
    provider: new ReCaptchaEnterpriseProvider(firebaseConfig.keySiteReCAPTCHAEnterprise),
    isTokenAutoRefreshEnabled: true,
  })
