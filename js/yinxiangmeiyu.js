var header = document.getElementById("header");
var header_height = header.offsetHeight;
var header_div = header.getElementsByTagName("div")[0];
var header_span = header.getElementsByTagName("span")[0];
header_div.style.margin = (header_height - header_div.offsetHeight) / 2 + "px 0px";
header_span.style.margin = (header_height - header_span.offsetHeight) / 2 + "px 0px";
header_span.onclick = function () {
	location.href = "index.html"
}