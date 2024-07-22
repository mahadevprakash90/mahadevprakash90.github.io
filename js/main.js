---
---

var img = new Image();
const pp1= document.getElementById('profilepic');
const ctx = pp1.getContext("2d");
pp1.width = 180;
pp1.height = 180;
ctx.fillStyle="white";
ctx.lineWidth = 4;
ctx.beginPath();
ctx.ellipse(90,90,75,75, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.ellipse(90, 90, 70, 70, Math.PI / 4, 0, 2 * Math.PI);
ctx.clip();

img.addEventListener("load", () => {
ctx.drawImage(img, 0, 0,img.width,img.height,pp1.width*0.1,pp1.height*0.1,pp1.width*0.8,pp1.height*0.8);
});

var imagePath=  '{{ "images/profilepic.jpg" | relative_url }}';
img.src = imagePath;
console.log(imagePath);

const cp1=document.getElementById('cover-pic');
const cpx=cp1.getContext("2d");
cp1.style.width='100%';
cp1.width=cp1.offsetWidth;
cp1.height= 50;
cpx.fillStyle="lightblue";
cpx.fillRect(0,0,cp1.width,cp1.height);
cpx.fill();
console.log(cp1.height);

cpx.strokeStyle="white";
const num_lines=100;

for (let i =0; i<=num_lines; i++){
    cpx.beginPath();
    cpx.moveTo(cp1.width/num_lines*i,0);
    cpx.lineTo(cp1.width/num_lines*i,cp1.height);
    cpx.stroke();
}
    
const cp2=document.getElementById('footer');
const cpx2=cp2.getContext("2d");
cp2.style.width='100%';
cp2.width=cp2.offsetWidth;
cp2.height= 50;
cpx2.fillStyle="lightblue";
cpx2.fillRect(0,0,cp2.width,cp2.height);
cpx2.fill();
console.log(cp2.height);

cpx2.strokeStyle="white";

for (let i =0; i<=num_lines; i++){
    cpx2.beginPath();
    cpx2.moveTo(cp2.width/num_lines*i,0);
    cpx2.lineTo(cp2.width/num_lines*i,cp2.height);
    cpx2.stroke();
}


function toggleNavbar(){
    var x= document.getElementById("myNavbar");
    console.log(x.className);
    if (x.className == "navbar"){
        x.className+=" responsive"
    }
    else {
        x.className ="navbar"
    }
}