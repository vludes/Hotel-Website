document.addEventListener('DOMContentLoaded', function () {
    const url = window.location.origin + window.location.pathname,
        destinationSelect = document.getElementById('destination-select');

    fetchDestinations();

    async function fetchDestinations() {
        try {
            const response = await fetch(`${url}mock_data_locations.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            populateDestinationSelect(data);
        } catch (error) {
            console.error("Error fetching destinations:", error);
        }
    }

    function populateDestinationSelect(cities) {
        cities.forEach(item => {
            const option = document.createElement('option');
            option.value = item.city;
            option.textContent = `Oscar's Hotel ${item.city}`;
            destinationSelect.appendChild(option);
        });
    }
});