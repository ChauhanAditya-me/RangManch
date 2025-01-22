$(document).ready(function() {
    // Initialize stories array from localStorage
    let stories = JSON.parse(localStorage.getItem('stories')) || [];
    
    // Display existing stories
    displayStories();

    // Handle form submission
    $('#storyForm').on('submit', function(e) {
        e.preventDefault();
        
        const story = {
            id: Date.now(),
            title: $('#storyTitle').val(),
            author: $('#authorName').val(),
            content: $('#storyContent').val(),
            date: new Date().toLocaleDateString()
        };

        // Add story to array
        stories.push(story);
        
        // Save to localStorage
        localStorage.setItem('stories', JSON.stringify(stories));
        
        // Reset form and display stories
        this.reset();
        displayStories();
    });

    // Display stories function
    function displayStories() {
        const storiesHTML = stories.map(story => `
            <div class="story-card">
                <h3>${story.title}</h3>
                <p class="author">By: ${story.author}</p>
                <p class="date">${story.date}</p>
                <p class="content">${story.content}</p>
            </div>
        `).join('');
        
        $('#storiesList').html(storiesHTML);
    }

    // Email all stories
    $('#emailAllBtn').click(function() {
        const emailBody = stories.map(story => `
            Story: ${story.title}
            Author: ${story.author}
            Date: ${story.date}
            
            ${story.content}
            
            ----------------------
        `).join('\n');

        const mailtoLink = `mailto:?subject=RangManch Stories&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
    });

    $(document).ready(function() {
        displayStories();
    
        $('#storyForm').on('submit', function(e) {
            e.preventDefault();
            
            const story = {
                id: Date.now(),
                title: $('#storyTitle').val(),
                author: $('#authorName').val(),
                content: $('#storyContent').val(),
                date: new Date().toLocaleDateString()
            };
    
            let stories = JSON.parse(localStorage.getItem('stories') || '[]');
            stories.push(story);
            localStorage.setItem('stories', JSON.stringify(stories));
    
            displayStories();
            this.reset();
        });
    
        function displayStories() {
            const stories = JSON.parse(localStorage.getItem('stories') || '[]');
            const container = $('#storiesContainer');
            
            if (stories.length === 0) {
                container.html('<p class="no-stories">No stories shared yet.</p>');
                return;
            }
    
            const storiesHTML = stories.map(story => `
                <div class="story-item" data-id="${story.id}">
                    <i class="fa fa-times delete-story"></i>
                    <h3>${story.title}</h3>
                    <div class="story-meta">
                        <span>By: ${story.author}</span>
                        <span>Posted: ${story.date}</span>
                    </div>
                    <div class="story-content">
                        ${story.content}
                    </div>
                </div>
            `).join('');
    
            container.html(storiesHTML);
    
            $('.delete-story').click(function() {
                const id = $(this).parent().data('id');
                deleteStory(id);
            });
        }
    
        function deleteStory(id) {
            let stories = JSON.parse(localStorage.getItem('stories') || '[]');
            stories = stories.filter(story => story.id !== id);
            localStorage.setItem('stories', JSON.stringify(stories));
            displayStories();
        }
    });
});