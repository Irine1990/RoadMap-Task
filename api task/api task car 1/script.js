fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0].nome)
        let tableData = "";
        data.map((values) => {
            tableData += `<tr>
            <td>${values.codigo}</td>
            <td>${values.nome}</td>
            
        </tr>
`;
        })

        document.getElementById("table-body").innerHTML = tableData;
    }).catch((err) => {
        console.log(err);
    })


