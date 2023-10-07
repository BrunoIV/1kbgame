//c = document.getElementById('c') = canvas
var ctx = c.getContext`2d`,

colors = 'ea43f5ded000',

text = (txt, color, x, y, size) => {
    ctx.fillStyle = "#" + color;
    ctx.font = size + "px Monospace";
    ctx.fillText(txt, x, y); 
},

card=(size, color, index)=>{
    var desviationX = index*size/1.9;
    text("━", colors.substring(color, color+3), 5 + desviationX, size*.4, size*.9); //Color de la caja
    text("▯", "000", -(size/5) + desviationX, size*.7, size); //caja
    text("🚆", "", desviationX + size/8, size*.6, size/4); //icono
};

for(i=0; i<3;i++) {
    card(100, i, i);
}

setInterval(_=>{
}, 999);
