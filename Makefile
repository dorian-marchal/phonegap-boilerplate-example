# Extract the translatable strings in www/locales/default/translation.json
# Require i18next-parser : npm install -g i18next-parser
.PHONY: i18n-extract
i18n-extract:
	node_modules/i18next-parser/bin/cli.js www/js -k "::" -s ":::" -f "__.t" -o www/locales -r -l default
	@rm -f www/locales/default/translation_old.json

# Extract the translatable strings for given locales
# Usage: make i18n-extract-locale l=fr
.PHONY: i18n-extract-locale
i18n-extract-locale:
	node_modules/i18next-parser/bin/cli.js www/js -k "::" -s ":::" -f "__.t" -o www/locales -r -l $(l)
	@rm -f www/locales/$(l)/translation_old.json

# Generate icons and splashscreens.
# If you're patient enough you may want to
# replace this by a simpler set of commands
#
# The following files must exist :
# - resources/icon.png (1024 x 1024)
# - resources/splash.png (2208 x 2208)
.PHONY: generate-resources
generate-resources:
	# keep a backup of the config file
	cp config.xml config.xml.generation-backup
	node_modules/ionic/bin/ionic resources
	# Remove useless resources
	rm -f resources/android/splash/drawable-land*
	rm -f resources/android/splash/drawable-port-xx*
	rm -f resources/android/icon/drawable-xx*
	# Restore the config file (edited by ionic resources)
	cp config.xml.generation-backup config.xml
	rm config.xml.generation-backup

# Build the app
.PHONY: build
build: build-core-dependencies build-app-dependencies build-compass build-optimize build-phonegap

# Export needed dependencies
.PHONY: build-core-dependencies
build-core-dependencies:
	cp bower_components/requirejs/require.js www/js/lib/
	cp bower_components/jquery/dist/jquery.min.js www/js/lib/
	cp bower_components/backbone/backbone.js www/js/lib/
	cp bower_components/underscore/underscore-min.js www/js/lib/
	cp bower_components/text/text.js www/js/lib/
	cp bower_components/fastclick/lib/fastclick.js www/js/lib/
	cp bower_components/domReady/domReady.js www/js/lib/
	cp bower_components/async/lib/async.js www/js/lib/
	cp bower_components/i18next/i18next.js www/js/lib/
	cp bower_components/gmaps.js/gmaps.js www/js/lib/
	cp bower_components/requirejs-plugins/src/async.js www/js/lib/gm_async.js
	cp bower_components/page-slider/lib/page-slider.min.js www/js/lib/
	cp bower_components/page-slider/lib/page-slider.css www/css/lib/_page-slider.scss

# Your app specific build needs go here
.PHONY: build-app-dependencies
build-app-dependencies:
	mkdir -p www/css/lib/topcoat
	mkdir -p www/css/lib/topcoat/css
	cp bower_components/topcoat/css/topcoat-mobile-light.min.css www/css/lib/topcoat/_topcoat.scss
	cp -R bower_components/topcoat/font www/css/lib/topcoat/
	cp -R bower_components/topcoat/img www/css/lib/topcoat/

# Compile scss files to css
.PHONY: build-compass
build-compass:
	gulp compass

# Build dist file with require optimizer
.PHONY: build-optimize
build-optimize:
	cd www && r.js -o build.js

# Phonegap build
build-phonegap:
	phonegap build

# Prepare the repo to start developing
.PHONY: install-dev
install-dev:
	npm install
	./dev-scripts/install-dev
