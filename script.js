document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        var navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(2, 12, 27, 0.9)';
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // Project badges interaction
    const projectBadges = document.querySelectorAll('.project-badge');
    projectBadges.forEach(badge => {
        badge.addEventListener('click', function() {
            // Close all other open badges
            projectBadges.forEach(otherBadge => {
                if (otherBadge !== badge && otherBadge.classList.contains('active')) {
                    otherBadge.classList.remove('active');
                }
            });
            
            // Toggle the clicked badge
            this.classList.toggle('active');
        });
    });

    // Sysmon Event ID transformation
    const sysmonIdSection = document.querySelector('h1#sysmon-event-ids + ul');
    if (sysmonIdSection) {
        const sysmonIds = sysmonIdSection.querySelectorAll('li');
        sysmonIds.forEach(li => {
            const text = li.textContent;
            const [id, description] = text.split(': ');
            const span = document.createElement('span');
            span.className = 'event-id';
            span.textContent = id;
            const tooltip = document.createElement('span');
            tooltip.className = 'tooltip';
            tooltip.textContent = description;
            span.appendChild(tooltip);
            li.textContent = '';
            li.appendChild(span);
        });
    }
});
    
        
        
        