const searchInput = document.querySelector ("Search")
const searchResult = document.querySelector ("table-result")

let dataArray;
async function getUsers(){

   const res = await fetch("https://randomuser.me/api/?nat=fr&result=50")

   const { results } = await res.json()
   
   dataArray = orderListe(results)
}

getUsers()
function orderListe(data) {
   
    const orderData = data.sort((a,b)) {}

}
