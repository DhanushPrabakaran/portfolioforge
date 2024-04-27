import { NextResponse } from 'next/server'
import { createUser,getUserByEmail, updateUser, deleteUser, getUserByUserName } from '@/app/api/profile/code';
type Params = {
    username: string
  }
  
   
  export async function GET(request: Request,context: { params: Params }) {
    
    let res=context.params.username;
    const response =
    await getUserByEmail(res);
  
  console.log("hai")
    return NextResponse.json(
      {data:response}
    )
  }