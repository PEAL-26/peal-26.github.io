import { useRef, useState, useEffect } from 'react'

export default function useChangeSectionTab() {
  const [tabActual, setTabActual] = useState(0)

  return { tabActual, setTabActual }
}
