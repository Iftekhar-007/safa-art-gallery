import dbConnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { id, title, price, image, email, offeredPrice } = body;

    const offersCollection = await dbConnect("offers");

    const newOffer = {
      id,
      title,
      price,
      image,
      email,
      offeredPrice,
      createdAt: new Date(),
    };

    const isExist = await offersCollection.findOne({ email, id });
    if (isExist) {
      return NextResponse.json(
        { message: "product already added" },
        { status: 200 }
      );
    }

    await offersCollection.insertOne(newOffer);
    return Response.json(
      { message: "Offer added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to add offer" }, { status: 500 });
  }
}
