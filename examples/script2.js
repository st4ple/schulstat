var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Frauen','Fremdsprachige','Ausländer'];

//Data
var d = [
              [
            {axis:"Besondere Klassen Primarstufe",value:0.337016575},
            {axis:"Besondere Klassen Sekundarstufe I",value:0.404157044},
            {axis:"Realklassen RILZ3+ und integrierte Sonderschulung",value:0.444624673},
            {axis:"Regelklasse Primarstufe",value:0.491207154},
            {axis:"Sekundarklassen und spezielle Sekundarklassen",value:0.524577227},
            {axis:"Vorschulstufe",value:0.488516054},
            {axis:"Sekundarstufe I ohne Selektion",value:0.430016863}
		  ],[
            {axis:"Besondere Klassen Primarstufe",value:0.450276243},
            {axis:"Besondere Klassen Sekundarstufe I",value:0.441108545},
            {axis:"Realklassen RILZ3+ und integrierte Sonderschulung",value:0.273317113},
            {axis:"Regelklasse Primarstufe",value:0.209202683},
            {axis:"Sekundarklassen und spezielle Sekundarklassen",value:0.114937993},
            {axis:"Vorschulstufe",value:0.231009546},
            {axis:"Sekundarstufe I ohne Selektion",value:0.261382799}
		  ],[  
            {axis:"Besondere Klassen Primarstufe",value:0.370165746},
            {axis:"Besondere Klassen Sekundarstufe I",value:0.376443418},
            {axis:"Realklassen RILZ3+ und integrierte Sonderschulung",value:0.198432009},
            {axis:"Regelklasse Primarstufe",value:0.148770492},
            {axis:"Sekundarklassen und spezielle Sekundarklassen",value:0.082243517},
            {axis:"Vorschulstufe",value:0.16031241},
            {axis:"Sekundarstufe I ohne Selektion",value:0.251264755}
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("What % of owners use a specific service in a week");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	