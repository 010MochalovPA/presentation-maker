import { ComponentType } from 'react'
import styles from './SlidesToolbar.css'
import PlusIcon20dp from '../../icons/PlusIcon20dp'
import ToolbarItem from '../ToolbarItem/ToolbarItem'
import { useAppActions } from '../../redux/hooks'

export type OptionItemType = {
  icon: ComponentType
  onClick: () => void
  tooltip: string
}

const SlidesToolbar = () => {

  const {createAddSlideAction, createDeleteSlideAction} = useAppActions()

  const options: OptionItemType[] = [
    {
      icon: PlusIcon20dp,
      onClick: () => {
        createAddSlideAction()
      },
      tooltip: 'Add slide',
    },
    {
      icon: PlusIcon20dp,
      onClick: () => {
        createDeleteSlideAction()
      },
      tooltip: 'Delete slide',
    }
  ]

  return (
    <div className={styles.toolbar}>
      {options.map((option, index) => (
        <ToolbarItem key={index} {...option} />
      ))}
    </div>
  )
}

export { SlidesToolbar }
