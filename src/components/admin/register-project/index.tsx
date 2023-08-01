'use client'
import { FormRegisterProject } from './form'
import { ModalProgress } from './modal-progress'
import { useRegisterProject } from './use-register-project'

export default function RegisterProject() {
  const { onSubmit, handleChange, isOpenModal, setIsOpenModal, progressProcess, state, resetForm } =
    useRegisterProject()

  return (
    <div className="flex w-full flex-col gap-2">
      <FormRegisterProject onSubmit={onSubmit} onChangeImage={handleChange} restForm={resetForm} />
      <ModalProgress
        isOpen={isOpenModal}
        onHide={setIsOpenModal}
        progress={progressProcess}
        state={state}
      />
    </div>
  )
}
