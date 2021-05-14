
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-screen-orientation.screenorientation",
          "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
          "pluginId": "cordova-plugin-screen-orientation",
        "clobbers": [
          "cordova.plugins.screenorientation"
        ]
        },
      {
          "id": "cordova-plugin-insomnia.Insomnia",
          "file": "plugins/cordova-plugin-insomnia/www/Insomnia.js",
          "pluginId": "cordova-plugin-insomnia",
        "clobbers": [
          "window.plugins.insomnia"
        ]
        },
      {
          "id": "es6-promise-plugin.Promise",
          "file": "plugins/es6-promise-plugin/www/promise.js",
          "pluginId": "es6-promise-plugin",
        "runs": true
        },
      {
          "id": "cordova-plugin-vibration.notification",
          "file": "plugins/cordova-plugin-vibration/www/vibration.js",
          "pluginId": "cordova-plugin-vibration",
        "merges": [
          "navigator"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-insomnia": "4.3.0",
      "cordova-plugin-screen-orientation": "3.0.2",
      "cordova-plugin-vibration": "3.1.1",
      "es6-promise-plugin": "4.2.2"
    };
    // BOTTOM OF METADATA
    });
    