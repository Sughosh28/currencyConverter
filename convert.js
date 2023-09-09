const populate = async (value, currency) => {
  myStr = "";
  url =
    "add your APIkey from currency API here"+
    currency;

  let response = await fetch(url);
  let rjson = await response.json();
  // console.log(rjson);
  document.querySelector(".table").style.display="block";
  for (let key of Object.keys(rjson["data"])) {
    myStr += `
    <tr>
        <td>${key}</td>
        <td>${rjson["data"][key]["code"]}</td>
        <td>${Math.round(rjson["data"][key]["value"] * value)}</td>
    </tr>
`;
    
  }
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = myStr;
};
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("Button is clicked");
    const value = parseInt(
      document.querySelector("input[name='quantity']").value
    );
    const currency = document.querySelector("select[name='currency']").value;
    populate(value, currency);
  });
});
