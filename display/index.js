

const mainFunction = async () => {
    // https://cat-fact.herokuapp.com/facts 5 list
    // quotes, today, author, random
  let collect = await fetch(`https://cat-fact.herokuapp.com/facts`);
  let data = await collect.json();
  // console.log(data);
  return data;
};


const display = async () => {
  let data = await mainFunction();
  console.log(data);
  append(data)
};
display();

const append = async (data)=>{
  document.querySelector("#container").innerHTML = ""
    console.log(data)

    
    data?.forEach((el,i)=>{
        
let box = document.createElement("div")
box.setAttribute("class","card text-white col-lg-4 col-md-6 bg-primary mb-2 col-sm-12 main")
// 
let hd = document.createElement("div")
hd.setAttribute("class","card-header")
hd.innerText ="TYPE"+" "+ el.type

let cb = document.createElement("div")
cb.setAttribute("class","card-body cdb")



let h5 = document.createElement("h5");
h5.setAttribute(
  "class",
  "card-title align-items-start justify-content-center"
);
h5.textContent = el.text ;


let p = document.createElement("p");
p.setAttribute("class","card-text")
p.textContent ="ID"+" "+ el.user;


box.append(hd,cb)
cb.append(h5,p)
document.querySelector("#container").append(box)

    });
}