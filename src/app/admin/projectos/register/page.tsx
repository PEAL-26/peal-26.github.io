import RegisterProject from '@/components/admin/register-project'

// export const metadata = {
//   title: 'Novo post | Admin',
//   description: '',
// }

export default async function PostRegisterAdminPage() {
  return (
    <div className="my-7 ">
      <RegisterProject />
    </div>
  )
}
