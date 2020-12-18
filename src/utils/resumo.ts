const resumoNews = (news: string) => {
  if (news.length > 223) {
    return news.slice(0, 223) + "...";
  } else {
    return news;
  }
};

export { resumoNews };
