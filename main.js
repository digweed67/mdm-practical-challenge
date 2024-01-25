const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");

const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";

sect.appendChild(para);

console.log(sect);
console.log(para);

const text = document.createTextNode("— the premier source for web development knowledge");

console.log(text);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);



sect.removeChild(linkPara);

// linkPara.remove(); 

// old browsers don't support the previous so: 

// linkPara.parentNode.removeChild(linkPara);

/* applies the css inline (but then we need to append it)
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

console.log(para);

*/

// we select the class directly which applies the css directly 
para.setAttribute("class", "highlight");










