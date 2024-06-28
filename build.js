import { registerTransforms } from '@tokens-studio/sd-transforms';

const StyleDictionary = require('style-dictionary').extend('config.json');


// Enregistrer les transformations sd-transforms
registerTransforms(StyleDictionary);

// Créer une transformation personnalisée pour remplacer les points par des tirets
registerTransforms({
  name: 'name/cti/kebab',
  type: 'name',
  transformer: (prop) => {
    return prop.path.join('-').replace(/\./g, '-');
  }
});

// Créer un format personnalisé pour SCSS
registerFormat({
  name: 'scss/variables',
  formatter: function({ dictionary }) {
    return dictionary.allProperties.map(prop => {
      return `$${prop.name}: ${prop.value};`;
    }).join('\n');
  }
});

// Créer un transformGroup personnalisé
registerTransformGroup({
  name: 'scss',
  transforms: ['name/cti/kebab', 'attribute/cti', 'name/cti/camel', 'size/rem', 'color/hex']
});

// Initialiser Style Dictionary avec la configuration
const StyleDictionaryExtended = extend(__dirname + '/config.json');

// Build toutes les plateformes
StyleDictionaryExtended.buildAllPlatforms();
