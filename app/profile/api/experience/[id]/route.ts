import { NextResponse } from "next/server";
import { createMessage } from "@/app/api/portfolio/actions";

export async function POST(request: Request,) {
    console.log(request);
  let res = await request.json();
  console.log("hai Mess", res);
  const response = await createMessage(res);
  return NextResponse.json({ data: response });
}
