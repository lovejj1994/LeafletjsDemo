"use strict";
var demo = (function () {

	//设置地图中心和缩放级别
	var mymap = L.map('mapid').setView([39.907372, 116.391344], 18);

	//添加图层
	L.tileLayer('http://map.zhtu.net:8080/r3t-basemap/{z}/{x}/{y}/tile.jpg', {
		maxZoom: 18
	}).addTo(mymap);

	//显示比例尺
	L.control.scale({
		position: 'topright'
	}).addTo(mymap);

	let onMapDblClick = function (e) {
		//经度
		let lng = e.latlng.lng
		//纬度
		let lat = e.latlng.lat
		//声明一个Marker
		let marker = L.marker([lat, lng]).addTo(mymap);

		marker.bindPopup('经度: ' + lng + '<br/>纬度: ' + lat).openPopup();
	};

	//添加双击事件
	mymap.on('dblclick', onMapDblClick);

	return {
		mymap: mymap
	};
})();