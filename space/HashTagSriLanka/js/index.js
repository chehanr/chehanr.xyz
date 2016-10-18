var feed = new Instafeed({
    get: 'tagged',
    tagName: 'srilanka',
	sortBy: 'most-liked',
    userId: 3614616,
    accessToken: '3614616.467ede5.abc0b5a861d34365a5c8dd8db0163c4b',
    limit: '100',
    resolution: 'low_resolution',
    filter: function(image) {
        var blockedUsernames = [
           'blockeduser1',
           'blockeduser2'
        ];

        // check for blocked users
        for (var i = 0; i < blockedUsernames.length; i++) {
            if (image.user.username === blockedUsernames[i]) {
                return false;
            }
        }

        return true;
    },
    after: function() {
        var images = $('#instafeed').find('a');
    }
});

feed.run();

// loads more when scrolled down
$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        feed.next();
    }

});

// https://googledrive.com/host/0B_Cm66eNqyNhem43NVBuM1UwQnM / https://0d8d7c22d83acc18850b7f1b3ea9303289afebb7.googledrive.com/host/0B_Cm66eNqyNhem43NVBuM1UwQnM -index.js
// https://googledrive.com/host/0B_Cm66eNqyNhUXBwUmg4TDJQYkE / https://a6047f5b668bdfd0f69f18fe7c59ef6384f283cb.googledrive.com/host/0B_Cm66eNqyNhUXBwUmg4TDJQYkE / https://github.com/necolas/normalize.css/blob/master/normalize.css -normalize.css
// https://googledrive.com/host/0B_Cm66eNqyNhMTBhbmRNbmlqODA / https://5564071a6fce0a88df40f7119ad921d2a2c190ab.googledrive.com/host/0B_Cm66eNqyNhMTBhbmRNbmlqODA -style.css
