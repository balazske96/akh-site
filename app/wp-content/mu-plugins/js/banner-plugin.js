class BannerPlugin {
  #dictionary = {
    desktop_image: "Desktop kép",
    desktop_video: "Desktop videó",
    mobile_image: "Mobil kép",
    mobile_video: "Mobil videó",
  };

  constructor() {
    const mobileImageButton = document.getElementById(
      "mobile_image_banner_button"
    );

    const mobileVideoButton = document.getElementById(
      "mobile_video_banner_button"
    );

    const desktopImageButton = document.getElementById(
      "desktop_image_banner_button"
    );

    const desktopVideoButton = document.getElementById(
      "desktop_video_banner_button"
    );

    mobileImageButton.addEventListener("click", () =>
      this.bannerButtonCallback("mobile_image")
    );
    mobileVideoButton.addEventListener("click", () =>
      this.bannerButtonCallback("mobile_video")
    );
    desktopImageButton.addEventListener("click", () =>
      this.bannerButtonCallback("desktop_image")
    );
    desktopVideoButton.addEventListener("click", () =>
      this.bannerButtonCallback("desktop_video")
    );
  }

  bannerButtonCallback(type) {
    const title = this.#dictionary[type];

    const media = wp.media({
      title: `${title} választása`,
      multiple: false,
    });

    media.on("select", () => {
      const file = media.state().get("selection").first().toJSON();

      const subtype = file["subtype"];

      if (
        ((subtype === "mp4" || subtype === "webm") &&
          (type === "desktop_video" || type === "mobile_video")) ||
        ((subtype === "jpeg" || subtype === "webp" || subtype === "jpg") &&
          (type === "desktop_image" || type === "mobile_image"))
      ) {
        const id = file["id"];
        const filenameInput = document.getElementById(`${type}_input`);
        const mediaContainer = document.getElementById(
          `${type}_media_container`
        );

        mediaContainer.src = file["url"];
        mediaContainer.style.display = "block";
        filenameInput.value = id;
      } else {
        alert("Nem megfelelő fájltípus.");
      }
    });

    media.open();
  }
}

new BannerPlugin();
