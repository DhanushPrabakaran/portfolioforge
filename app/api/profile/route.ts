import { NextResponse } from 'next/server'
import { createUser,getUserByEmail, updateUser, deleteUser } from '@/app/api/profile/code';
type Params = {
  email: string
}

 
export async function GET(request: Request,context: { params: Params }) {
  
  let res=context.params.email;
  console.log("hai post",res);
  const response =
  await getUserByEmail(res);

console.log("hai")
  return NextResponse.json(
    {data:response}
  )
}
// export async function PATHC(params:type) {
  
// }

export async function POST(request: Request) {
  let res=await request.json();
  console.log("hai post",res);
  const respo = await createUser(res);
  console.log(respo);
    // try {
      
    // } catch (error: any) {
    //   return new Response(`Webhook error: ${error.message}`, {
    //     status: 400,
    //   })
    // }
   
    return new Response('Success!', {
      status: 200,
      
    })
  }