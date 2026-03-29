document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.view-btn');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const destination = button.getAttribute('data-url');
            
            // Add a "whimsical" exit animation to the body
            document.body.style.opacity = '0';
            document.body.style.transform = 'scale(0.98)';
            document.body.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';

            // Delay the actual navigation slightly to let the animation play
            setTimeout(() => {
                window.location.href = destination;
            }, 500);
        });
    });
});