'use strict';

let noticeList = document.getElementById("notice-list");

document.getElementById("added").addEventListener('click', async function () {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    if (!title || !description) {
        alert("Please fill all fields");
        return;
    }

    try {
        const response = await fetch("http://localhost:9000/notice/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, description })
        });

        const data = await response.json();
        console.log("Added:", data);

        document.getElementById("title").value = "";
        document.getElementById("description").value = "";

        fetchNotices();

    } catch (error) {
        console.error("Error adding notice:", error);
    }
});

function fetchNotices() {
    fetch('http://localhost:9000/notice/show')
        .then(response => response.json())
        .then(data => {
            console.log("All Notices:", data);

            noticeList.innerHTML = "";

            data.forEach(notice => {
                const noticeItem = document.createElement("div");
                noticeItem.classList.add("card", "mb-3");

                noticeItem.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${notice.title}</h5>
                        <p class="card-text">${notice.description}</p>
                        <p class="card-text"><small class="text-muted">Created at: ${new Date(notice.created_at).toLocaleString()}</small></p>
                    </div>
                `;

                noticeList.appendChild(noticeItem);
            });
        })
        .catch(err => console.error(err));
}

fetchNotices();