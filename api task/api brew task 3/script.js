fetch("https://api.openbrewerydb.org/v1/breweries")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let tableData = "";
        data.map((values) => {
            tableData += `<tr>
            <td>${values.id}</td>
            <td>${values.name}</td>
            <td>${values.brewery_type}</td>
            <td>${values.address_1}</td>
            <td>${values.city}</td>
            <td>${values.state}</td>
            <td>${values.postal_code}</td>
            <td>${values.latitude}</td>
            <td>${values.longitude}</td>
            <td>${values.phone}</td>
            <td>${values.website_url}</td>
            
            
        </tr>
`;
        })

        document.getElementById("table-body").innerHTML = tableData;
    }).catch((err) => {
        console.log(err);
    })


