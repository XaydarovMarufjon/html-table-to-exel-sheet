function getResults() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data2 => 
            document.querySelector('#mytable').innerHTML =  ` 
               <tr>
                    <td>${data2.id}</td>
                    <td>${data2.name}</td>
                    <td>${data2.username}</td>
                    <td>${data2.email} </td>
                </tr>
            `
            )
    }




    
fetch(`https://jsonplaceholder.typicode.com/users/`)
.then(response => response.json())
.then(data => dataa(data))

function dataa(response) {
  let root = document.querySelector('#mytable')
 
 const javob =  response.map( (data2 , indx)=>{
  let nat = ` 
  <tr>
   <td>${data2.id}</td>
   <td>${data2.name}</td>
   <td>${data2.username}</td>
   <td>${data2.email} </td>
  </tr>
  `
    return  nat
  })

  root.innerHTML = javob.join(' ')
}
 

function html_table_to_excel(type)
    {
        var data = document.getElementById('employee_data');

        var file = XLSX.utils.table_to_book(data, {sheet: "sheet1"});

        XLSX.write(file, { bookType: type, bookSST: true, type: 'base64' });

        XLSX.writeFile(file, 'file.' + type);
    }

    const export_button = document.getElementById('export_button');

    export_button.addEventListener('click', () =>  {
        html_table_to_excel('xlsx');
    });



