const addStudent = document.querySelector(".addStudent");
const formInput = document.querySelector(".form-input");
const valueName = document.querySelectorAll(".name");
const userName = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const phone = document.querySelector(".phone");
const gender = document.getElementById("gender");
const tableData=document.querySelector('.table-data')
const saveStudent=document.querySelector('.saveStudent')
const profile=document.querySelector('.profile')

userName.value="llvdmvsdmvsv"
addStudent.addEventListener("click", () => {
  formInput.classList.remove("d-none");
  saveStudent.classList.add("btn-primary")
  saveStudent.textContent="Save Student";

});
const searchInput = document.querySelector(".search-input");
 let re_us=[];
formInput.addEventListener("submit", (e) => {
  e.preventDefault();
     let fileimg=profile.files[0];
   let result=URL.createObjectURL(fileimg)

   let row=`
        <tr  class="trData" >
              <td >${userName.value}</td>
              <td >${email.value}</td>
              <td >${password.value}</td>
              <td>${phone.value}</td>
              <td>${gender.value}</td>
              <td class=" rounded-circle" style="width:60px; height: 60px; " >
                <img class="result-pf w-100 h-100 rounded-circle" src="${result}" alt=""></td>
              <td class="d-flex gap-2">
                 <button onclick="updateStudent(this)"  class="btn btn-warning">Update</button>
                 <button onclick="deleteData(this)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
   `
  
   re_us.push(userName.value);
   tableData.innerHTML=tableData.innerHTML+row;
   

  formInput.classList.add("d-none")


  formInput.reset()
  
});
console.log(re_us);
searchInput.addEventListener("input", (e) => {
  let inputValue = e.target.value.toLowerCase();
 console.log(inputValue)
let resultSearch=re_us.filter(()=>{
   return inputValue==re_us;
})
console.log(resultSearch);
});
function closeForm(){
   formInput.classList.add("d-none")

}
const deleteData=(button)=>{
  console.log(button)
  const  row=button.closest('tr').remove();

}
const updateStudent=(button)=>{
  formInput.classList.remove('d-none')
  saveStudent.textContent="Update Student"
  saveStudent.classList.add("btn-warning")
    formInput.reset();
    userName.value=button.closest('tr').children[0].textContent
    email.value=button.closest('tr').children[1].textContent
    password.value=button.closest('tr').children[2].textContent
    phone.value=button.closest('tr').children[3].textContent
    gender.value=button.closest('tr').children[4].textContent
    button.closest('tr').remove();
    


}
