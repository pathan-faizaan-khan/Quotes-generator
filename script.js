const button = document.querySelector("#button");
const output = document.querySelector(".display")
const option = document.getElementById("Quote")

async function apicall(key,api_key) {
    let response  = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${key}`,{headers: { 'X-API-Key':'O4cd2WzJFR6iTHDd5zVDmZHvONNNeiMNNiZml25m'}});
    const data = await response.json();
    output.innerHTML = data[0].quote; 
}


button.addEventListener('click',()=> {
    api_key = "b9ZKfDnJT0OOsMCN+rIX6A==CdMxHtLUXK181N1t"
    let api_url = option[option.selectedIndex].innerText
    apicall(api_url,api_key)
})