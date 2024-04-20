import { NextResponse } from 'next/server'
import { createUser, getUserById, updateUser, deleteUser } from '@/app/api/profile/code';

// model User {
  //   id         String       @id @default(auto()) @map("_id") @db.ObjectId
  //   email      String       @unique
  //   name       String?
  //   Dname      String?
  //   role       String
  //   image      String
  //   website    String
  //   about      String
  //   projects   Project[]
  //   experience Experience[]
  // }
 
export async function GET(request: Request) {
  const response =
  await getUserById("6621e579a0289372ecf36ad3");
//    await createUser({
//     email: 'example@example.com', name: 'John Doe', role: 'Developer',
//     image: '',
//     Dname: null,
//     website: '',
//     about: ''
// });
console.log("hai")
  return NextResponse.json(
    {data:response}
  )
}


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