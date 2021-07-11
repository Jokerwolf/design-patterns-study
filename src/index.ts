import prompts from 'prompts';

async function runApp() {
  const response = await prompts({
    name: 'pattern',
    type: 'select',
    message: 'Choose pattern',
    choices: [
      { title: 'State', value: 'state' },
      { title: 'Strategy', value: 'strategy' },
      { title: 'Observer', value: 'observer' },
    ],
  });

  (await import(`./${response.pattern}`)).default().then(runApp);
}

runApp();
