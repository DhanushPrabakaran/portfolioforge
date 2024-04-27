import { NextResponse } from "next/server";
import { getUserByUserName } from "@/app/api/portfolio/code";
type Params = {
  username: string;
};

export async function GET(request: Request, context: { params: Params }) {
  let res = context.params.username;
  console.log("hai post", res);
  const response = await getUserByUserName(res);
  console.log("hai");
  return NextResponse.json({ data: response });
}
