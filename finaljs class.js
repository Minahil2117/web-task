const students = [
    { id: 1, name: "Ali Khan", marks: 85, subject: "Mathematics" },
    { id: 2, name: "Amna Khan", marks: 65, subject: "Science" },
    { id: 3, name: "Fatima Khan", marks: 75, subject: "English" },
    { id: 4, name: "Asad Khan", marks: 95, subject: "Computer Science" },
];

const studentContainer = document.getElementById("student-container");

const studentCards = students.map((student) => {
    const status = student.marks >= 70 ? "Pass" : "Fail";
    const statusClass = student.marks >= 70 ? "pass" : "fail";

    return `
        <div class="student-card">
            <h2>${student.name}</h2>
            <p>Subject: ${student.subject}</p>
            <p>Marks: ${student.marks}</p>
            <p class="${statusClass}">${status}</p>
        </div>
    `;
});

studentContainer.innerHTML = studentCards.join("");