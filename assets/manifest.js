let webManifest = {
    "name": "mObywatel",
    "short_name": "mObywatel",
    "theme_color": "#f5f6fb",
    "background_color": "#f5f6fb",
    "display": "standalone",
    "icons": [
        {
            "src": "icons/logo75x75.png",
            "sizes": "75x75",
            "type": "image/png",
            "purpose": "any maskable"
        }
    ]
};

let manifestElem = document.createElement('link');
manifestElem.setAttribute('rel', 'manifest');
manifestElem.setAttribute('href', 'data:application/manifest+json;base64,' + btoa(JSON.stringify(webManifest)));
document.head.prepend(manifestElem);