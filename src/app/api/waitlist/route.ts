export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return Response.json(
        { ok: false, error: "invalid_email" },
        { status: 400 },
      );
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID;
    if (!apiKey || !groupId) {
      return Response.json(
        { ok: false, error: "server_misconfigured" },
        { status: 500 },
      );
    }

    const mlRes = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ email, groups: [groupId], status: "active" }),
      },
    );

    if (mlRes.status === 200 || mlRes.status === 201) {
      return Response.json({ ok: true });
    }

    return Response.json(
      { ok: false, error: "mailerlite_error" },
      { status: 502 },
    );
  } catch {
    return Response.json({ ok: false, error: "unexpected" }, { status: 500 });
  }
}
