Package.describe({
  summary: "Smart package for font-awesome"
});

Package.on_use(function (api) {
  api.use([],'client');
  api.add_files([
    'font/FontAwesome.otf'
    , 'font/fontawesome-webfont.eot'
    , 'font/fontawesome-webfont.svg'
    , 'font/fontawesome-webfont.ttf'
    , 'font/fontawesome-webfont.woff'
  ], 'client');
});