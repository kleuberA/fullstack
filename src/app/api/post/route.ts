import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { content, userId } = (await req.json()) as {
			content: string;
			userId: string;
		};

		const user = await prisma.user.findUnique({ where: { id: userId } });

		if (!user) {
			return new NextResponse(
				JSON.stringify({
					status: "error",
					message: "User not found",
				}),
				{ status: 404 }
			);
		}
		const post = await prisma.post.create({
			data: {
				title: "Teste",
				content,
				author: {
					connect: { id: userId },
				},
			},
		});

		return NextResponse.json({
			post: {
				id: post.id,
				message: post.content,
				createdAt: post.createdAt,
				author: {
					id: user.id,
					name: user.name,
					email: user.email,
				},
			},
		});
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
