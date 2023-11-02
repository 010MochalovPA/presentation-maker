import { Color, ShapeType, SlideObjectBase, SlideObjectType } from '../../types'

type objectShapeProps = {
  props: SlideObjectBase & {
    type: SlideObjectType.SHAPE,
    shapeType: ShapeType
    backgroundColor: Color
    borderColor: Color
  }
}

const ObjectShape = (props: objectShapeProps) => {
  return <div></div>
}

export default ObjectShape