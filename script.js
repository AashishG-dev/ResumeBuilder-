document.getElementById('resume-form').addEventListener('input', updateResume);
document.getElementById('add-education').addEventListener('click', addEducationRow);
document.getElementById('add-experience').addEventListener('click', addExperienceRow);
document.getElementById('clear-form').addEventListener('click', clearForm);

function updateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;

    document.getElementById('resume-output').innerHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Summary:</strong> ${summary}</p>
    `;
    document.getElementById('resume-output').classList.add('active');
}

function addEducationRow() {
    const educationSection = document.getElementById('education-section');
    const newRow = document.createElement('div');
    newRow.classList.add('education-row');
    newRow.innerHTML = `
        <label for="school">School:</label>
        <input type="text" name="school" class="school">
        <label for="degree">Degree:</label>
        <input type="text" name="degree" class="degree">
    `;
    educationSection.appendChild(newRow);
}

function addExperienceRow() {
    const experienceSection = document.getElementById('experience-section');
    const newRow = document.createElement('div');
    newRow.classList.add('experience-row');
    newRow.innerHTML = `
        <label for="company">Company:</label>
        <input type="text" name="company" class="company">
        <label for="role">Role:</label>
        <input type="text" name="role" class="role">
    `;
    experienceSection.appendChild(newRow);
}

function clearForm() {
    document.getElementById('resume-form').reset();
    document.getElementById('resume-output').innerHTML = '';
    document.getElementById('resume-output').classList.remove('active');
}
