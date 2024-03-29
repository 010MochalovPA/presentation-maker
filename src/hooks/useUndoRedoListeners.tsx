import { useEffect } from 'react'
import { useAppActions } from '../redux/hooks'

function useUndoRedoListeners() {
  const { createUndoAction, createRedoAction } = useAppActions()

  useEffect(() => {
    const handleKeydownEvent = (event: KeyboardEvent) => {
      if (event.ctrlKey) {
        if (event.code === 'KeyZ') {
          createUndoAction()
        }
        if (event.code === 'KeyY') {
          createRedoAction()
        }
      }

      if (event.ctrlKey && event.shiftKey) {
        if (event.code === 'KeyZ') {
          createUndoAction()
        }
      }
    }

    window.addEventListener('keydown', handleKeydownEvent)

    return () => window.removeEventListener('keydown', handleKeydownEvent)
  })
}

export { useUndoRedoListeners }
