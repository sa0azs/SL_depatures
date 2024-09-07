async function fetchDepartures() {
    try {
        const response = await fetch('https://transport.integration.sl.se/v1/sites/1461/departures?forecast=120&direction=1&line=471&transport=BUS');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('JSON Response:', data);  // Log the entire JSON response

        // Access the departures array
        const departures = data.departures || [];
        
        const departuresTableBody = document.getElementById('departures');
        departuresTableBody.innerHTML = '';  // Clear previous content
        
        if (departures.length === 0) {
            // If no departures are found, display a message
            const row = document.createElement('tr');
            row.innerHTML = `
                <td colspan="3">Inga avgångar</td>
            `;
            departuresTableBody.appendChild(row);
        } else {
            // Loop through each departure and create a table row
            departures.forEach(departure => {
                const lineId = departure.line.id;         // Access line ID
                const destination = departure.destination; // Access destination
                const displayTime = departure.display;    // Access display time

                // Create a table row
                const row = document.createElement('tr');

                // Insert cells into the row
                row.innerHTML = `
                    <td>${lineId}</td>
                    <td>${destination}</td>
                    <td>${displayTime}</td>
                `;

                // Append the row to the table body
                departuresTableBody.appendChild(row);
            });
        }

    } catch (error) {
        console.error('Fetch error: ', error);
        const departuresTableBody = document.getElementById('departures');
        departuresTableBody.innerHTML = '<tr><td colspan="3">Kunde inte ladda avgångar. Försök igen senare.</td></tr>';
    }
}

// Initial fetch when the page loads
fetchDepartures();

// Update data every minute (60,000 milliseconds)
setInterval(fetchDepartures, 60000);