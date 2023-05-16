import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { filtro } = (await req.json()) as {
			filtro: string;
		};

		const posts = await prisma.post.findMany({
			where: {
				filtro,
			},
			include: {
				author: true,
			},
		});

		return NextResponse.json({ posts });
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify({
				status: "error",
				message: error.message,
			}),
			{ status: 500 }
		);
	}
}
