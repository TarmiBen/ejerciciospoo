var mecanics = Tool.getMecanicFromLocalStorage();
updateTable();

function saveMecanic(){
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let specialty = document.getElementById('specialty').value;

    let mecanic =  new Mecanic(name, lastname, email, phone, specialty)
    mecanics.push(mecanic);

    // se data 
    Tool.setDataToLocalStorage('mecanics', mecanics);
    // crear form
    document.getElementsByClassName('form-control').value = "";
    updateTable();
}


function updateTable(){
    let items  = "";
    mecanics.forEach(element => {
    
        items += 
        `<tr>
            <th scope="row">${element.getId()}</th>
            <td>${element.getFullName()}</td>
            <td>${element.Phone}</td>
            <td>${element.Email}</td>
            <td><a href="" class="">Ver</a></td>
        </tr>`;
    });
    let body = document.getElementById('table_body_mecanics');
    body.innerHTML = items;
    
}