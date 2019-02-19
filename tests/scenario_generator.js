const stories = require('./stories.js');

let scenarios = [];
stories.forEach((story) => {
  let variants = {};
  const { knobs } = story;
  Object.keys(knobs || []).forEach((key) => {
    switch (knobs[key].constructor.name) {
      case 'Array':
        if (Object.keys(variants).length === 0) {
          knobs[key].forEach((v) => { variants[`${key}-${v}`] = `&knob-${key}=${v}`; });
        } else {
          const newVariants = {};
          Object.keys(variants).forEach((variantKey) => {
            knobs[key].forEach((v) => {
              newVariants[`${variantKey}-${key}-${v}`] = `${variants[variantKey]}&knob-${key}=${v}`;
            });
          });
          variants = newVariants;
        }
        break;
      case 'Number':
        if (Object.keys(variants).length === 0) {
          variants[`${key}-${knobs[key]}`] = `&knob-${key}=${knobs[key]}`;
        } else {
          const newVariants = {};
          Object.keys(variants).forEach((variantKey) => {
            newVariants[`${variantKey}-${key}-${knobs[key]}`] = `${variants[variantKey]}&knob-${key}=${knobs[key]}`;
          });
          variants = newVariants;
        }
        break;
      case 'Boolean':
        if (Object.keys(variants).length === 0) {
          variants[`${key}-${knobs[key]}`] = `&knob-${key}=${knobs[key]}`;
          variants[`${key}-${knobs[key]}`] = `&knob-${key}=${!knobs[key]}`;
        } else {
          const newVariants = {};
          Object.keys(variants).forEach((variantKey) => {
            newVariants[`${variantKey}-${key}-${knobs[key]}`] = `${variants[variantKey]}&knob-${key}=${knobs[key]}`;
            newVariants[`${variantKey}-${key}-${!knobs[key]}`] = `${variants[variantKey]}&knob-${key}=${!knobs[key]}`;
          });
          variants = newVariants;
        }
        break;
      default:
        break;
    }
  });

  const finalResults = [];
  if (Object.keys(variants).length > 0) {
    Object.keys(variants).forEach((key) => {
      finalResults.push({
        label: key,
        url: `http://localhost:6007/?selectedKind=${story.kind}&selectedStory=${story.name}&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs${variants[key]}`,
        selectors: ['.horizontal.Pane1'],
      });
    });
  }

  if (knobs === undefined) {
    finalResults.push({
      label: `${story.name}`,
      url: `http://localhost:6007/?selectedKind=${story.kind}&selectedStory=${story.name}&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs`,
      selectors: ['.horizontal.Pane1'],
    });
  }

  scenarios = scenarios.concat(finalResults);
});

module.exports = scenarios;
