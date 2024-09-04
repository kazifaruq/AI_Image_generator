import fetch from 'node-fetch';
const generateButton=document.getElementById("generate-btn")
const apiToken = 'lmwr_sk_AMW1LbYvv5_G7xbAlsQMNLErY8S1Ff14yU6nN3pseZhhPwzA';

async function run() {
    const userInput=document.getElementById("inputText").value;
    
  const resp = await fetch(
    `https://api.limewire.com/api/image/generation`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Version': 'v1',
        Accept: 'application/json',
        Authorization: 'Bearer <YOUR_lmwr_sk_*_HERE>'
      },
      body: JSON.stringify({
        prompt: 'A cute baby sea otter',
        aspect_ratio: '1:1'
      })
    }
  );

  const data = await resp.json();
  console.log(data);
}

generateButton.addEventListener("click",run);