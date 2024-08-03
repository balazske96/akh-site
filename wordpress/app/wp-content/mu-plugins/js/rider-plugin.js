class RiderPlugin {
  constructor() {
    const techRiderButton = document.getElementById("techRiderButton");
    const cateringRiderButton = document.getElementById("cateringRiderButton");

    techRiderButton.addEventListener("click", () =>
      this.techRiderButtonCallback("tech")
    );
    cateringRiderButton.addEventListener("click", () =>
      this.techRiderButtonCallback("catering")
    );
  }

  techRiderButtonCallback(type) {
    const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

    const media = wp.media({
      title: `${capitalizedType} rider`,
      multiple: false,
    });

    media.on("select", () => {
      const file = media.state().get("selection").first().toJSON();

      const filename = file["filename"];
      const id = file["id"];

      const filenameField = document.getElementById(`${type}_rider_filename`);
      const filenameInput = document.getElementById(`${type}_rider_input`);

      filenameField.innerText = filename;
      filenameField.style.display = "block";
      filenameInput.value = id;
    });

    media.open();
  }
}

new RiderPlugin();