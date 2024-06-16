let verses = ["The Lord bless you and keep you; the Lord make his face shine on you; and be gracious to you; the Lord turn his face toward you and give you peace.",
"But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
"These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up.",
"But blessed is the one who trusts in the Lord, whose confidence is in him. They will be like a tree planted by the water that sends out its roots by the stream. It does not fear when heat comes; its leaves are always green. It has no worries in a year of drought and never fails to bear fruit.",
"Do everything in love.",
"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
"I pray that out of his glorious riches he may strengthen you with power through his Spirit in your inner being, so that Christ may dwell in your hearts through faith. And I pray that you, being rooted and established in love.",
"Commit to the Lord whatever you do, and he will establish your plans.",
"Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.",
"Let the morning bring me word of your unfailing love, for I have put my trust in you. Show me the way I should go, for to you I entrust my life.",
"May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
"For we live by faith, not by sight.",
"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
"The Lord will keep you from all harm— he will watch over your life; the Lord will watch over your coming and going both now and forevermore.",
"Now faith is confidence in what we hope for and assurance about what we do not see.",
"Be completely humble and gentle; be patient, bearing with one another in love.",
"Worship the Lord your God, and his blessing will be on your food and water. I will take away sickness from among you.",
"The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.",
"May he give you the desire of your heart and make all your plans succeed.",
"Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
"Let love and faithfulness never leave you; bind them around your neck, write them on the tablet of your heart. Then you will win favor and a good name in the sight of God and man.",
"When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
"This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.",
"And now these three remain: faith, hope and love. But the greatest of these is love.",
"Lord, you are my God; I will exalt you and praise your name, for in perfect faithfulness you have done wonderful things, things planned long ago.",
"And over all these virtues put on love, which binds them all together in perfect unity."
];
let verseLength = verses.length;
let alphabet = ' abcdefghijklmnopqrstuvwxyz!"#$%&’()*+,-./:;<=>?\@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
let cont = document.getElementById("verse");
let user = document.getElementById("enter");
let val = document.getElementById('userInput');
let par = document.getElementById('win');
let time = document.getElementById('time');
let car = document.getElementById('car');
let starts = document.getElementById('start');
let buton = document.getElementById('buton');
let min = 3;
let sec = 59;
let second=0;
buton.onclick = ()=>{
  start(verse);
}
function start(callback){
  let seconds = 5;
  
  let secId = setInterval(()=>{
    starts.textContent = `${seconds}`;
    seconds--;
    if(seconds == 0){
      callback();
      clearInterval(secId);
      starts.style.display = "none";
      
    }
  },1000)
  
};
function verse(){
  let rand = Math.floor(Math.random()*verseLength);
  cont.textContent = verses[rand];
  let len = verses[rand].length;
  let percent = (100 / len);
  let per = (100 / len);
  let i=0;
  let id = setInterval(()=>{
    sec = String(sec).padStart(2,0);
    time.textContent = `${min}:${sec}`;
    sec--;
    second++;
    if(sec == 0 && min==0){
      clearInterval(id);
      time.style.display = "none";
    }
    if(sec == 0){
      min--;
      sec=59;
    }
  },1000);
  
  
  document.addEventListener("keydown",event => {
    if(alphabet.includes(event.key)){
      if(event.key == cont.textContent.charAt(i) || event.key == "Backspace"){
        cont.style.background = "rgb(198,190,238)";
        user.textContent += event.key;
        i++;
        user.style.color = "green";
        car.style.left = `${percent}%`;
        percent = percent + per;
        if(event.key == "Backspace"){
          user.textContent -= ""; 
          
        }
      }else{
        cont.style.backgroundColor = "red";
      }
      if(user.textContent == cont.textContent){
        let wpm = ((len/5)*60)/second;
        document.getElementById("wpm").textContent = `${wpm.toFixed(2)}WPM`;
        clearInterval(id);
        // clearInterval(ids);
      }
      }
  })
  
}
