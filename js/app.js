/* ==========================================
   Personal Expense & Budget Monitoring System
   app.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Expense Monitor Loaded Successfully!");

    /* ===============================
       Search Function
    =============================== */

    const searchBox = document.querySelector(".search-box");

    if (searchBox) {

        searchBox.addEventListener("keyup", function () {

            let value = this.value.toLowerCase();

            let rows = document.querySelectorAll("tbody tr");

            rows.forEach(function (row) {

                row.style.display =
                    row.innerText.toLowerCase().includes(value)
                        ? ""
                        : "none";

            });

        });

    }

    /* ===============================
       Delete Buttons
    =============================== */

    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            let confirmDelete = confirm(
                "Are you sure you want to delete this record?"
            );

            if (confirmDelete) {

                this.closest("tr").remove();

                alert("Record deleted successfully.");

            }

        });

    });

    /* ===============================
       Edit Buttons
    =============================== */

    const editButtons = document.querySelectorAll(".edit-btn");

    editButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert("Edit feature will be implemented in the backend.");

        });

    });

    /* ===============================
       Save Buttons
    =============================== */

    const saveButtons = document.querySelectorAll(".btn-primary");

    saveButtons.forEach(function (button) {

        button.addEventListener("click", function (e) {

            e.preventDefault();

            alert("Data saved successfully!");

        });

    });

    /* ===============================
       Print Report
    =============================== */

    document.querySelectorAll(".action-btn").forEach(function (button) {

        button.addEventListener("click", function () {

            const text = this.innerText.trim();

            if (text.includes("Print")) {

                window.print();

            }

            if (text.includes("Export")) {

                alert("PDF Export will be available in the backend.");

            }

            if (text.includes("Download")) {

                alert("CSV Download will be available in the backend.");

            }

        });

    });

    /* ===============================
       Expense Chart
    =============================== */

    const expenseChart = document.getElementById("expenseChart");

    if (expenseChart) {

        new Chart(expenseChart, {

            type: "bar",

            data: {

                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun"
                ],

                datasets: [

                    {

                        label: "Expenses",

                        data: [
                            9000,
                            12000,
                            10000,
                            15000,
                            11000,
                            14550
                        ]

                    }

                ]

            },

            options: {

                responsive: true,

                plugins: {

                    legend: {

                        display: true

                    }

                }

            }

        });

    }

    /* ===============================
       Category Chart
    =============================== */

    const categoryChart = document.getElementById("categoryChart");

    if (categoryChart) {

        new Chart(categoryChart, {

            type: "pie",

            data: {

                labels: [

                    "Food",
                    "Transport",
                    "Utilities",
                    "Shopping",
                    "Others"

                ],

                datasets: [

                    {

                        data: [

                            40,
                            20,
                            15,
                            15,
                            10

                        ]

                    }

                ]

            },

            options: {

                responsive: true

            }

        });

    }

    /* ===============================
       Income vs Expense Report
    =============================== */

    const incomeExpenseChart =
        document.getElementById("incomeExpenseChart");

    if (incomeExpenseChart) {

        new Chart(incomeExpenseChart, {

            type: "line",

            data: {

                labels: [

                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun"

                ],

                datasets: [

                    {

                        label: "Income",

                        data: [

                            30000,
                            32000,
                            35000,
                            38000,
                            36000,
                            40000

                        ]

                    },

                    {

                        label: "Expenses",

                        data: [

                            15000,
                            18000,
                            17000,
                            19000,
                            18500,
                            14550

                        ]

                    }

                ]

            },

            options: {

                responsive: true

            }

        });

    }

    /* ===============================
       Expense Category Report
    =============================== */

    const expenseCategoryChart =
        document.getElementById("expenseCategoryChart");

    if (expenseCategoryChart) {

        new Chart(expenseCategoryChart, {

            type: "doughnut",

            data: {

                labels: [

                    "Food",
                    "Transportation",
                    "Utilities",
                    "Entertainment",
                    "Shopping"

                ],

                datasets: [

                    {

                        data: [

                            35,
                            20,
                            15,
                            10,
                            20

                        ]

                    }

                ]

            },

            options: {

                responsive: true

            }

        });

    }

});
