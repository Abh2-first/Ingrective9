export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(process.env.HF_RUN_PREDICT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_TOKEN || ""}`,
      },
      body: req,
    });

    const data = await response.json();
    res.status(200).json({ text: data?.data?.[0] || "" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
