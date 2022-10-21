
var form = document.getElementById("form1")
// var namee =document.getElementsById("yourName")
// var accNum =document.getElementById("AccNum")
// var balance =document.getElementById("Balance")
var Users = [];
if (localStorage.getItem('myUser') != null) {
    Users = JSON.parse(localStorage.getItem('myUser'))
    showInfo();
}



form.addEventListener('submit', function (e) {
    e.preventDefault();

    addUser(e.target.elements.form1Name.value, e.target.elements.form1AccNum.value, e.target.elements.form1Balance.value);
    localStorage.setItem('myUser', JSON.stringify(Users))

    showInfo();
    clear(e);

})
function addUser(form1Name, form1AccNum, form1Balance) {
    Users.push({
        user_name: form1Name,
        user_accNum: form1AccNum,
        user_balance: form1Balance,
    })

}
function showInfo() {

    var bank = ``;

    for (let i = 0; i < Users.length; i++) {
        bank += `<tr>
   <td>${i}</td>
   <td>${Users[i].user_name}</td>
   <td>${Users[i].user_accNum}</td>
   <td>${Users[i].user_balance}</td>
   <td><button claas="btn btn-outline-warning" onclick='editUser(${i} )'>update</button></td>
   <td><button claas="btn btn-outline-danger " onclick='deleteTask(${i})'> delete </button></td>
   
   </tr>`
    }
    document.getElementById("table").innerHTML = bank
}
function clear(e) {
    e.target.elements.form1Name.value = "";
    e.target.elements.form1AccNum.value = "";
    e.target.elements.form1Balance.value = "";
}
function deleteTask(e) {
    Users.splice(e, 1)
    localStorage.setItem('myUser', JSON.stringify(Users))
    showInfo()
}
// function editUser(ind){
//     Users[ind]
//     namee.value=Users[ind].user_name
 
//    accNum.value=Users[ind].user_accNum
//    balance.value=Users[ind].user_balance
//    document.getElementById('update').innerText ='edit'

// }


