import getSlideBackgroundString from '../../common/getSlideBackgroundString'
import { useEditorContext } from '../../context/editorContext'
import { SlideObject, SlideObjectType } from '../../types'
import PictureObject from '../PictureObject/PictureObject'
import {ShapeObject} from '../ShapeObject/ShapeObject'
import TextObject from '../TextObject/TextObject'
import styles from './SlideView.css'

function getSlideObject(slideObject: SlideObject) {
  const editor = useEditorContext()
  const isSelected = editor.getSelectedObjects().includes(slideObject.id)
  switch (slideObject.type) {
    case SlideObjectType.TEXT:
      return <TextObject key={slideObject.id} {...slideObject} isSelected={isSelected} onClick={() => editor.setSelectedObject(slideObject.id)}/>
    case SlideObjectType.PICTURE:
      return <PictureObject key={slideObject.id} {...slideObject} isSelected={isSelected} onClick={() => editor.setSelectedObject(slideObject.id)}/>
    case SlideObjectType.SHAPE:
      return <ShapeObject key={slideObject.id} {...slideObject} isSelected={isSelected} onClick={() => editor.setSelectedObject(slideObject.id)}/>
  }
}

type SlideViewProps = {
  slideId: string
  scale: number
}

const SlideView = ({ slideId, scale }: SlideViewProps) => {
  const editor = useEditorContext()
  const slide = editor.getSlideById(slideId)
  const background = getSlideBackgroundString(slide)

  return (
    <div className={styles.slide} style={{ background, transform: `scale(${scale})` }}>
      {slide.objects.map((slideObject) => getSlideObject(slideObject))}
    </div>
  )
}

export default SlideView
