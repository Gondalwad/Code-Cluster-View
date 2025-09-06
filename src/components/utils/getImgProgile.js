
// gets img progile of user
export default async function getProfileImg(token) {

    const url = "http://localhost:3030/"
    const response = await fetch(`${url}validate`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });
    return response;
}