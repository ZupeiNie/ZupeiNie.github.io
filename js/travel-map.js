function initAmapTravelMap() {
    const cityData = {
        "2025": [
            { name: "北京", lng: 116.4074, lat: 39.9042 },
            { name: "南昌", lng: 115.8582, lat: 28.682 },
            { name: "武汉", lng: 114.3054, lat: 30.5931 },
            { name: "广州", lng: 113.2644, lat: 23.1291 },
            { name: "福州", lng: 119.2965, lat: 26.0745 },
        ],
        "2024": [
            { name: "杭州", lng: 120.1551, lat: 30.2741 },
            { name: "南昌", lng: 115.8582, lat: 28.682 },
            { name: "南京", lng: 118.7969, lat: 32.0603 },
            { name: "呼和浩特", lng: 111.7519, lat: 40.8426 },
            { name: "乌兰察布", lng: 113.1338, lat: 41.0007 },
            { name: "广州", lng: 113.2644, lat: 23.1291 },
            { name: "武汉", lng: 114.3054, lat: 30.5931 },
            { name: "天津", lng: 117.2000, lat: 39.0842 },
            { name: "上海", lng: 121.4737, lat: 31.2304 },
        ],
        "2023": [
            { name: "南京", lng: 118.7969, lat: 32.0603 },
            { name: "郑州", lng: 113.6254, lat: 34.7466 },
            { name: "南昌", lng: 115.8582, lat: 28.682 },
            { name: "台州", lng: 121.4208, lat: 28.6564 },
            { name: "深圳", lng: 114.0579, lat: 22.5431 },
            { name: "香港", lng: 114.1694, lat: 22.3193 },
            { name: "杭州", lng: 120.1551, lat: 30.2741 },
            { name: "上海", lng: 121.4737, lat: 31.2304 },
            { name: "成都", lng: 104.0665, lat: 30.5728 },
            { name: "重庆", lng: 106.5516, lat: 29.5630 },
            { name: "宁波", lng: 121.5503, lat: 29.8746 },
            { name: "舟山", lng: 122.2072, lat: 29.9854 },
            { name: "石家庄", lng: 114.5149, lat: 38.0428 },
            { name: "乌鲁木齐", lng: 87.6168, lat: 43.8256 },
            { name: "克拉玛依", lng: 84.8892, lat: 45.5799 },
            { name: "伊犁", lng: 81.3245, lat: 43.9133 },
            { name: "阿勒泰", lng: 88.1387, lat: 47.8485 },
            { name: "长沙", lng: 112.9388, lat: 28.2282 },
            { name: "嘉兴", lng: 120.7558, lat: 30.7461 },
        ],
        "2022": [
            { name: "南昌", lng: 115.8582, lat: 28.682 },
            { name: "北京", lng: 116.4074, lat: 39.9042 },
            { name: "杭州", lng: 120.1551, lat: 30.2741 },
        ],
        "2021": [
            { name: "宁波", lng: 121.5503, lat: 29.8746 },
            { name: "上海", lng: 121.4737, lat: 31.2304 },
            { name: "杭州", lng: 120.1551, lat: 30.2741 },
            { name: "丽水", lng: 119.9228, lat: 28.4672 },
            { name: "武汉", lng: 114.3054, lat: 30.5931 },
            { name: "无锡", lng: 120.3119, lat: 31.4912 },
        ]
    };

    const map = new AMap.Map("mapContainer", {
        center: [108.9, 34.2],
        zoom: 4,
        mapStyle: "amap://styles/normal",
    });

    let markers = [];

    function render(year) {
        markers.forEach(m => map.remove(m));
        markers = [];

        const cities = cityData[year] || [];
        const bounds = new AMap.Bounds();

        cities.forEach(city => {
            const marker = new AMap.Marker({
                position: [city.lng, city.lat],
                title: city.name,
            });
            marker.setMap(map);
            markers.push(marker);
            bounds.extend([city.lng, city.lat]);
        });

        if (cities.length) map.setBounds(bounds);
    }

    const selector = document.getElementById("yearSelector");
    selector.onchange = () => render(selector.value);
    render(selector.value);
}
