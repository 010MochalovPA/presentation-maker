import { ComponentType, useRef } from 'react'
import styles from './ToolbarFile.css'
import FileNew from '../../icons/FileNew'
import FileOpen from '../../icons/FileOpen'
import FileSave from '../../icons/FileSave'
import ToolbarHeaderItem from '../ToolbarHeaderItem/ToolbarHeaderItem'
import { useAppSelector } from '../../redux/hooks'

export type OptionItemType = {
  icon: ComponentType
  onClick: () => void
  tooltip: string
}

const ToolbarFile = () => {
  const anchorRef = useRef<HTMLAnchorElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const title = useAppSelector((state) => state.editor.document.title)
  const editor = useAppSelector((state) => state.editor)
  const text = JSON.stringify(editor)
  const file = new Blob([text], { type: 'text/plain' })

  const options: OptionItemType[] = [
    {
      icon: FileNew,
      onClick: () => {
        console.log('New file')
      },
      tooltip: 'New',
    },
    {
      icon: FileOpen,
      onClick: () => anchorRef.current?.click(),
      tooltip: 'Open',
    },
    {
      icon: FileSave,
      onClick: () => inputRef.current?.click(),
      tooltip: 'Save',
    },
  ]

  const readJsonFile = (file: Blob) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader()

      fileReader.onload = (event) => {
        if (event.target) {
          resolve(JSON.parse(event.target.result as string))
        }
      }

      fileReader.onerror = (error) => reject(error)
      fileReader.readAsText(file)
    })

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const parsedData = await readJsonFile(event.target.files![0])
      console.log(parsedData)
    }
  }

  return (
    <div className={styles.toolbar}>
      <input ref={inputRef} className={styles.hidden} type="file" accept=".json,application/json" onChange={onChange} />
      <a ref={anchorRef} className={styles.hidden} download={`${title}.json`} href={URL.createObjectURL(file)}>
        Save
      </a>
      {options.map((option, index) => (
        <ToolbarHeaderItem key={index} {...option} />
      ))}
    </div>
  )
}

export { ToolbarFile }
