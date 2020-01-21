const getRandomFeaturedUrl = () => {
  const random_url = [
    'sort_by=vote_average.desc&vote_count.gte=10',
    'primary_release_year=2019&sort_by=vote_average.desc',
    'with_genres=18',
    'with_genres=35',
    'with_genres=878',
    'certification_country=US&certification.lte=G&sort_by=popularity.desc',
    'sort_by=popularity.desc'
  ];

  const max = random_url.length;
  const rand = Math.floor(Math.random() * max);

  return random_url[rand];
}

export {
	getRandomFeaturedUrl
};