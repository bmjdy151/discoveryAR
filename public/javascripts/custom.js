$(document).ready(()=>{ 
  const box = document.getElementById("box");
  const sphere = document.querySelector("a-sphere");

  const shiftHue = (hue) => (hue + 1) % 360;
  let hue = 0;

  const animate = () => {
    hue = shiftHue(hue);
    const color = `hsl(${hue},100%,50%)`;
    sphere.setAttribute("color",color);

    const position = `1 ${7.5+ Math.sin(Date.now()/1000)} -2`;
    sphere.setAttribute("position", position);

    requestAnimationFrame(animate);
  }

  box.addEventListener("mouseenter",function(){
    box.setAttribute("scale",{
      x:0.5,
      y:2,
      z:5.9
    });
  });

  requestAnimationFrame(animate);
  
})