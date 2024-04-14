const form = document.getElementById('myForm');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const url = form.getAttribute('action');

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();

                // Check if submission was successful
                if (data.success) {
                    alert('Form submitted successfully!');
                    form.reset(); // Reset the form
                } else {
                    alert('Error submitting form. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            }
        });