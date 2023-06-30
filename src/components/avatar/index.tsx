import Image from 'next/image'
import { cookies } from 'next/headers'

import Logout from '../logout'
import { getUserCookies } from '@/actions/auth'

export default function Avatar() {
  // const user = getUserCookies()
  let user = null
  const cookieStore = cookies()
  const userCookie = cookieStore.get('user')
  if (userCookie) user = JSON.parse(userCookie.value)

  return (
    <div className="flex items-center space-x-4">
      <Image
        height={40}
        width={40}
        className="h-10 w-10 rounded-full"
        src={user?.avatar ?? ''}
        alt=""
      />
      <div className="font-medium">
        <div>{user.name}</div>
        <Logout />
      </div>
    </div>
  )
}
