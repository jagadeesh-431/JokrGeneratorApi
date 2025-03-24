const button = document.getElementById("button");
const jokecontent = document.getElementById("jokecontent");
const joke = document.getElementById("joke");

button.onclick = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke')
        .then(function (response) {
            // Update button text
            button.textContent = "Next 🧐";

            // Clear previous joke and punchline
            jokecontent.textContent = "";
            joke.textContent = "";

            // Display the joke setup
            jokecontent.textContent = response.data.setup;

            // Display the punchline after 1.5 seconds
            setTimeout(function () {
                joke.textContent = response.data.punchline;
            }, 1500);
        })
        .catch(function (error) {
            console.log(error);
        });
};