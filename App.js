<<<<<<< HEAD
const pageSize = 10
const tbody = document.querySelector('tbody')

  //************************************************************************//
 // La fonction 'dataTable' "retourn" les données suivant la page actuelle //
//************************************************************************//
const dataTable = (currentPage) => {
    const a = currentPage * pageSize -10;
    const b = currentPage * pageSize ;
    return users.slice(a, b).map(user => ({
        avatar: user.image,
        fName: user.firstName,
        lName: user.lastName,
        bDay: user.birthDate
    }));
}

  //************************************************************//
 // La fonction 'creatRow' sert à creé les lignes de la table  //
//************************************************************//
const creatRow = (avatar,fName,lName,bDay) => {
    const tr = document.createElement('tr')
    tr.classList.add('row_data');
    const td0 = document.createElement('td')
    const imgAvatar = document.createElement('img')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    imgAvatar.src = avatar
    td0.append(imgAvatar)
    td1.innerText = fName
    td2.innerText = lName
    td3.innerText = bDay
    tr.append(td0,td1, td2, td3)
    return tr
}
   //***********************************************************************************//
  //La fonction 'dataRow' appelle les fonctions 'addRowData, pageNonColor et pageColor'//
 //pour remplir les lignes du tableau suivant la page actuelle.                       //
//***********************************************************************************//
const dataRow = (currentPage) => {
    addRowData(currentPage)
    pageNonColor()
    pageColor(currentPage)
}

//*****************************************************************//
// La fonction 'addRowData' sert à remplire les lignes de la table //
//*****************************************************************//
const addRowData = (currentPage) => {
    tbody.innerHTML = '';
    const mappedUsers = dataTable(currentPage);
    mappedUsers.forEach(user => {
        tbody.appendChild(creatRow(user.avatar,user.fName,user.lName,user.bDay))
    })
    
}

  //**********************************************************************//
 //La fonction 'pageColor' donne une coleur à l'index de la page actuelle//
//**********************************************************************//
const pageColor = (currentPage) =>{
    const element = document.getElementById(currentPage)
    element.style.color = "cadetblue"
}

  //******************************************************************************//
 //La fonction 'pageNonColor' donne une coleur blanche à tous les index des pages//
//******************************************************************************//
const pageNonColor = () => {
    const elements = document.querySelectorAll('span')
    elements.forEach(element => {
        element.style.color = 'white'
    })
}
dataRow(1);

let order = true;

// La variable 'rows' contienne les données saisies dans chaque ligne de la table //
let rows = Array.from(tbody.querySelectorAll('tr'))


  //*********************************************************//
 //La fonction 'sortTable' trie la table suivant une colonne//
//*********************************************************//
const sortTable = (columnIndex, dataType) => {
    tbody.innerHTML = '';
    order = !order;
    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.toString().toUpperCase().trim();
        const bValue = b.cells[columnIndex].textContent.toString().toUpperCase().trim();

        if (dataType === 'string') {
            return aValue.localeCompare(bValue);
        } else if (dataType === 'date') {
            return new Date(aValue) - new Date(bValue);
        }
    })

    if(!order){
        tbody.innerHTML = '';
        rows.reverse();
    }
    rows.forEach((row) => tbody.appendChild(row));
=======
const pageSize = 10
const tbody = document.querySelector('tbody')

  //************************************************************************//
 // La fonction 'dataTable' "retourn" les données suivant la page actuelle //
//************************************************************************//
const dataTable = (currentPage) => {
    const a = currentPage * pageSize -10;
    const b = currentPage * pageSize ;
    return users.slice(a, b).map(user => ({
        avatar: user.image,
        fName: user.firstName,
        lName: user.lastName,
        bDay: user.birthDate
    }));
}

  //************************************************************//
 // La fonction 'creatRow' sert à creé les lignes de la table  //
//************************************************************//
const creatRow = (avatar,fName,lName,bDay) => {
    const tr = document.createElement('tr')
    tr.classList.add('row_data');
    const td0 = document.createElement('td')
    const imgAvatar = document.createElement('img')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    imgAvatar.src = avatar
    td0.append(imgAvatar)
    td1.innerText = fName
    td2.innerText = lName
    td3.innerText = bDay
    tr.append(td0,td1, td2, td3)
    return tr
}
   //***********************************************************************************//
  //La fonction 'dataRow' appelle les fonctions 'addRowData, pageNonColor et pageColor'//
 //pour remplir les lignes du tableau suivant la page actuelle.                       //
//***********************************************************************************//
const dataRow = (currentPage) => {
    addRowData(currentPage)
    pageNonColor()
    pageColor(currentPage)
}

//*****************************************************************//
// La fonction 'addRowData' sert à remplire les lignes de la table //
//*****************************************************************//
const addRowData = (currentPage) => {
    tbody.innerHTML = '';
    const mappedUsers = dataTable(currentPage);
    mappedUsers.forEach(user => {
        tbody.appendChild(creatRow(user.avatar,user.fName,user.lName,user.bDay))
    })
    
}

  //**********************************************************************//
 //La fonction 'pageColor' donne une coleur à l'index de la page actuelle//
//**********************************************************************//
const pageColor = (currentPage) =>{
    const element = document.getElementById(currentPage)
    element.style.color = "cadetblue"
}

  //******************************************************************************//
 //La fonction 'pageNonColor' donne une coleur blanche à tous les index des pages//
//******************************************************************************//
const pageNonColor = () => {
    const elements = document.querySelectorAll('span')
    elements.forEach(element => {
        element.style.color = 'white'
    })
}
dataRow(1);

let order = true;

// La variable 'rows' contienne les données saisies dans chaque ligne de la table //
let rows = Array.from(tbody.querySelectorAll('tr'))

  //*********************************************************//
 //La fonction 'sortTable' trie la table suivant une colonne//
//*********************************************************//
const sortTable = (columnIndex, dataType) => {
    tbody.innerHTML = '';
    order = !order;
    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.toString().toUpperCase().trim();
        const bValue = b.cells[columnIndex].textContent.toString().toUpperCase().trim();

        if (dataType === 'string') {
            return aValue.localeCompare(bValue);
        } else if (dataType === 'date') {
            return new Date(aValue) - new Date(bValue);
        }
    })

    if(!order){
        tbody.innerHTML = '';
        rows.reverse();
    }
    rows.forEach((row) => tbody.appendChild(row));
>>>>>>> 476f249 (first commit)
}