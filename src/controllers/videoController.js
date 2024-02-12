import Video from "../models/Vidoe";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log("videos", videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send("Internal Server Error");
  }
};

export const watch = (req, res) => {
  const { id } = req.params;

  console.log("Show video", id);
  return res.render("watch", { pageTitle: `Watching: ` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;

  return res.render("edit", { pageTitle: `Editing: ` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  // 이곳에 비디오를 videos array에 추가할 예정

  const { title } = req.body;

  return res.redirect("/");
};

// export const search = (req, res) => res.send("Search");

// export const deleteVideo = (req, res) => res.send("Delet Video");
