function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const issueType = document.getElementById('issueType').value;
    const description = document.getElementById('description').value.trim();
    let errors = [];

    // Check if name is provided and contains only letters and numbers
    if (!name || !/^[a-zA-Z0-9]+$/.test(name)) {
        errors.push('Name is required and can only contain letters and numbers (no spaces).');
    }

    // Check if email is provided and valid
    if (!email) {
        errors.push('Email is required.');
    } else {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            errors.push('Please enter a valid email address.');
        }
    }

    // Check if issue type is selected
    if (!issueType) {
        errors.push('Please select an issue type.');
    }

    // Check if description is provided and contains only letters and numbers
    if (!description || !/^[a-zA-Z0-9]+$/.test(description)) {
        errors.push('Description is required and can only contain letters and numbers (no spaces).');
    }

    // Show errors if any
    if (errors.length > 0) {
        alert(errors.join('\n'));
        return false;
    }

    // Show success message
    alert('Ticket submitted successfully. Thank you!');
    return true; // Allow form submission
}