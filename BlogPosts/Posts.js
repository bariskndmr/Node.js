const Posts = [
  { author: "John Doe1", title: "Title Doe" },
  { author: "John Doe2", title: "Title Doe" },
  { author: "John Doe3", title: "Title Doe" },
];

const ListPost = () => {
  return new Promise((resolve, reject) => {
    if (!!Posts) {
      Posts.map((item) => console.table(item));
      resolve("Postlar başarılı bir şekilde sıralandı");
    } else {
      reject("Sıralanabilecek bir post yok!");
    }
  });
};

const AddPost = (newPost) => {
  return new Promise((resolve, reject) => {
    if (!!newPost) {
      Posts.push(newPost);
      resolve(Posts);
    } else {
      reject(err);
    }
  });
};

const ShowPosts = async () => {
  try {
    await AddPost({ author: "John Doe4", title: "Title Doe" });
    await ListPost();
  } catch (err) {
    console.log(err);
  }
};

ShowPosts();
