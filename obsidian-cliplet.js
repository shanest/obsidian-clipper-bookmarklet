(
    () => {
        const note_name = "web_clippings";
        const append = "true";
        const url = window.location.href;
        const text = window.getSelection ? window.getSelection().toString() : "";
        const content = encodeURIComponent(`${url}\n\n${text}\n\n`);
        const final_url = `obsidian://new?name=${note_name}&append=${append}&content=${content}`;
        window.location.href = final_url;
    }
)();