
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqzFLDxyg0Ce043s_gvd0O7NOUyUK9oKp-i_doMipkeNV_Ow/viewform?usp=header";

const projects = [
  {
    title: "Agua para nuestros huertos",
    category: "AGUA · AGRICULTURA",
    description: "Una propuesta para aprovechar mejor el agua y fortalecer la producción de alimentos en la comunidad."
  },
  {
    title: "Energía para la comunidad",
    category: "ENERGÍA · TECNOLOGÍA",
    description: "Ideas de bajo costo para explorar el uso de energías limpias y responder a necesidades locales."
  },
  {
    title: "Voces del territorio",
    category: "BIODIVERSIDAD · CULTURA",
    description: "Una iniciativa para recuperar conocimientos locales y promover el cuidado de la biodiversidad."
  }
];

const dialog = document.getElementById("project-dialog");
const title = document.getElementById("dialog-title");
const category = document.getElementById("dialog-category");
const description = document.getElementById("dialog-description");
const formLink = document.getElementById("form-link");

function openProject(index, voting = false) {
  if (voting) {
    window.open(GOOGLE_FORM_URL, "_blank");
    return;
  }

  const project = projects[index];
  if (!project) return;

  title.textContent = project.title;
  category.textContent = project.category;
  description.textContent = project.description;
  formLink.href = GOOGLE_FORM_URL;
  formLink.textContent = "Ir a votar ↗";
  formLink.style.display = "inline-flex";

  dialog.showModal();
}

document.querySelectorAll(".details-button").forEach(button => {
  button.addEventListener("click", () => {
    openProject(Number(button.dataset.project), false);
  });
});

document.querySelectorAll(".vote-button").forEach(button => {
  button.addEventListener("click", () => {
    openProject(Number(button.dataset.project), true);
  });
});

document.getElementById("close-dialog").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", event => {
  if (event.target === dialog) {
    dialog.close();
  }
});
