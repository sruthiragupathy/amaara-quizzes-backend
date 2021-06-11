const quizDatabase = [
	{
		genre: 'Food',
		description:
			'Take part in the amazing quiz and test your knowledge in food',
		playTime: 5,
		image:
			'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		questions: [
			{
				question:
					"Which of the following states in  India is called as 'Rice Bowl Of India'?",
				points: 2,
				negativePoints: -1,
				options: [
					{
						text: 'Andhra Pradhesh',
						isRight: false,
					},
					{
						text: 'Punjab & Haryana',
						isRight: true,
					},
					{
						text: 'TamilNadu',
						isRight: false,
					},
					{
						text: 'Maharashtra',
						isRight: false,
					},
				],
			},
			{
				question:
					'Which of these countries is not a major producer of oranges?',
				points: 2,
				negativePoints: -1,
				options: [
					{
						text: 'Finland',
						isRight: false,
					},
					{
						text: 'Iceland',
						isRight: true,
					},
					{
						text: 'Switzerland',
						isRight: false,
					},
					{
						text: 'United States',
						isRight: false,
					},
				],
			},
		],
	},
	{
		genre: 'Fashion',
		description:
			'Take part in the amazing quiz and test your knowledge in fashion',
		playTime: 5,
		image:
			'https://images.pexels.com/photos/4427816/pexels-photo-4427816.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		questions: [
			{
				question:
					'Which fashion designer is credited with having launched the skinny silhouette for menswear in the 2000s?',
				points: 2,
				negativePoints: -1,
				options: [
					{
						text: 'Karl Lagerfeld',
						isRight: false,
					},
					{
						text: 'Hedi Slimane',
						isRight: true,
					},
					{
						text: 'Ralph Lauren',
						isRight: false,
					},
					{
						text: 'Raf Simons',
						isRight: false,
					},
				],
			},
			{
				question: 'Where did jeans come from?',
				points: 2,
				negativePoints: -1,
				options: [
					{
						text: 'Italy',
						isRight: true,
					},
					{
						text: 'US',
						isRight: false,
					},
					{
						text: 'Canada',
						isRight: false,
					},
					{
						text: 'London',
						isRight: false,
					},
				],
			},
		],
	},
	{
		genre: 'Wildlife',
		description:
			'Take part in the amazing quiz and test your knowledge in Wildlife',
		playTime: 5,
		image:
			'https://images.pexels.com/photos/1123767/pexels-photo-1123767.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		questions: [
			{
				question: 'Which is the largest mammal on the planet?',
				points: 2,
				negativePoints: -1,
				options: [
					{
						text: 'Elephant',
						isRight: false,
					},
					{
						text: 'Antarctic Blue Whale',
						isRight: true,
					},
					{
						text: 'Hyena',
						isRight: false,
					},
					{
						text: 'Rhinoceros',
						isRight: false,
					},
				],
			},
			{
				question: 'What is a male zebra called?',
				points: 2,
				negativePoints: -1,
				options: [
					{
						text: 'Stag',
						isRight: false,
					},
					{
						text: 'Bull',
						isRight: false,
					},
					{
						text: 'Stallion',
						isRight: true,
					},
					{
						text: 'Stag',
						isRight: false,
					},
				],
			},
		],
	},
];

module.exports = { quizDatabase };
