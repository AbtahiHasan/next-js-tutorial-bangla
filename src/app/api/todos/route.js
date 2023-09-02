import Todo from "@/app/lib/model/todo"
import connectToDb from "@/app/lib/mongoose"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    try {
        connectToDb()
        const result = await Todo.find()
        return NextResponse.json(result)
    } catch (error) {

    }
}

export const POST = async (req) => {
    try {
        const data = await req.json()
        connectToDb()
        const result = await Todo.create(data)
        return NextResponse.json(result)
    } catch (error) {

    }
}