const endpoint = "http://ac.tetrahydro.radio/api/station/TetraHydroRadio";

function fetchUniqueViewers() {
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      const uniqueViewers = data.mounts[0].listeners.unique;
      document.getElementById("unique-viewers").textContent = uniqueViewers;
    })
    .catch(error => console.error("Error fetching data:", error));
}

fetchUniqueViewers()
setInterval(fetchUniqueViewers, 10000);
