import prompts from 'prompts';

(async () => {
  const response = await prompts({
    name: 'pattern',
    type: 'select',
    message: 'Choose pattern',
    choices: [
      { title: 'State', value: 'state' },
      { title: 'Strategy', value: 'strategy' },
    ],
  });

  (await import(`./${response.pattern}`)).default();
})();
