import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { User } from "@/types/user";
import { ObjectId } from "mongodb";

//CREATE
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("mydb");
    const result = await db.collection("users").insertOne({
      name: body.name,
      email: body.email,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    return NextResponse.json({ error: "Insert failed" }, { status: 500 });
  }
}

//READ
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("mydb");
    const users = await db.collection<User>("users").find({}).toArray();
    
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 },
    );
  }
}

//UPDATE
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("mydb");
    const result = await db.collection<User>("users").updateOne(
      {
        _id: new ObjectId(body.id),
      },
      {
        $set: {
          name: body.name,
          email: body.email,
        },
      },
    );

    return NextResponse.json({
      success: true,
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

//DELETE
export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("mydb");
    const result = await db.collection("users").deleteOne({
      _id: new ObjectId(body.id),
    });

    return NextResponse.json({
      success: true,
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Delete failed",
      },
      { status: 500 },
    );
  }
}
