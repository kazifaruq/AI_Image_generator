const generateButton=document.getElementById("generate-btn")
const apiToken = 'a3bd5a926bee2a81dc7608ac3aa880fd';
//lmwr_sk_AMW1LbYvv5_G7xbAlsQMNLErY8S1Ff14yU6nN3pseZhhPwzA

async function imageGenApi(){
const userInput=document.getElementById("inputText").value;


const imageTag=document.createElement("img");
const imageArea=document.getElementById("imageShow");
const data = {
  id: "clgh1vxtu0011mo081dplq3xs",
  inputs: userInput,
};
inputText.value="";
//const loadingMessage=document.createElement("p");
//loadingMessage.textContent="Loading...";
//imageArea.appendChild(loadingMessage);
const loadingMessage=`<img class="weblogo" src="/konzy.gif" />`;
imageArea.innerHTML=loadingMessage;
const response = await fetch('https://simple-api.glif.app',
  {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});
const result = await response.json();
//imageArea.removeChild(loadingMessage);
imageArea.innerHTML=``;
imageTag.setAttribute("src",result.output);
imageArea.appendChild(imageTag);

};

generateButton.addEventListener("click",imageGenApi);