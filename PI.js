var purpleInk = {
  color: "#32b1c3",
  drop: function (svg,type,x,y) {
    var shape = purpleInk[type][Math.floor(purpleInk[type].length * Math.random())];


    var drawn = d3.select(svg).append("svg:path")
    .attr("d",shape.d)
    .style("fill","none")
    .style("stroke",purpleInk.color)
    .style("stroke-width",2)
    .style("stroke-linecap","round")
    .style("stroke-dasharray",shape.length)
    .style("stroke-dashoffset",shape.length)
    .style("transform","translate("+ (x+shape.centerizeX) +"px,"+ (y+shape.centerizeY) +"px)");


    drawn.transition().duration(1000).style("stroke-dashoffset",0);

  },
  circle : [
    {
      d: "M28.3,37.7c0.3-0.1,0.2,0.4-0.1,0.6c-4,1.8-8.7,1.4-12.6-0.3	c-4-1.7-7.3-4.7-10-8.1c-0.9-1.1-1.7-2.3-2.3-3.7c-0.8-2-0.8-4.2-0.7-6.3c0.2-3.6,1-7.3,3.2-10.1C9,5.7,14.5,4.3,19.7,3.5	c3.9-0.6,8-1.1,11.6,0.4c3,1.2,5.4,3.6,6.9,6.5s2.1,6.1,2.2,9.3c0.1,5.2-1.2,10.5-4.2,14.8c-3,4.3-7.7,7.4-12.8,8.1",
      length: 127,
      centerizeX: -21,
      centerizeY: -20
    }
  ]
};
