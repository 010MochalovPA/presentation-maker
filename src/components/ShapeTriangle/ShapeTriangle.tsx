import styles from './ShapeTriangle.css'
import { Position, ShapeObjectType, Size } from '../../types'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import getTriangleShapeStyle from '../../common/getTriangleShapeStyle'
import { useEffect, useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import getDNDFunctions from '../../common/getDNDFunctions'
import SelectedItem from '../SelectedItem/SelectedItem'
import { useAppActions } from '../../redux/hooks'
import { ContextMenuType, useContextMenu } from '../../hooks/useContextMenu'
import { ContextMenu } from '../ContextMenu/ContextMenu'

type ShapeProps = ShapeObjectType & {
  isSelected: boolean
  isPreview: boolean
}

const ShapeTriangle = ({ id, position, size, angle, borderColor, backgroundColor, isSelected, isPreview }: ShapeProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const {createChangeSelectedObjectIdAction } = useAppActions()
  const [objectPosition, setObjectPosition] = useState<Position>(position)
  const [objectSize, setObjectSize] = useState<Size>(size)
  
  useEffect(()=> {
    setObjectPosition(position)
    setObjectSize(size)
  },[position, size])

  const [moveFn] = getDNDFunctions(setObjectPosition, setObjectSize)
  useDragAndDrop(id, ref, ref, objectPosition, objectSize, moveFn)
  const {contextMenuPosition, isShowContextMenu, items} = useContextMenu(id, ref, ContextMenuType.OBJECT)
  const objectStyle = getShapeObjectStyle(objectPosition, objectSize, angle)
  const triangleStyle = getTriangleShapeStyle(objectSize, borderColor, backgroundColor)

  return (
    <>
      <div
        ref={ref}
        className={styles.shape}
        style={objectStyle}
        onMouseDown={(e) => {
          createChangeSelectedObjectIdAction(id)
          e.stopPropagation()
        }}
      >
        <svg width={objectSize.width} height={objectSize.height}>
          <polygon {...triangleStyle} />
        </svg>
      </div>
      {!isPreview && isSelected && <SelectedItem id={id} targetRef={ref} position={objectPosition} size={objectSize} setPosition={setObjectPosition} setSize={setObjectSize} />}
      {!isPreview && isShowContextMenu && <ContextMenu position={contextMenuPosition} items={items} />}
    </>
  )
}

export default ShapeTriangle