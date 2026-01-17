import { ReactNode } from 'react'
import { AppProvider } from '@/contexts/app'
import { FirebaseProvider } from '@/contexts/firebase'
import { firebaseConfig } from '@/config/firebase-config'
import { LoadingProvider } from './loading'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <FirebaseProvider config={firebaseConfig}>
      <AppProvider>{children}</AppProvider>
    </FirebaseProvider>
  )
}
