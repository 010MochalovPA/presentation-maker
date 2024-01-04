import { RefObject, useEffect } from 'react'
import { Position, Size } from '../types'

const useDragAndDrop = (
  ref: RefObject<HTMLDivElement>,
  position: Position,
  size: Size,
  fn: (
    e: MouseEvent,
    deltaX: number,
    deltaY: number,
    startPosLeft: number,
    startPosTop: number,
    posX: number,
    posY: number,
    startWidth: number,
    startHeight: number,
  ) => void,
) => {
  let posX: number, posY: number
  const delta: { x: number; y: number } = { x: 0, y: 0 }

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      fn(e, delta.x, delta.y, position.left, position.top, posX, posY, size.width, size.height)
    }

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    const onMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        posX = e.pageX
        posY = e.pageY
        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mouseup', onMouseUp)
      } else {
        e.preventDefault()
      }
    }

    ref.current!.addEventListener('mousedown', onMouseDown)

    return () => {
      ref.current && ref.current.removeEventListener('mousedown', onMouseDown)
    }
  })
}

export { useDragAndDrop }
