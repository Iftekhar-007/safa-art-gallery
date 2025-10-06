import dbConnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { id, title, sign, time, image, price, email } = body;

    const wishListCollection = await dbConnect("wishlist");

    const addedToWishlist = {
      id,
      title,
      sign,
      time,
      image,
      price,
      email,
      status: "pending",
    };

    const isExist = await wishListCollection.findOne({ email, id });
    if (isExist) {
      return NextResponse.json({ message: "already added" }, { status: 200 });
    }

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

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }
    const wishListCollection = await dbConnect("wishlist");
    const products = await wishListCollection.find({ email }).toArray();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}
