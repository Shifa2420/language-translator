async function translateText() {

    const text = document.getElementById("text").value;
    const source = document.getElementById("source").value;
    const target = document.getElementById("target").value;
    const loading = document.getElementById("loading");

    if (!text) {
        alert("Please enter text");
        return;
    }

    loading.classList.remove("hidden");

    try {
        const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source === "auto" ? "en" : source}|${target}`
        );

        const data = await response.json();
        document.getElementById("result").innerText =
            data.responseData.translatedText;

    } catch (error) {
        alert("Translation failed. Check internet.");
    }

    loading.classList.add("hidden");
}