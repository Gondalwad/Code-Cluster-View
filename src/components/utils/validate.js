
export default async function validator(token){

    // const url = process.env.VITE_APP_API_URL;
    const url = import.meta.env.VITE_APP_API_URL;
    const response = await fetch(`${url}/validate`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    return response;
}