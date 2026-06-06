    import { NextResponse } from "next/server";
    import { z } from "zod";
    import { supabase } from "@/lib/supabase";

    const schema = z.object({
    email: z.email(),
    });

    export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { email } = schema.parse(body);

        const { error } = await supabase
        .from("waitlist")
        .insert({
            email,
        });

        if (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        );
        }

        return NextResponse.json({
        success: true,
        });
    } catch {
        return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
        );
    }
    }