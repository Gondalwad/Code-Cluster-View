
// gets img progile of user
export default async function getProfileImg(token) {

    const url = import.meta.env.VITE_APP_API_URL
    const response = await fetch(`${url}validate`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });
    return response;
}