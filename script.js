var selectedRow = null;

function onFormSubmit() {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["math"] = document.getElementById("math").value;
    formData["eng"] = document.getElementById("eng").value;
    formData["gs"] = document.getElementById("gs").value;

    return formData;
}


function insertNewRecord(data) {
  let percent= (((parseInt(data.math))+(parseInt(data.eng))+(parseInt(data.gs)))/3).toFixed(2);
  
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.lastName;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.math;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.eng;
    cell5 = newRow.insertCell(4);
	  cell5.innerHTML = data.gs;
    cell6 = newRow.insertCell(5);
		cell6.innerHTML = percent+"%";
    
  
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("math").value = selectedRow.cells[2].innerHTML;
    document.getElementById("eng").value = selectedRow.cells[3].innerHTML;
    document.getElementById("gs").value = selectedRow.cells[4].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.math;
    selectedRow.cells[3].innerHTML = formData.eng;
    selectedRow.cells[4].innerHTML = formData.gs;
    selectedRow.cells[5].innerHTML = (((parseInt(formData.gs))+(parseInt(formData.eng))+(parseInt(formData.math)))/3).toFixed(2)+"%";


}

function onDelete(td) {
    
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    
}

function resetForm() {
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("math").value = '';
    document.getElementById("eng").value = '';
    document.getElementById("gs").value = '';

    selectedRow = null;
}

var tbl = document.getElementById('storeList');
        if (tbl.rows.length == 2) {
            console.log('IT WORKED')
            .style.display = 'none';           // Hide

            
        }
        console.log(tbl.rows.length);