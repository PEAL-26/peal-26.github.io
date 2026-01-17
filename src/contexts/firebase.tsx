'use client'
import { firebaseConfig } from '@/config/firebase-config'
import * as firebaseAuth from 'firebase/auth'
import * as firebaseApp from 'firebase/app'
import * as firebaseAnalytics from 'firebase/analytics'
import * as firebaseFirestore from 'firebase/firestore'
import * as firebaseAppCheck from 'firebase/app-check'
import * as firebaseStorage from 'firebase/storage'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { isEmpty } from '@/helpers/object'

export type AnalyticsType = () => Promise<firebaseAnalytics.Analytics>
export type DbType = () => Promise<firebaseFirestore.Firestore>
export type StorageType = () => Promise<firebaseStorage.FirebaseStorage>
export type AppCheckType = () => Promise<firebaseAppCheck.AppCheck>

export interface FirebaseContextProps {
  isLoading: boolean
  app: firebaseApp.FirebaseApp
  auth: firebaseAuth.Auth
  analytics: firebaseAnalytics.Analytics
  db: firebaseFirestore.Firestore
  storage: firebaseStorage.FirebaseStorage
  appCheck: firebaseAppCheck.AppCheck
  getAuth(): Promise<firebaseAuth.Auth>
  getAnalytics: AnalyticsType
  getDb: DbType
  getStorage(): Promise<firebaseStorage.FirebaseStorage>
  getAppCheck(): Promise<firebaseAppCheck.AppCheck>
}

interface FirebaseProviderProps {
  children: ReactNode
  config: typeof firebaseConfig
}

const FirebaseContext = createContext<FirebaseContextProps>({} as FirebaseContextProps)

export function FirebaseProvider(props: FirebaseProviderProps) {
  const { children, config } = props

  const [app, setApp] = useState<firebaseApp.FirebaseApp>({} as firebaseApp.FirebaseApp)
  const [auth, setAuth] = useState<firebaseAuth.Auth>({} as firebaseAuth.Auth)
  const [analytics, setAnalytics] = useState<firebaseAnalytics.Analytics>(
    {} as firebaseAnalytics.Analytics,
  )
  const [db, setDb] = useState<firebaseFirestore.Firestore>({} as firebaseFirestore.Firestore)
  const [storage, setStorage] = useState<firebaseStorage.FirebaseStorage>(
    {} as firebaseStorage.FirebaseStorage,
  )
  const [appCheck, setAppCheck] = useState<firebaseAppCheck.AppCheck>(
    {} as firebaseAppCheck.AppCheck,
  )
  const [isLoading, setIsLoading] = useState(false)

  const verifyApp = async () => {
    if (!isEmpty(app)) return app

    const apps = firebaseApp.getApps()
    let _app = null
    if (apps.length) {
      _app = apps[0]
    } else {
      _app = firebaseApp.initializeApp(config)
    }

    setApp(_app)
    return _app
  }

  const getAuth = async () => {
    if (!isEmpty(auth)) return auth

    setIsLoading(true)
    const _auth = firebaseAuth.getAuth(await verifyApp())
    setAuth(_auth)
    setIsLoading(false)

    return _auth
  }

  const getAnalytics = async () => {
    if (!isEmpty(analytics)) return analytics

    setIsLoading(true)
    const _analytics = firebaseAnalytics.getAnalytics(await verifyApp())
    setAnalytics(_analytics)
    setIsLoading(false)

    return _analytics
  }

  const getDb = async () => {
    if (!isEmpty(db)) return db

    setIsLoading(true)
    const _db = firebaseFirestore.getFirestore(await verifyApp())
    setDb(_db)
    setIsLoading(false)

    return _db
  }

  const getStorage = async () => {
    if (!isEmpty(storage)) return storage

    setIsLoading(true)
    const _storage = firebaseStorage.getStorage(await verifyApp())
    setStorage(_storage)
    setIsLoading(false)

    return _storage
  }

  const getAppCheck = async () => {
    if (!isEmpty(appCheck)) return appCheck

    setIsLoading(true)
    const _appCheck = firebaseAppCheck.initializeAppCheck(await verifyApp(), {
      provider: new firebaseAppCheck.ReCaptchaEnterpriseProvider(config.keySiteReCAPTCHAEnterprise),
      isTokenAutoRefreshEnabled: true,
    })
    setAppCheck(_appCheck)
    setIsLoading(false)

    return _appCheck
  }

  return (
    <FirebaseContext.Provider
      value={{
        isLoading,
        app,
        auth,
        analytics,
        db,
        storage,
        appCheck,
        getAuth,
        getAnalytics,
        getDb,
        getStorage,
        getAppCheck,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

export const useFirebaseContext = () => useContext(FirebaseContext)
