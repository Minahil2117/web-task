const students = [
    { id: 1, name: "Ali Khan", marks: 85, subject: "Mathematics" },
    { id: 2, name: "Amna Khan", marks: 65, subject: "Science" },
    { id: 3, name: "Fatima Khan", marks: 75, subject: "English" },
    { id: 4, name: "Asad Khan", marks: 95, subject: "Computer Science" },
];

const studentContainer = document.getElementById("student-container");

const studentCards = students.map((student, index) => {
    const status = student.marks >= 70 ? "Pass" : "Fail";
    const statusClass = student.marks >= 70 ? "pass" : "fail";

    return `
        <div class="student-card" style="animation-delay: ${index * 0.1}s">
            <span class="id-badge">ID: ${student.id}</span>
            <h2>${student.name}</h2>
            
            <div class="info-row">
                <span class="info-label">📚 Subject:</span>
                <span class="info-value">${student.subject}</span>
            </div>
            
            <div class="marks-display">
                ${student.marks} / 100
            </div>
            
            <div style="text-align: center;">
                <span class="status-badge ${statusClass}">
                    ${status === "Pass" ? "✓" : "✗"} ${status}
                </span>
            </div>
        </div>
    `;
});

studentContainer.innerHTML = studentCards.join("");