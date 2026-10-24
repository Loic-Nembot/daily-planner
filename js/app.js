console.log("app.js is loaded");

    /* const task = {
        id : 1,
        startTime : "08:00",
        endTime : "08:30",
        name : "Warm-up",
        done : false,
        description : "",
        donAt: null
    };
    */
    const tasks = [
        {
            id: 1,
            startTime: "08:00",
            endTime: "08:30",
            name: "Warm-up",
            description: "",
            done: true,
            doneAt: null,
        },

        {
            id: 2,
            startTime: "08:35",
            endTime: "09:30",
            name: "rennen",
            description: "",
            done: false,
            doneAt: null,
        },

        {
            id: 3,
            startTime: "09:35",
            endTime: "10:30",
            name: "kinder in die Kita",
            description: "",
            done: false,
            doneAt: null,
        }
    ];

    const countDone = tasks => tasks.filter(task => task.done).length;

    function renderTable() {
 
        const app = document.getElementById("app");
        app.replaceChildren();

        const table = document.createElement("table");

        const headerRow = document.createElement("tr");
         for(const title of ["Nr.", " Time ", " Activity ", " State "]) {
            const th = document.createElement("th");
            th.textContent = title;
            headerRow.append(th);
         }
         table.append(headerRow);
         app.append(table);
    }
 renderTable();
 console.log(countDone(tasks));