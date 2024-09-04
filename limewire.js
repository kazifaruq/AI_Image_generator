import fetch from 'node-fetch';

async function run() {
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

run();