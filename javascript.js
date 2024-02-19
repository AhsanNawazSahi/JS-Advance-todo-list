dat.max = new Date().toISOString().split("T")[0]

var selectedRow = null

function operator() {
    if (validate()) {

    }

    else if (selectedRow == null) {
        addrow();
        dat.value = "";
        cat.value = "";
        des.value = "";
        exp.value = "";
    }
    else {
        addUpStud()
        resetForm()
    }

}

function addrow() {

    var dat = document.sample.dat.value;
    var cat = document.sample.cat.value;
    var des = document.sample.des.value;
    var exp = document.sample.exp.value;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = dat;
    td2.innerHTML = cat;
    td5.innerHTML = des;
    td6.innerHTML = exp;
    td3.innerHTML = '<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="del_btn">'
    td4.innerHTML = '<input type="button" name="up" value="Edit" onclick="UpStud(this);" class="edit_btn">'

    document.getElementById("tbl").appendChild(tr);

    dat.value = "";
    cat.value = "";
    des.value = "";
    exp.value = "";

    selectedRow = null

}

function resetForm() {
    document.getElementById("dat").value = "";
    document.getElementById("cat").value = "";
    document.getElementById("des").value = "";
    document.getElementById("exp").value = "";
    selectedRow = null;
}

function UpStud(stud) {

    selectedRow = stud.parentElement.parentElement;
    document.getElementById("dat").value = selectedRow.cells[0].innerHTML;
    document.getElementById("cat").value = selectedRow.cells[1].innerHTML;
    document.getElementById("des").value = selectedRow.cells[2].innerHTML;
    document.getElementById("exp").value = selectedRow.cells[3].innerHTML;
    document.getElementById("add_button").value = `Update`

}

function addUpStud() {
    selectedRow.cells[0].innerHTML = dat.value;
    selectedRow.cells[1].innerHTML = cat.value;
    selectedRow.cells[2].innerHTML = des.value;
    selectedRow.cells[3].innerHTML = exp.value;
    document.getElementById("add_button").value = `Add`
}


function delStudent(Stud) {
    if (confirm("Do you really want to delete this data ?")) {
        var s = Stud.parentNode.parentNode;
        s.parentNode.removeChild(s);
    }
}

des.addEventListener("input", function () {
    let words = this.value.split('');
    if (words.length > 50) {
        alert('You are not Allowed to exceed length of 50 words')
        this.value = this.value.substring(0, this.value.lastIndexOf("", 50))
    }
})


function validate() {
    isValid = true;
    if (document.getElementById("dat").value == "") {
        isValid = true;
        document.getElementById("fullNameValidationError").classList.remove("hide");

        let appear = document.getElementById("fullNameValidationError");
        appear.removeAttribute('hidden');

    } else {
        isValid = false;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
        let appear = document.getElementById("fullNameValidationError");
        appear.setAttribute('hidden', false);
    }
    return isValid;
}


// For Search Filter 


let search_fun = () => {
    let filter = document.getElementById("sea").value.toUpperCase();
    let myTable = document.getElementById("tbl");
    let tr = myTable.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            if (textvalue.toLocaleUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


//   Arranging the table data 



function sortAscending() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tbl");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[document.getElementById("dropdown").selectedIndex].innerHTML;
            y = rows[i + 1].getElementsByTagName("td")[document.getElementById("dropdown").selectedIndex].innerHTML;
            if (x.toLowerCase() > y.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortDescending() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tbl");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[document.getElementById("dropdown").selectedIndex].innerHTML;
            y = rows[i + 1].getElementsByTagName("td")[document.getElementById("dropdown").selectedIndex].innerHTML;
            if (x.toLowerCase() < y.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

