import dbConnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, sign, time, date, image, price } = body;

    const wishListCollection = await dbConnect("wishlist");

    const addedToWishlist = {
      title,
      sign,
      time,
      date,
      image,
      price,
      status: "pending",
    };

    await wishListCollection.insertOne(addedToWishlist);

    return NextResponse.json(
      { message: "added to wishlist successfully", product: addedToWishlist },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const wishListCollection = await dbConnect("wishlist");
    const products = await wishListCollection.find({}).toArray();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}
