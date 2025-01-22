$(document).ready(function() {
    // Initialize
    displayStories();

    // Form submission
    $('#storyForm').on('submit', function(e) {
        e.preventDefault();
        
        const title = $('#storyTitle').val().trim();
        const author = $('#authorName').val().trim();
        const content = $('#storyContent').val().trim();

        if (!title || !author || !content) {
            alert('Please fill all fields');
            return;
        }

        const story = {
            id: Date.now(),
            title: title,
            author: author,
            content: content,
            date: new Date().toLocaleDateString()
        };

        let stories = JSON.parse(localStorage.getItem('stories') || '[]');
        stories.push(story);
        localStorage.setItem('stories', JSON.stringify(stories));

        this.reset();
        displayStories();
    });

    // Email button click
    $('#emailBtn').click(function() {
        $('#emailPopup').fadeIn();
        setTimeout(function() {
            $('#emailPopup').fadeOut();
        }, 2000);
    });

    // Close popup on click
    $('.close-popup').click(function() {
        $('#emailPopup').fadeOut();
    });

    // Close popup when clicking outside
    $(window).click(function(e) {
        if ($(e.target).is('.popup')) {
            $('#emailPopup').fadeOut();
        }
    });

    // Display stories function
    function displayStories() {
        let stories = JSON.parse(localStorage.getItem('stories') || '[]');
        const container = $('#storiesContainer');

        if (stories.length === 0) {
            container.html('<p>No stories shared yet.</p>');
            return;
        }

        // Sort by newest first
        stories.sort((a, b) => b.id - a.id);

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

        // Delete story handler
        $('.delete-story').click(function() {
            const id = parseInt($(this).parent().data('id'));
            let stories = JSON.parse(localStorage.getItem('stories') || '[]');
            stories = stories.filter(story => story.id !== id);
            localStorage.setItem('stories', JSON.stringify(stories));
            displayStories();
        });
    }
});