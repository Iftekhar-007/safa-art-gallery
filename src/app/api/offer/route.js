import dbConnect from "@/lib/dbconnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

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

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { user } = session;
    const offersCollection = await dbConnect("offers");

    let query = {};

    // ✅ Check role
    if (user.role === "admin") {
      query = {}; // admin can see all shob dekha jbe ekhane
    } else {
      query = { email: user.email }; // normal user → own offers only user nijer ta dekhbe
    }

    const offers = await offersCollection.find(query).toArray();

    return NextResponse.json(offers, { status: 200 });
  } catch (error) {
    console.error("GET /offers error:", error);
    return NextResponse.json(
      { error: "Failed to fetch offers" },
      { status: 500 }
    );
  }
}
