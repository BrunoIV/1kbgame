//c = document.getElementById('c') = canvas
var ctx = c.getContext`2d`,

text = (txt, color, x, y, size) => {
    ctx.fillStyle = "#" + color;
    ctx.font = size + "px Monospace";
    ctx.textBaseline = "top"; //alphabetic by default
    ctx.textAlign = "left"; // Alinea el texto a la izquierda del punto de inicio
    ctx.fillText(txt, x, y); 
},

card=(size)=>{
    var multiplier = (size/100);
    text("━", "f00", 3, -31 * multiplier, size);
    text("▯", "000", -(size/5), -(size/16.6), size);
    text("🚆", "", 13*multiplier, 40*multiplier, size/4); //icon
};

card(100);

setInterval(_=>{
}, 999);