import { NextResponse } from "next/server"

export const POST = async (request: Request) => {
    return NextResponse.json(
        [
            {
                name: "Good restaraunt",
                averageRating: 4.2,
            }
        ]
    )
}