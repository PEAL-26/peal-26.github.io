'use client'
import React, {
  useCallback,
  useState,
  forwardRef,
  HTMLAttributes,
  useEffect,
  HTMLProps,
} from 'react'
import { useDropzone, Accept } from 'react-dropzone'
import { FileUploadPreview } from './file-upload-preview'
import { FileUploadEmpty } from './file-upload-empty'

interface FileUploadProps extends HTMLProps<HTMLInputElement> {
  onChangeFile?(listFiles: File[]): void
  files?: File[]
}

const acceptedFileTypes = {
  'image/png': [],
  'image/jpeg': [],
}

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>((props, ref) => {
  const { onChangeFile, files } = props
  const [listFiles, setListFiles] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: any, fileRejections: any) => {
    setListFiles([])

    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)

      setListFiles((prevFiles) => {
        return [
          ...prevFiles,
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ]
      })
    })
  }, [])

  const onRemove = (indexToRemove: number = 0) => {
    const updatedFiles = listFiles.slice()
    updatedFiles.splice(indexToRemove, 1)
    setListFiles(updatedFiles)
  }

  const CINCO_MB = 5 * 1024 * 1024
  const { getRootProps, getInputProps } = useDropzone({
    accept: acceptedFileTypes,
    onDrop,
    multiple: false,
    maxFiles: 1,
    maxSize: CINCO_MB,
  })

  const fileAdded = listFiles.length > 0

  useEffect(() => {
    onChangeFile && onChangeFile(listFiles)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listFiles])

  useEffect(() => {
    files && setListFiles(files)
  }, [files])

  return (
    <div
      {...getRootProps()}
      data-added-file={fileAdded}
      className={`group relative flex flex-col
          items-center justify-center rounded-md border-2 border-dashed
        border-gray-300 data-[added-file=true]:h-[25rem] `}
    >
      <input {...getInputProps()} ref={ref} />
      {fileAdded && <FileUploadPreview files={listFiles} onRemove={onRemove} />}
      {!fileAdded && <FileUploadEmpty />}
    </div>
  )
})

FileUpload.displayName = 'FileUpload'
