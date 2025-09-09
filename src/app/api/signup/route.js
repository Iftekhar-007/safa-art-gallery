import dbConnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const usersCollection = await dbConnect("users");

    // check if user already exist

    const isExist = await usersCollection.findOne({ email });
    if (isExist) {
      return NextResponse.json(
        { error: "user already exist" },
        { status: 400 }
      );
    }

    await usersCollection.insertOne({
      name,
      email,
      password,
      role: "user",
      createdAt: new Date(),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 500 });
  }
}
