import React from 'react'
import { auth } from "@/auth"
const page = async() => {
  const session = await auth()
  return (
    <div>
      hai home
      <pre className="py-6 px-4 whitespace-pre-wrap break-all">
          {JSON.stringify(session, null, 2)}
        </pre>
    </div>
  )
}

export default page
