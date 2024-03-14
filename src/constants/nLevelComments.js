let comments = [
  {
    id:'1',
    name: 'Jitendra',
    text: 'Namaste javascript is a great resource to learn about JavaScript',
    replies: [
      {
        name: 'Jaya',
        text: 'Yes, you are saying correct.',
        replies: [
          {
            name: 'Jaya',
            text: 'Yes, you are saying correct.',
            replies: [
              {
                name: 'Jaya',
                text: 'Yes, you are saying correct.',
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: 'Jaya',
        text: 'Yes, you are saying correct.',
        replies: [],
      },
    ],
  },
  {
    name: 'Mohit',
    text: 'Very nice javascript tutorial.',
    replies: [
      {
        name: 'Mayank',
        text: 'Yes, you are saying correct.',
        replies: [],
      },
    ],
  },
  {
    name: 'Sahil',
    text: 'Well explained javascript tutorial.',
    replies: [
      {
        name: 'Ashish',
        text: 'Yes, this is really helpful.',
        replies: [],
      },
    ],
  },
];

export default comments;