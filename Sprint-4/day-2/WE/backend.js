var form = document.querySelector("#investorData");

form.addEventListener("submit",addInvestor);

function addInvestor(){
event.preventDefault();

let investorData = JSON.parse(localStorage.getItem("investorsData")) || [];
let data = {
  img : form.investor_image.value,
  name: form.investorName.value,
  role :form.role.value,
  companyImg : form.comp_img.value,
};
investorData.push(data);

localStorage.setItem("investorsData",JSON.stringify(investorData));

}
