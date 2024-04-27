import { NextResponse } from "next/server";
import {
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
} from "@/app/api/project/code";

type Params = {
  id: string;
};

export async function GET(request: Request, context: { params: Params }) {
  let res = context.params.id;
  console.log("hai post", res);
  const response = await getProjectById(res);
  console.log("hai");
  return NextResponse.json({ data: response });

}

export async function POST(request: Request) {
  console.log(request);
  let res = await request.json();
  console.log("hai post", res);
  const respo = await createProject(res);
  console.log(respo);

  return new Response("Success!", {
    status: 200,
  });
}
export async function DELETE(request:Request,context:{params:Params}) {
    let res = context.params.id;
    console.log("hai post", res);
    return deleteProject(res);
}

