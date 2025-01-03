




const addItem =async (item)=>{
    await randomDelay();
    let div=document.createElement("div");
    div.innerHTML=item
    document.body.append(div)
}


const randomDelay =()=>{
    return new Promise((resolve, reject) => {
        timeout =1+ 6*Math.random()
        setTimeout(() => {
            resolve()
        }, timeout*1000);
    })
}
async function main(){
setInterval(() => {
    let last=document.body.lastElementChild
    last.innerHTML=last.innerHTML+"."
},700);
let text = ["Initializing Hacking",
    "Reading your Files",
    "Password files detected",
    "Sending all password ",
    "cleaning up",
    "Reading your files",
]
for (const item of text) {
    await addItem(item)
}
}
main()
