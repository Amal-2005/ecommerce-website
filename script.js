document.addEventListener('DOMContentLoaded', function () {
    // Image Gallery Functionality
    const mainImage = document.querySelector('.main-image img');
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function () {
                mainImage.src = this.src;
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Add to Cart Animation and Notification
    const addToCartBtn = document.querySelector('.add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function () {
            animateButton(this);
            setTimeout(() => {
                showNotification('Product added to cart!');
            }, 150); // Ensure notification appears after animation
        });
    }

    // Wishlist Toggle and Notification
    const wishlistBtn = document.querySelector('.wishlist');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function () {
            this.classList.toggle('active');
            const message = this.classList.contains('active') ? 'Added to wishlist!' : 'Removed from wishlist!';
            showNotification(message);
        });
    }

    // Function to animate buttons
    function animateButton(button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    }

    // Function to show notifications
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 500);
        }, 2000);
    }
});
