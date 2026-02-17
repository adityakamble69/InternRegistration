document.getElementById("googleForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let phone = document.getElementById("phoneno").value;

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Mobile number must be exactly 10 digits ❌");
    return;
  }

  let loader = document.getElementById("loader");
  loader.classList.remove("hidden");

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let dob = document.getElementById("dob");
  let male = document.getElementById("male");
  let feedback = document.getElementById("feedback");
  let pass = document.getElementById("pass");

  let data = {
    name: name.value,
    email: email.value,
    phone: phone,
    dob: dob.value,
    gender: male.checked ? "Male" : "Female",
    address: feedback.value,
    password: pass.value
  };

  fetch("https://script.google.com/macros/s/AKfycbx1uEpPEurndU58MAqJ9TCMBVUADEY_UQNTT3UYH-mBSKU8U-ldjqyzIGoYWMdiXoKk/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(msg => {
    loader.classList.add("hidden");
    alert("Data saved ✅");
    this.reset();
  })
  .catch(err => {
    loader.classList.add("hidden");
    alert("Error ❌");
    console.log(err);
  });
});
