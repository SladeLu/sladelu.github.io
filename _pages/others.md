---
permalink: /others/
title: "Others"
excerpt: ""
author_profile: true
---

<html>
<head>
  <meta charset="utf-8" />
  <title>Map Centered Marker with Image Popup</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Leaflet CSS -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <style>
    .map-module-container {
      display: flex;
      flex-direction: row;
      height: 500px;
      border: 1px solid #ccc;
      overflow: hidden;
    }
    .map-module-sidebar {
      width: 225px;
      padding: 15px;
      box-shadow: 2px 0 4px rgba(0,0,0,0.1);
      background: #f9f9f9;
      overflow-y: auto;
    }
    .map-module-map {
      flex: 1;
      height: 100%;
      width: 225px;
    }
    .popup-image {
      max-width: 82.5%;
      height: auto;
      display: block;
      margin: 10px auto;
    }
    .popup-text {
      font-size: 14px;
      margin-top: 8px;
      color: #333;
    }
    .leaflet-popup-content {
      margin: 0;
      padding: 0;
      text-align: center;
    }
    .leaflet-control-attribution,
    .leaflet-control-container .leaflet-control-logo {
      display: none !important;
    }
    .location-group {
      margin-bottom: 1rem;
    }
    .location-group h4 {
      margin-bottom: 0.5rem;
      font-size: 16px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 4px;
    }
    .location-item {
      cursor: pointer;
      padding: 6px 8px;
      border-bottom: 1px solid #ddd;
    }
    .location-item:hover {
      background-color: #eee;
    }
  </style>
</head>
<body>

<div class="map-module-container">
  <div class="map-module-sidebar">
    <h3>Locations</h3>
    <div id="location-list"></div>
  </div>
  <div id="map" class="map-module-map"></div>
</div>

<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script>
  const locationsByYear = {
    2024: [
      {
        coords: [22.304361, 114.180621],
        name: 'The Hong Kong Polytechnic University',
        description: 'The Hong Kong Polytechnic University is a public university located in Hung Hom, Hong Kong.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Hkpolyu.jpg',
        color: 'red'
      }
    ],
    2025: [
      {
        coords: [22.302711, 114.177216],
        name: 'Hung Hom Station',
        description: 'Hung Hom Station is a major railway terminus in Kowloon, Hong Kong.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Hung_Hom_station_2021_10.jpg',
        color: 'blue'
      }
    ]
  };

  const map = L.map('map').setView([22.304361, 114.180621], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
  }).addTo(map);

  const locationListEl = document.getElementById('location-list');

  Object.entries(locationsByYear).forEach(([year, locations]) => {
    const group = document.createElement('div');
    group.className = 'location-group';

    const heading = document.createElement('h4');
    heading.textContent = year;
    group.appendChild(heading);

    locations.forEach((loc, index) => {
      const marker = L.circleMarker(loc.coords, {
        radius: 8,
        fillColor: loc.color,
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      }).addTo(map);

      const popupContent = `
        <div style="width:300px;">
          <img class="popup-image" src="${loc.imageUrl}" alt="${loc.name}" />
          <div class="popup-text">${loc.description}</div>
        </div>
      `;

      marker.bindPopup(popupContent);
      if (year === "2024" && index === 0) marker.openPopup();

      const item = document.createElement('div');
      item.className = 'location-item';
      item.textContent = loc.name;
      item.onclick = () => {
        map.setView(loc.coords, 15);
        marker.openPopup();
      };
      group.appendChild(item);
    });

    locationListEl.appendChild(group);
  });
</script>

</body>
</html>





## My Mountain Hiking Adventures
### 2024

<table>
  <tr>
    <td style="text-align: center;">
      <img src="/images/Mount_SGN_II.jpg" alt="Mount Siguniang II Peak" style="width: 80%; max-width: 400px;">
      <figcaption>Mount Siguniang II Peak, Sichuan, China (5276m)</figcaption>
    </td>
    <td style="text-align: center;">
      <img src="/images/ABC.jpg" alt="Annapurna Base Camp" style="width: 80%; max-width: 400px;">
      <figcaption>Annapurna Base Camp (A.B.C), Nepal (4130m)</figcaption>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;">
      <img src="https://drive.google.com/file/d/1Hnd-6puf5CC6ky2qej_VPhJwkSOiSPgl/view?usp=drive_link" alt="Example 1" style="width: 80%; max-width: 400px;">
      <figcaption>Example 1 Caption</figcaption>
    </td>
    <td style="text-align: center;">
      <img src="https://drive.google.com/uc?export=view&id=1Hnd-6puf5CC6ky2qej_VPhJwkSOiSPgl" alt="Example 2" style="width: 80%; max-width: 400px;">
      <figcaption>Example 2 Caption</figcaption>
    </td>
  </tr>
</table>

