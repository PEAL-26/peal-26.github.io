'use client'
import React, { useCallback, useState, forwardRef, HTMLAttributes, useEffect } from 'react'
import { useDropzone, Accept } from 'react-dropzone'
import { FileUploadPreview } from './file-upload-preview'
import { FileUploadEmpty } from './file-upload-empty'

interface FileUploadProps {
  onChange?(files: File[]): void
}

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>((props, ref) => {
  const { onChange } = props
  const [files, setFiles] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: any, fileRejections: any) => {
    setFiles([])

    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)

      setFiles((prevFiles) => {
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
    const updatedFiles = files.slice()
    updatedFiles.splice(indexToRemove, 1)
    setFiles(updatedFiles)
  }

  const CINCO_MB = 5 * 1024 * 1024
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxFiles: 1,
    maxSize: CINCO_MB,
  })

  const fileAdded = files.length > 0

  useEffect(() => {
    onChange && onChange(files)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {fileAdded && <FileUploadPreview files={files} onRemove={onRemove} />}
      {!fileAdded && <FileUploadEmpty />}
    </div>
  )
})

FileUpload.displayName = 'FileUpload'
