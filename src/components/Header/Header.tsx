import { useRef, useState } from 'react'
import { useEditorContext } from '../../context/editorContext'
import FileIcon24dp from '../../icons/FileIcon24dp'
import LoadIcon24dp from '../../icons/LoadIcon24dp'
import SaveIcon24dp from '../../icons/SaveIcon24dp'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import PresentationTitle from '../PresentationTitle/PresentationTitle'
import styles from './Header.css'
import { Editor } from '../../types'

const Header = () => {
  const anchorRef = useRef<HTMLAnchorElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const editor = useEditorContext()
  const [title, setTitle] = useState(editor.getTitle())

  const text = JSON.stringify(editor.getEditor())
  const file = new Blob([text], { type: 'text/plain' })

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
      const parsedData = await readJsonFile(event.target.files[0])
      editor.setEditor(parsedData as Editor)
    }
  }

  return (
    <div className={styles.header}>
      <Logo />
      <PresentationTitle title={title} setTitle={setTitle} />
      <div className={styles.spacer}></div>
      <input ref={inputRef} className={styles.hidden} type="file" accept=".json,application/json" onChange={onChange} />
      <a ref={anchorRef} className={styles.hidden} download={`${title}.json`} href={URL.createObjectURL(file)}>
        Save
      </a>
      <Button icon={SaveIcon24dp} text={'Сохранить'} onClick={() => anchorRef.current?.click()} />
      <Button icon={LoadIcon24dp} text={'Загрузить'} onClick={() => inputRef.current?.click()} />
      <Button icon={FileIcon24dp} text={'Экспорт в PDF'} onClick={() => console.log('file')} />
    </div>
  )
}

export default Header
