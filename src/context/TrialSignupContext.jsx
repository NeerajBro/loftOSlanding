import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import TrialSignupModal from '../components/TrialSignupModal'

const TrialSignupContext = createContext(null)

export function TrialSignupProvider({ children }) {
  const [open, setOpen] = useState(false)

  const openTrialSignup = useCallback(() => setOpen(true), [])
  const closeTrialSignup = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({ open, openTrialSignup, closeTrialSignup }),
    [open, openTrialSignup, closeTrialSignup]
  )

  return (
    <TrialSignupContext.Provider value={value}>
      {children}
      <TrialSignupModal />
    </TrialSignupContext.Provider>
  )
}

export function useTrialSignup() {
  const ctx = useContext(TrialSignupContext)
  if (!ctx) {
    throw new Error('useTrialSignup must be used within TrialSignupProvider')
  }
  return ctx
}
