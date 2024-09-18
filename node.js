const type=document.querySelector('.last-text');
const typing=()=>{
    setTimeout(() => {
        type.textContent="developer";
    }, 0);
    setTimeout(() => {
        type.textContent="youtuber";
    }, 4000);
    setTimeout(() => {
        type.textContent="web scraper";
    },8000);
}
typing();
setInterval(typing,12000)

function greeting(){
    const now=new Date();
    const hours=now.getHours();
    let wish;
    if (hours>=5 && hours<12) {
        wish="good morning sir/madam";
    } else if (hours>=12 && hours<16) {
        wish="good afternoon sir/madam";
    } else if (hours>=16 && hours<21) {
        wish="good evening sir/madam";
    } else {
       wish="good night sir/madam"   
    }
    return wish;
}

function updatetime(){

    const tjone=new Date();
    const hours=tjone.getHours();
    const mintes=tjone.getMinutes();
    const seconds=tjone.getSeconds();
    const week=tjone.toDateString();

    document.getElementById('time').textContent=greeting();
    document.getElementById('day').textContent=`${hours}:${mintes}:${seconds}:${week}`;
}
updatetime();
setInterval(updatetime,1200)