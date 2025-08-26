$(document).ready(function(){
    $(".allBtn").click(function(){
        
    })
})
 document.addEventListener("DOMContentLoaded", function () {
        const filterButtons = document.querySelectorAll(".filterBar > div");
        const items = document.querySelectorAll(".itemBox");

        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                const className = button.classList[0]; 
                let category = "";

                switch (className) {
                    case "allBtn":
                        category = "all";
                        break;
                    case "kichenBtn":
                        category = "kitchen";
                        break;
                    case "bathBtn":
                        category = "bath";
                        break;
                    case "ecoBtn":
                        category = "eco";
                        break;
                }

            
                items.forEach(item => {
                    const itemCategory = item.getAttribute("data-category");

                    if (category === "all" || itemCategory === category) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                });
            });
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".itemBox");
    const itemsPerPage = 9;
    const paginationContainer = document.querySelector(".numButton");
    let currentPage = 1;

    function showPage(page) {
        items.forEach((item, index) => {
            item.style.display = "none";

            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            if (index >= start && index < end) {
                item.style.display = "block";
            }
        });
    }

    function setupPagination() {
        const totalPages = Math.ceil(items.length / itemsPerPage);
        paginationContainer.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            btn.classList.add("pageBtn");
            if (i === currentPage) btn.classList.add("active");

            btn.addEventListener("click", () => {
                currentPage = i;
                showPage(currentPage);
                document.querySelectorAll(".pageBtn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
            });

            paginationContainer.appendChild(btn);
        }
    }

    showPage(currentPage);
    setupPagination();
});