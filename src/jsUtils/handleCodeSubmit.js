
export default async function handleCodeSubmit(code, problemName){

    // const url = process.env.VITE_APP_API_URL;
    const token = localStorage.getItem("token");
    const url = import.meta.env.VITE_APP_API_URL;
    const username = JSON.parse(atob(localStorage.getItem("token").split('.')[1])).sub;

    
    const response = await fetch(`${url}api/user/problem/submit-solution`, {
        method : "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type":"application/json"
        },
        body : JSON.stringify({
            "username" : username,
            "programmingLanguage" :"java",
            "codeSolution" : code,
            "problemId" : problemName
        })
    });

    return response;
}