// Utility to convert byte array to image URL
function byteArrayToImage(byteArray, mimeType = "image/png") {
  const uint8Array = new Uint8Array(byteArray); // Convert to typed array
  const blob = new Blob([uint8Array], { type: mimeType });
  return URL.createObjectURL(blob); // URL usable in <img src="">
}

// Example function to fetch profile image from backend
export default async function getProfileImage() {
  const url = import.meta.env.VITE_APP_API_URL + "api/user/getProfileImg";
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Profile image not found");
    }

    // Convert response to ArrayBuffer
    const arrayBuffer = await response.arrayBuffer();
    const imgUrl = byteArrayToImage(arrayBuffer);

    return imgUrl; // You can use this in <img src={imgUrl} />
  } catch (err) {
    console.error("Failed to fetch profile image:", err);
    return null; // fallback if needed
  }
}

