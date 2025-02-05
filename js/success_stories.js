$(document).ready(function() {
    // Check if user is admin and show/hide form accordingly
    const isAdmin = localStorage.getItem('username') === 'admin';
    if (!isAdmin) {
        $('#storyForm .form-group, #storyForm .button-group').hide();
        $('#storyForm').prepend('<p class="admin-notice">Only administrators can add new stories.</p>');
    }

    displayStories();

    $('#storyForm').on('submit', function(e) {
        e.preventDefault();
        
        // Check again if user is admin before submitting
        if (!isAdmin) {
            alert('Only administrators can add stories.');
            return;
        }
        
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

    //---------------------Success Popup-------------------
    $('#emailBtn').click(function() {
        $('#emailPopup').fadeIn();
        setTimeout(function() {
            $('#emailPopup').fadeOut();
        }, 2000);
    });

    $('.close-popup').click(function() {
        $('#emailPopup').fadeOut();
    });

    $(window).click(function(e) {
        if ($(e.target).is('.popup')) {
            $('#emailPopup').fadeOut();
        }
    });

    function displayStories() {
        let stories = JSON.parse(localStorage.getItem('stories') || '[]');
        const container = $('#storiesContainer');
    
        if (stories.length === 0) {
            container.html('<p>No stories shared yet.</p>');
            return;
        }
    
        stories.sort((a, b) => b.id - a.id);
    
        const storiesHTML = stories.map(story => `
            <div class="story-item" data-id="${story.id}">
                <div class="story-actions">
                    <i class="fa fa-envelope email-story" title="Email this story"></i>
                    <i class="fa fa-trash delete-story" title="Delete story"></i>
                </div>
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
    
        //--------------------------------Delete story-------------------------------
        $('.delete-story').click(function() {
            const id = parseInt($(this).closest('.story-item').data('id'));
            let stories = JSON.parse(localStorage.getItem('stories') || '[]');
            stories = stories.filter(story => story.id !== id);
            localStorage.setItem('stories', JSON.stringify(stories));
            displayStories();
        });
    
        //---------------------------------Email story------------------------------------------
        $('.email-story').click(function() {
            const id = parseInt($(this).closest('.story-item').data('id'));
            const stories = JSON.parse(localStorage.getItem('stories') || '[]');
            const story = stories.find(s => s.id === id);
    
            if (story) {
                $('#emailPopup').fadeIn();
                setTimeout(() => {
                    $('#emailPopup').fadeOut();
                }, 2000);
            }
        });
    }
});