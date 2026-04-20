export default function handler(req, res) {
  const { token } = req.query;

  if (token !== "123") {
    return res.status(401).json({
      error: "Unauthorized - invalid or missing token",
    });
  }

  res.status(200).json({
    message: "Secure data accessed successfully",
  });
}