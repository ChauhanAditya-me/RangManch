
        document.addEventListener('DOMContentLoaded', function() {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const projects = document.querySelectorAll('.project');
        
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    btn.classList.add('active');
        
                    const filterValue = btn.getAttribute('data-filter');
        
                    projects.forEach(project => {
                        if (filterValue === 'all') {
                            project.style.display = 'block';
                        } else {
                            if (project.getAttribute('data-category') === filterValue) {
                                project.style.display = 'block';
                            } else {
                                project.style.display = 'none';
                            }
                        }
                    });
                });
            });
        });