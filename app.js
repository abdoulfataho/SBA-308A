const apiKey = "live_p1tux0UtLsHaPmaXDoPemRfX9xM3FmfJ5xmo7QllBq7cokQR6tigxdBjF4Yylexv"
const apiUrl = "https://api.thedogapi.com/v1/"
        async function getDogImage() {
            const breedName = document.getElementById('breedInput').value.trim();
            if (!breedName) return;

            try {
                const response = await fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedName}`);
                const data = await response.json();
                const imageUrl = data[0].url;
                const breed = data[0].breeds[0].name;
                
                document.getElementById('dogImage').src = imageUrl;
                document.getElementById('dogBreed').textContent = `Breed: ${breed}`;
            } catch (error) {
                console.error('Error fetching dog image:', error);
            }
        }
        function petDog() {
            alert("You pet the dog! 🐾");
           
        }
  

       