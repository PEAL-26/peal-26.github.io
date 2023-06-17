export default function Unauthenticated() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="">
        <h1 className="mr-5 inline-block border-r pr-6 align-top text-2xl font-medium">401</h1>
        <div className="inline-block">
          <h2 className="text-sm leading-7">Usuário não autenticado.</h2>
        </div>
      </div>
    </div>
  )
}
