
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function checkBackendHealth() {
  if (!API_URL) {
    throw new Error("Backend API URL is not configured");
  }

  try {
    const response = await fetch(`${API_URL}/api/health`);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Backend connection failed:", error);
    throw error;
  }
}
