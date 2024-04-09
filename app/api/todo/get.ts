import Todo from "@models/todo";
import { connectToDB } from "@utils/database";
import { getToken } from "next-auth/jwt";

export const GET = async (request: any) => {
  try {
    const token = await getToken({ req: request });
    const userId = token?.userId;

    await connectToDB();
    const todos = await Todo.find({ creator: userId }).populate("creator");

    return new Response(JSON.stringify(todos), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch todos", { status: 500 });
  }
};

export const POST = async (request: any) => {
  const token = await getToken({ req: request });
  const userId = token?.userId;

  const { todoTitle, todoDescription } = await request.json();

  try {
    await connectToDB();
    const newTodo = new Todo({ creator: userId, todoTitle, todoDescription });
    await newTodo.save();
    return new Response(JSON.stringify(newTodo), { status: 200 });
  } catch (error) {
    return new Response("Failed to create a new todo", { status: 500 });
  }
};

export const PUT = async (request: any) => {
  try {
    await connectToDB();
    const todoId = request.nextUrl.searchParams.get("todoId");
    const isComplete = request.nextUrl.searchParams.get("isComplete");
    const updatedTodo = await Todo.findOneAndUpdate({ _id: todoId }, { $set: { isComplete } }, { new: true });

    return new Response(JSON.stringify(updatedTodo), { status: 200 });
  } catch (error) {
    return new Response("Failed to update todo", { status: 500 });
  }
};

export const DELETE = async (request: any) => {
  try {
    await connectToDB();
    const todoId = request.nextUrl.searchParams.get("todoId");
    await Todo.deleteOne({ _id: todoId });

    return new Response(todoId, { status: 200 });
  } catch (error) {
    return new Response("Failed to delete todo", { status: 500 });
  }
};