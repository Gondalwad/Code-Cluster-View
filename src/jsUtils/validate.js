
export default async function validator(sss){

    // const url = process.env.VITE_APP_API_URL;
    const token = localStorage.getItem(token);
    const url = import.meta.env.VITE_APP_API_URL;
    const response = await fetch(`${url}auth/validate`, {
        method : "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type":"application/json"
        },
    });

    return response;
}