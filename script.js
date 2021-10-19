fetch('https://programmingnewsapi.herokuapp.com/?format=json').then((data)=> {
    return data.json();

}).then((completedata)=>{
    let data1="";
    completedata.map((values)=>{
        data1+= `  <div class="card" style="background-color:white;">

        <h1 class="head" style="color:black;" >${values.title
        }</h1>
      
  <img src=${values.image} alt="img"  class="images">
  <p>${values.description}</p>
      <button>
    <a href=${values.link}>LINK</a>
      </button>  
        </div>`
    
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})
