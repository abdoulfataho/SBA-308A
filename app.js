
const API_URL = `https://api.thecatapi.com/v1/`;
const API_KEY = "ive_p1tux0UtLsHaPmaXDoPemRfX9xM3FmfJ5xmo7QllBq7cokQR6tigxdBjF4Yylexv";

let currentImageToVoteOn;

function showHistoricVotes()
{
  
  document.getElementById('vote-options').style.display = 'none';
  document.getElementById('vote-results').style.display = 'block';

  const url = `${API_URL}votes?limit=10&order=DESC`;

  fetch(url,{headers: {
    'x-api-key': API_KEY
  }})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  
    data.map(function(voteData) {
 
    const imageData = voteData.image
 
    let image = document.createElement('img');
     //use the url from the image object
     image.src = imageData.url
            
    let gridCell = document.createElement('div');
    
      if(voteData.value<0)
      {
        gridCell.classList.add('red') 
      } else {
        gridCell.classList.add('green')
      }
      
    gridCell.classList.add('col-lg');

    gridCell.appendChild(image)
       
    document.getElementById('grid').appendChild(gridCell);
       
    });
  
  })
  .catch(function(error) {
     console.log(error);
  });
  
}

function showVoteOptions()
{
  document.getElementById("grid").innerHTML = '';
  
  document.getElementById('vote-options').style.display = 'block';
  document.getElementById('vote-results').style.display = 'none';
  
  showImageToVoteOn()
}

function showImageToVoteOn()
{
  
  const url = `${API_URL}images/search`;

  fetch(url,{headers: {
    'x-api-key': API_KEY
  }})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    currentImageToVoteOn = data[0];
    document.getElementById("image-to-vote-on").src= currentImageToVoteOn.url;
  });

}

function vote(value)
{
  
  const url = `${API_URL}votes/`;
  const body = {
    image_id:currentImageToVoteOn.id,
    value
  }
  fetch(url,{method:"POST",body:JSON.stringify(body),headers: {
    'content-type':"application/json",
    'x-api-key': API_KEY
  }})
  .then((response) => {
    showVoteOptions()
  })
}

showVoteOptions()

        // async function getDogImage() {
        //     // const breedName = document.getElementById('breedInput').value.trim();
        //     // if (!breedName) return;

        //     try {
        //         const response = await fetch(apiUrl);
        //         const data = await response.json();
                
        //         // const imageUrl = data[0].url;
        //         const breed = data[0].breeds.name;
        //         console.log(breed)
                
        //         // document.getElementById('dogImage').src = imageUrl;
        //         // document.getElementById('dogBreed').textContent = `Breed: ${breed}`;

        //         newItem += `
        //         <div>
        //         <img>
        //         </div>
        //         `
            
        //     } catch (error) {
        //         console.error('Error fetching dog image:', error);
        //     }
        // }
        // getDogImage()


        getDogImage()
        function petDog() {
            alert("You pet this Cat! 🐾");
           
        }
  

       