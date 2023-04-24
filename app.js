var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
}
var app = new Framework7({
    id: 'gq.sizu.app',
    root: '#app',
    theme: theme,
    data: function() {
        return {
            user: {
                firstName: 'John',
                lastName: 'Doe',
            },
        };
    },
    methods: {
        helloWorld: function() {
            app.dialog.alert('Hello World!');
        },
    },
    routes: routes,
    popup: {
        closeOnEscape: true,
    },
    sheet: {
        closeOnEscape: true,
    },
    popover: {
        closeOnEscape: true,
    },
    popover: {
        closeOnEscape: true,
    },
    actions: {
        closeOnEscape: true,
    },
    vi: {
        placementId: 'pltd4o7ibb9rc653x14',
    },
    dialog: {
        title: 'My App',
        buttonOk: 'Done'
    },
});
window.onload = function() {
    WebPullToRefresh.init({
        loadingFunction: exampleLoadingFunction
    });
};
var exampleLoadingFunction = function() {
    location.reload();
};
app.dialog.confirm("Subscribe to our channel to get notifications in time.", "InstaTechHD", function() {
    window.location.href = "https://youtube.com/instatechhd";
});