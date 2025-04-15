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
    #map {
      height: 500px;
    }
    .popup-image {
      width: 250px;
      height: auto;
      display: block;
    }
  </style>
</head>
<body>

<h2>Map with Centered Pin and Image Popup</h2>
<div id="map"></div>

<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script>
  const centerCoords = [22.304361, 114.180621]; // Example: The HK PolyU

  const map = L.map('map').setView(centerCoords, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  const imageUrl = 'https://simple.wikipedia.org/wiki/Hong_Kong_Polytechnic_University#/media/File:Hkpolyu.jpg'; // Replace with your own image URL

  L.marker(centerCoords)
    .addTo(map)
    .bindPopup(`<img class="popup-image" src="${imageUrl}" alt="Location Image" />`);
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

