---
permalink: /others/
title: "Others"
excerpt: ""
author_profile: true
---

<html>
<head>
  <meta charset="utf-8">
  <title>Google Map Example</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    #map {
      height: 500px;
      width: 100%;
    }
  </style>
</head>
<body>

<h2>Google Map</h2>
<div id="map"></div>

<!-- Load Google Maps API -->
<script async
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>

<script>
  function initMap() {
    const center = { lat: 37.7749, lng: -122.4194 }; // San Francisco
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: center,
    });

    const marker = new google.maps.Marker({
      position: center,
      map: map,
      title: "Hello San Francisco!",
    });
  }
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

