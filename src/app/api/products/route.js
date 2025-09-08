// import dbConnect from "@/lib/dbConnect";
import dbConnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { title, description, sign, time, date, image } = body;

//     if (!title || !description || !sign || !time || !date || !image) {
//       return NextResponse.json(
//         { error: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     const productsCollection = await dbConnect("products");
//     const newProduct = {
//       title,
//       description,
//       sign,
//       time,
//       date,
//       image,
//       createdAt: new Date(),
//     };

//     await productsCollection.insertOne(newProduct);

//     return NextResponse.json(
//       { message: "Product added successfully", product: newProduct },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error inserting product:", error);
//     return NextResponse.json(
//       { error: "Failed to add product" },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req) {
  try {
    const body = req.json();
    const { title, description, sign, time, date, image } = body;

    if (!title || !description || !sign || !time || !date || !image) {
      return NextResponse.json(
        { error: "All Fields Are Required" },
        { status: 400 }
      );
    }

    const productsCollection = await dbConnect("products");
    const newProduct = {
      title,
      description,
      sign,
      time,
      date,
      image,
    };

    await productsCollection.insertOne(newProduct);

    return NextResponse.json(
      { message: "product added successfully", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "error occured" }, { status: 500 });
  }
}

// export async function GET() {
//   try {
//     const productsCollection = await dbConnect("products");
//     const products = await productsCollection.find({}).toArray();
//     return NextResponse.json(products, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch products" },
//       { status: 500 }
//     );
//   }
// }

export async function GET() {
  try {
    const productsCollection = await dbConnect("products");
    const products = productsCollection.find({}).toArray();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("error happens");
    return NextResponse.json({ error: "error occured" }, { status: 500 });
  }
}
