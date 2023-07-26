// export {bmi};
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  // result.innerHTML="Hello world"
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (
    (height === "" || height < 0 || isNaN(height)) &&
    (weight === "" || weight < 0 || isNaN(weight))
  ) {
    result.innerHTML = "";
    result.innerHTML = `Please enter valid values of weight: ${weight} and height:${height}`;
    form.reset();
  } else if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "";
    result.innerHTML = `Please enter a valid value of height ${height}`;
    form.reset();
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "";
    result.innerHTML = `Please enter a valid value of weight ${weight}`;
    form.reset();
  } else {
    result.innerHTML = "";
    result.style.margin = "0% 55%";
    result.innerHTML = `<span>${bmi}</span>`;
    let p = document.createElement("p");
    p.style.color = "black";
    p.style.padding = "0% 80%";
    p.style.display = "flex";
    p.style.alignItems = "center";
    p.style.justifyContent = "center";
    let divMessage = document.getElementById("message");
    divMessage.appendChild(p);
    switch (true) {
      case bmi < 18.5:
        {
          p.innerHTML = `Under Weight`;
          p.style.backgroundColor = "pink";
        }
        break;
      case 18.5 <= bmi && bmi < 25:
        {
          p.innerHTML = `Normal Weight`;
          p.style.backgroundColor = "green";

        }
        break;
      case 25 <= bmi && bmi < 30:
        {
          p.innerHTML = `Over Weight`;
          p.style.backgroundColor = "orange";

        }
        break;
      default: {
        p.innerHTML = `Obesity`;
        p.style.backgroundColor = "red";
      }
    }
   
    setTimeout(()=>{
        form.reset();
        p.innerHTML='';
        // result.innerHTML='';
    },2000)
    
  }
});
function userDetails(username){
if(username){
    console.log(salary);
    console.log(age);
    let age=30;
    let salary=1000;

}
console.log(salary);
console.log(age);
}
userDetails("John")

