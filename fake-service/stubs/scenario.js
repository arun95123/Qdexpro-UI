module.exports.getScenarioStub = () => {
  return(
    {
      scenarioId: '1',
      scenarioName: 'Scenario 1',
      setup: {
        setupId: '1',
        setupName: 'Setup 1',
        steps: [
          {
            stepId: '1',
            stepName: 'Step 1'
          }
        ]
      },
      tearDown: {
        tearDownId: '1',
        tearDownName: 'Setup 1',
        steps: [
          {
            stepId: '1',
            stepName: 'Step 1'
          }
        ]
      },
      testCases: [
        {
          setup: {
            setupId: '1',
            setupName: 'Setup 1',
            steps: [
              {
                stepId: '1',
                stepName: 'Step 1'
              }
            ]
          },
          tearDown: {
            tearDownId: '1',
            tearDownName: 'Setup 1',
            steps: [
              {
                stepId: '1',
                stepName: 'Step 1'
              }
            ]
          },
          steps: [
            {
              stepId: '1',
              stepName: 'Step 1'
            }
          ]
        },
        {
          setup: {
            setupId: '1',
            setupName: 'Setup 1',
            steps: [
              {
                stepId: '1',
                stepName: 'Step 1'
              }
            ]
          },
          steps: [
            {
              stepId: '2',
              stepName: 'Step 1'
            },
            {
              stepId: '3',
              stepName: 'Step 2'
            }
          ]
        }
      ]
    }
  );
}
