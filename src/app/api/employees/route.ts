import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  const db = getDb();
  const rows = db.prepare("SELECT id, name, email, role FROM employees").all();
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const db = getDb();
  const body = await req.json();
  const { name, email, role, password } = body;
  if (!name || !email) return NextResponse.json({ error: "请填写姓名和邮箱" }, { status: 400 });

  const result = db.prepare(
    "INSERT INTO employees (name, email, role, password) VALUES (?, ?, ?, ?)"
  ).run(name, email, role || "employee", password || "123456");
  const emp = db.prepare("SELECT id, name, email, role FROM employees WHERE id = ?").get(result.lastInsertRowid);
  return NextResponse.json(emp, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const db = getDb();
  const body = await req.json();
  const { id, name, email, role, password } = body;
  if (!id) return NextResponse.json({ error: "请提供员工ID" }, { status: 400 });

  const sets: string[] = [];
  const params: unknown[] = [];
  if (name) { sets.push("name = ?"); params.push(name); }
  if (email) { sets.push("email = ?"); params.push(email); }
  if (role) { sets.push("role = ?"); params.push(role); }
  if (password) { sets.push("password = ?"); params.push(password); }
  if (sets.length === 0) return NextResponse.json({ error: "无更新字段" }, { status: 400 });

  params.push(id);
  db.prepare(`UPDATE employees SET ${sets.join(", ")} WHERE id = ?`).run(...params);
  const emp = db.prepare("SELECT id, name, email, role FROM employees WHERE id = ?").get(id);
  return NextResponse.json(emp);
}

export async function DELETE(req: NextRequest) {
  const db = getDb();
  const body = await req.json();
  const { id } = body;
  if (!id) return NextResponse.json({ error: "请提供员工ID" }, { status: 400 });
  db.prepare("DELETE FROM employees WHERE id = ?").run(id);
  return NextResponse.json({ success: true });
}
