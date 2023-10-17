document.addEventListener("DOMContentLoaded", function () {
    const queryHistory = [];

    document.getElementById("pushdownButton").addEventListener("click", function () {
        const queryText = document.getElementById("queryTextarea").value.trim();

        const queryLogTableBody = document.getElementById("queryLogTableBody");

        if (queryText) {
            const shortenedQuery = queryText.length > 90 ? queryText.slice(0, 90) + "..." : queryText;
            queryHistory.push(shortenedQuery);

            const newRow = document.createElement("tr");
            const checkboxCell = document.createElement("td");
            const queryIDCell = document.createElement("td");
            const queryCell = document.createElement("td");
            const progressBarCells = [];
            const dummyButtonCell = document.createElement("td");

            for (let i = 0; i < 4; i++) {
                const progressBarCell = document.createElement("td");
                progressBarCell.innerHTML = `
                    <div class="progress">
                        <div class="progress-bar" style="width: 38%" role="progressbar" aria-valuenow="38"
                            aria-valuemin="0" aria-valuemax="100" aria-label="38% Complete">
                            <span class="visually-hidden">38% Complete</span>
                        </div>
                    </div>
                `;
                progressBarCells.push(progressBarCell);
            }

            const dummyButton = document.createElement("td");
            dummyButton.innerHTML = `
                <a href="#" class="btn btn-icon bg-transparent" aria-label="Button"
                    data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right"
                    data-bs-content="Right popover">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical"
                        width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                        <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                        <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    </svg>
                </a>
            `;

            checkboxCell.innerHTML = `<input type="checkbox" class="form-check-input" name="form-type[]" value="1">`;
            newRow.appendChild(checkboxCell);

            queryIDCell.textContent = temp_id;
            temp_id++;
            queryIDCell.style.textAlign = "center";
            newRow.appendChild(queryIDCell);

            queryCell.textContent = `${shortenedQuery}`;
            queryCell.style.backgroundColor = "#fcfdfe";
            newRow.appendChild(queryCell);

            for (let i = 0; i < 4; i++) {
                newRow.appendChild(progressBarCells[i]);
            }

            newRow.appendChild(dummyButtonCell);
            dummyButtonCell.appendChild(dummyButton);

            setTimeout(() => {
                queryLogTableBody.appendChild(newRow);
            }, 2000); 
            
        } else {
            queryLogTableBody.textContent = "No query available.";
        }

        // document.getElementById("queryTextarea").value = "";
    });
});
