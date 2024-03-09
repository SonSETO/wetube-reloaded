const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const handleSubmit = (e) => {
  e.preventDefault();
  const textarea = form.querySelector("textarea");

  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  console.log(videoId);
  fetch(`/api/videos/${videoId}/comment`),
    {
      method: "POST",
      body: {
        text,
      },
    };
};
if (form) {
  form.addEventListener("submit", handleSubmit);
}
