const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
  name: 'scss/nested-scoped',
  formatter: function ({ dictionary }) {
    return dictionary.allProperties
      .map(prop => {
        const name = prop.path.join('-');
        return `$${name}: ${prop.value};`;
      })
      .join('\n');
  }
});

StyleDictionary.extend(__dirname + '/config.json').buildAllPlatforms();
