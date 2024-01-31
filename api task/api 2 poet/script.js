fetch("https://poetrydb.org/title/Ozymandias/lines.json")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let bodyData = "";
        data.map((values) => {
            bodyData += `<blockquote>${values.lines}</blockquote>`
        })
        document.getElementById("quote1").innerHTML = bodyData
    })