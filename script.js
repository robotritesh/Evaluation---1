let select = document.getElementById("select")
let select1 = document.getElementById("select1")
let select2 = document.getElementById("select2")


function fetchData(){

    let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10"
      
    if(select) url += `&filterBy=department&filterValue=${select}`
    if(select1) url += `&filterBy=gender&filterValue=${select1}`
    if(select2) url += `&sort=salary&order=${select2}`

    fetch(url)
    .then(response =>response.json())
    .then(data => displayData(data))
    .then(error =>console.error(error))
}
function displayData(data){
    let tabledata = document.getElementById("tabledata")
    tabledata.innerHTML = ""

    data.forEach((empl,i)=>{
        trow = tabledata.insertRow()
        trow.innerHTML = `
        <td>${i+1}</td>
        <td>${empl.select}</td>
        <td>${empl.select1}</td>
        <td>${empl.select2}</td>
        `
    })
}
