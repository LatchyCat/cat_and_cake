document.addEventListener('DOMContentLoaded', function () {
    const API_KEY = '999139ba-db7c-4206-823a-11543a1bcfc8';
    const url = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}`;

    const catImage = document.getElementById('catImage');
    const newCatBtn = document.getElementById('newCatBtn');

    async function changeCatPicture() {
        try {
            const response = await fetch(url);
            const data = await response.json();

            console.log(`Image URL: ${data[0].url}`);
            catImage.src = data[0].url; // Change the source of the cat image
        } catch (error) {
            console.error(error);
        }
    }

    newCatBtn.addEventListener('click', changeCatPicture);
});
