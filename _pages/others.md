---
permalink: /others/
title: "Others"
excerpt: ""
author_profile: true
---
<html>
<head>
  <meta charset="utf-8" />
  <title>Leaflet Map with Image Popups</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Leaflet CSS -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <style>
    #map {
      height: 500px;
    }
    .popup-image {
      width: 400px;
      height: auto;
    }
  </style>
</head>
<body>

<h2>Interactive Map with Images</h2>
<div id="map"></div>

<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script>
  const map = L.map('map').setView([51.505, -0.09], 13);

  // OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Sample marker data: [latitude, longitude, image URL]
  const locations = [
    [51.505, -0.09, 'https://placekitten.com/300/200'],
    [51.51, -0.1, 'https://placebear.com/300/200'],
    [51.507, -0.08, 'https://placebeard.it/300x200']
  ];

  // Add each marker with image popup
  locations.forEach(([lat, lon, img]) => {
    L.marker([lat, lon])
      .addTo(map)
      .bindPopup(`<img class="popup-image" src="${img}" alt="Location Image" />`);
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

