function validateFields() {
    const name = document.getElementById('Name').value.trim();
    const email = document.getElementById('Email').value.trim();
    const message = document.getElementById('Message').value.trim();

    if (!name.match(/^[A-Za-z\s]{2,}$/)) {
        showNotification('error', 'Please enter a valid name (letters only)');
        return false;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        showNotification('error', 'Please enter a valid email address');
        return false;
    }

    if (message.length < 10) {
        showNotification('error', 'Message must be at least 10 characters long');
        return false;
    }

    return true;
}

function sendEmail() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000); 
    });
}

function showNotification(type, message) {
    const toast = document.querySelector('.custom-toast');
    const icon = toast.querySelector('i');
    const messageEl = toast.querySelector('.toast-message');

    toast.classList.remove('success', 'error', 'show');
    icon.classList.remove('fa-check-circle', 'fa-times-circle');

    if (type === 'success') {
        toast.classList.add('success');
        icon.classList.add('fa-check-circle');
    } else {
        toast.classList.add('error');
        icon.classList.add('fa-times-circle');
    }

    messageEl.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}


document.querySelector('form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    if (this.checkValidity() && validateFields()) {
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            await sendEmail();
            showNotification('success', 'Message sent successfully!');
            this.reset(); 
        } catch (error) {
            showNotification('error', 'Failed to send message. Please try again.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    } else {
        showNotification('error', 'Please fill all required fields correctly.');
    }
});

function print(x) {
  console.log(x + "is prime");
}
function isprime(x) {
  for (var i=2; i<x; i++) {
    if (x%i==0) {
      return false;
    }
  }

  return print(x);
}
