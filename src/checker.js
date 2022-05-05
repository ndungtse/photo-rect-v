export async function check(response) {
    if (response.message === "No token generated go back login") {
        document.write(`${<p>No token generated. Click ${<a href="/login">here</a>} to go back</p>} `)
    }
}
