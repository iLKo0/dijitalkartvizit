/**
 * Digital Business Card Script
 * Handle accordion toggles and clipboard copy
 */

// Toggle Info Accordion
function toggleInfo(element) {
    // Check if it's already active
    const isActive = element.classList.contains('active');
    
    // Close other open boxes
    document.querySelectorAll('.info-box').forEach(box => {
        box.classList.remove('active');
    });
    
    // Toggle current box
    if (!isActive) {
        element.classList.add('active');
    }
}

// Copy Text to Clipboard
async function copyText(text, event) {
    // Prevent event bubbling to parent onclick (accordion toggle)
    if (event) {
        event.stopPropagation();
    }
    
    try {
        await navigator.clipboard.writeText(text);
        
        // Visual feedback
        const btn = (event.currentTarget || event.target).closest('.copy-btn');
        const icon = btn.querySelector('i');
        const originalClass = icon.className;
        
        icon.className = 'fa-solid fa-check';
        btn.style.color = '#2ecc71';
        
        setTimeout(() => {
            icon.className = originalClass;
            btn.style.color = '';
        }, 2000);
        
    } catch (err) {
        console.error('Kopyalama başarısız:', err);
    }
}

// Ensure the profile image loads gracefully
document.querySelector('.profile-card__img img').addEventListener('load', function() {
    this.style.opacity = '1';
});

// Language Toggle
function setLanguage(lang) {
    const body = document.body;
    body.classList.remove('lang-tr', 'lang-en');
    body.classList.add('lang-' + lang);
    
    // Update active button state
    const btnTr = document.getElementById('btn-tr');
    const btnEn = document.getElementById('btn-en');
    if (btnTr && btnEn) {
        btnTr.classList.toggle('active', lang === 'tr');
        btnEn.classList.toggle('active', lang === 'en');
    }
}

// QR Toggle
function toggleQR() {
    document.body.classList.toggle('show-qr');
}