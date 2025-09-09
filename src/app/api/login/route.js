import dbConnect from "@/lib/dbconnect";

export async function POST(req) {
  const { email, password } = req.json();
  const usersCollection = await dbConnect("users");

  const user = await usersCollection.findOne({ email, password });
  if (!user) {
    return Response.json({ error: "inval;id credentials" }, { status: 401 });
  }

  return Response.json({ user }, { status: 200 });
}
