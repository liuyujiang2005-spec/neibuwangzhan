import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET(req: NextRequest) {
  const db = getDb();
  const { searchParams } = new URL(req.url);
  const business = searchParams.get("business");

  let sql = "SELECT * FROM tasks";
  const params: string[] = [];
  if (business) {
    sql += " WHERE business_line = ?";
    params.push(business);
  }
  sql += " ORDER BY created_at DESC";
  const rows = db.prepare(sql).all(...params);
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const db = getDb();
  const body = await req.json();
  const { title, assignee, priority, business_line, deadline, description } = body;
  if (!title) return NextResponse.json({ error: "请提供任务标题" }, { status: 400 });

  const id = `TASK-${String(Date.now()).slice(-6)}`;
  db.prepare(
    "INSERT INTO tasks (id, title, description, assignee, priority, status, business_line, deadline) VALUES (?, ?, ?, ?, ?, 'pending', ?, ?)"
  ).run(id, title, description || "", assignee || "", priority || "medium", business_line || "", deadline || "");

  const task = db.prepare("SELECT * FROM tasks WHERE id = ?").get(id);
  return NextResponse.json(task, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const db = getDb();
  const body = await req.json();
  const { id, status } = body;
  if (!id) return NextResponse.json({ error: "请提供任务ID" }, { status: 400 });

  db.prepare("UPDATE tasks SET status = ? WHERE id = ?").run(status || "pending", id);
  const task = db.prepare("SELECT * FROM tasks WHERE id = ?").get(id);
  return NextResponse.json(task);
}
