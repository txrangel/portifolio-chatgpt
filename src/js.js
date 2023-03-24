function getRepoImages(repoName, callback) {
    const url = `https://api.github.com/repos/${repoName}/readme`;
  
    fetch(url, {
      headers: {
        Authorization: `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`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const markdownContent = atob(data.content);
        const imageUrls = markdownContent.match(/!\[.*?\]\((.*?)\)/g).map((img) => {
          return img.match(/\((.*?)\)/)[1];
        });
  
        callback(imageUrls);
      });
  }
  