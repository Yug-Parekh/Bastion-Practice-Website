document.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON" && e.target.classList.contains("youtube-close")) {
        return;
    }

    const link = e.target.closest("a[href*='youtube.com']");
    if (!link) return;

    e.preventDefault();

    if (link.querySelector("iframe")) return;

    const href = link.href;
    let videoId;

    if (href.includes("youtube.com/watch?v=")) {
        videoId = new URL(href).searchParams.get("v");
    } else if (href.includes("youtube.com/embed/")) {
        videoId = new URL(href).pathname.split("/")[2];
    }

    if (!videoId) return;

    const iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    const closeBtn = document.createElement("button");
    closeBtn.className = "youtube-close";
    closeBtn.innerHTML = "&times;";
    closeBtn.title = "Close video";

    closeBtn.addEventListener("click", function(closeE) {
        closeE.stopPropagation();
        link.removeChild(iframe);
        link.removeChild(closeBtn);
        link.classList.remove("has-video");
    });

    link.appendChild(iframe);
    link.appendChild(closeBtn);
    link.classList.add("has-video");
});
