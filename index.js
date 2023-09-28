function formRender() {
  const form = document.getElementsByClassName("form-container");
  if (form.style.display === "none") {
    form.style.display = "flex";
  }
}

export default formRender;
