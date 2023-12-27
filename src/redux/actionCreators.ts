import { Color, FontStyles, Position, Size } from '../types'
import { EditorActions } from './actions'

function createChangeTitleAction(newTitle: string) {
  return {
    type: EditorActions.CHANGE_TITLE,
    payload: {
      newTitle,
    },
  }
}

function createChangeObjectPositionAction(objectId: string, position: Position) {
  return {
    type: EditorActions.CHANGE_OBJECT_POSITION,
    payload: {
      objectId,
      position,
    },
  }
}

function createChangeObjectSizeAction(objectId: string, size: Size) {
  return {
    type: EditorActions.CHANGE_OBJECT_SIZE,
    payload: {
      objectId,
      size,
    },
  }
}

function createChangeObjectBackgroundColorAction(objectId: string, backgroundColor: Color) {
  return {
    type: EditorActions.CHANGE_OBJECT_BACKGROUND_COLOR,
    payload: {
      objectId,
      backgroundColor,
    },
  }
}

function createChangeObjectBorderColorAction(objectId: string, borderColor: Color) {
  return {
    type: EditorActions.CHANGE_OBJECT_BORDER_COLOR,
    payload: {
      objectId,
      borderColor,
    },
  }
}

function createChangeTextFontStylesAction(objectId: string, fontStyles: FontStyles) {
  return {
    type: EditorActions.CHANGE_TEXT_FONT_STYLES,
    payload: {
      objectId,
      fontStyles,
    },
  }
}

function createChangeTextAction(objectId: string, text: string) {
  return {
    type: EditorActions.CHANGE_TEXT,
    payload: {
      objectId,
      text,
    },
  }
}

function createChangeImageDataAction(objectId: string, data: string) {
  return {
    type: EditorActions.CHANGE_IMAGE_DATA,
    payload: {
      objectId,
      data,
    },
  }
}

function createChangeCurrentSlideIdAction(slideId: string) {
  return {
    type: EditorActions.CHANGE_CURRENT_SLIDE_ID,
    payload: {
      slideId,
    },
  }
}

function createChangeSelectedObjectIdAction(objectId: string) {
  return {
    type: EditorActions.CHANGE_SELECTED_OBJECT_ID,
    payload: {
      objectId,
    },
  }
}

function createInsertImageAction(data: string) {
  return {
    type: EditorActions.INSERT_IMAGE,
    payload: {
      data,
    },
  }
}

function createInsertRectangleAction() {
  return {
    type: EditorActions.INSERT_RECTANGLE,
  }
}

function createInsertTriangleAction() {
  return {
    type: EditorActions.INSERT_TRIANGLE,
  }
}

function createInsertEllipseAction() {
  return {
    type: EditorActions.INSERT_ELLIPSE,
  }
}

function createInsertTextAction() {
  return {
    type: EditorActions.INSERT_TEXT,
  }
}

function createDeleteObjectAction(objectId: string) {
  return {
    type: EditorActions.DELETE_OBJECT,
    payload: {
      objectId,
    },
  }
}

function createAddSlideAction() {
  return {
    type: EditorActions.ADD_SLIDE,
  }
}

function createDeleteSlideAction() {
  return {
    type: EditorActions.DELETE_SLIDE,
  }
}

function createMoveDownSlideAction() {
  return {
    type: EditorActions.MOVE_DOWN_SLIDE,
  }
}

function createMoveUpSlideAction() {
  return {
    type: EditorActions.MOVE_UP_SLIDE,
  }
}

export {
  createChangeTitleAction,
  createChangeObjectPositionAction,
  createChangeCurrentSlideIdAction,
  createChangeSelectedObjectIdAction,
  createChangeObjectSizeAction,
  createChangeObjectBackgroundColorAction,
  createChangeObjectBorderColorAction,
  createChangeTextFontStylesAction,
  createChangeTextAction,
  createInsertImageAction,
  createChangeImageDataAction,
  createInsertRectangleAction,
  createInsertTriangleAction,
  createInsertEllipseAction,
  createInsertTextAction,
  createDeleteObjectAction,
  createAddSlideAction,
  createDeleteSlideAction,
  createMoveDownSlideAction,
  createMoveUpSlideAction,
}
