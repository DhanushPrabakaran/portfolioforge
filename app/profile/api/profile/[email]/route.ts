import { NextResponse } from 'next/server'
import { createUser,getUserByEmail, updateUser, deleteUser } from '@/app/api/profile/code';
type Params = {
    email: string
  }
  
   
  export async function GET(request: Request,context: { params: Params }) {
    
    let res=context.params.email;
    const response =
    await getUserByEmail(res);
  
  console.log("hai")
    return NextResponse.json(
      {data:response}
    )
  }