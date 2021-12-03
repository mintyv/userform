function addRow() {
          
    var myName = document.getElementById("name");
    var Email = document.getElementById("email");
    var City = document.getElementById("city");
    var Country = document.getElementById("country");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    
    row.insertCell(0).innerHTML= myName.value;
    row.insertCell(1).innerHTML= Email.value;
    row.insertCell(2).innerHTML= City.value;
    row.insertCell(3).innerHTML= Country.value;
    row.insertCell(4).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(5).innerHTML= '<input type="button" value = "Edit" onClick="Javacsript:editRow(this)">';
    
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
 
function addTable() {
      
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<3; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<4; j++){
           var td = document.createElement('TD');
           td.width='65';
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
    
}

function editRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.editRow(index);
    
}
var paragraph = document.getElementById("myTableData");
var edit_button = document.getElementById("edit");
var end_button = document.getElementById("done");

edit.addEventListener("click", function() {
  paragraph.contentEditable = true;
  paragraph.style.backgroundColor = "#dddbdb";
} );

done.addEventListener("click", function() {
  paragraph.contentEditable = false;
  paragraph.style.backgroundColor = "#ffe44d";
} )



function load() {
    
    console.log("Page load finished");
 
}
