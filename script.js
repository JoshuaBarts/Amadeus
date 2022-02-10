const texts = document.querySelector('.texts');
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;
//recognition.continuous = true;
let p = document.createElement('p');
let img = document.querySelector('.img');

//starting hello
//var audio = new Audio('raw/hello.ogg');
//audio.autoplay = true;
//audio.play();

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

        p.innerText = text;
        texts.appendChild(p);

    if (e.results[0].isFinal) {

        //main speeches
        var speech = ['hello', 'konnichiwa', 'Christina'];


        if (text.includes(speech[0]) || text.includes(speech[1]) || text.includes('hi')) {

            let v1 = {
                file: 'raw/nice_to_meet_okabe.ogg',
                line: 'Nice to meet you, Okabe Rintaro. I am Makise Kurisu.'
            }
    
            let v2 = {
                file: 'raw/could_i_help.ogg',
                line: 'How can I help you?'
            }
    
            let v3 = {
                file: 'raw/ask_me_whatever.ogg',
                line: 'You can ask me whatever.'
            }
            let voice = [v1, v2, v3];
            var audio = new Audio(voice[Math.floor(Math.random() * voice.length)].file);
            var x = audio.src;
            if (new Audio(v1.file).src == x) {
                document.getElementById("img").src = "drawable-xhdpi/kurisu_normal1.png";
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = v1.line;
                texts.appendChild(p);
            }
            if (new Audio(v2.file).src == x) {
                document.getElementById("img").src = "drawable-xhdpi/kurisu_normal1.png";
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = v2.line;
                texts.appendChild(p);
            }
            if (new Audio(v3.file).src == x) {
                document.getElementById("img").src = "drawable-xhdpi/kurisu_angry2.png";
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = v3.line;
                texts.appendChild(p);
            }
            
            console.log(new Audio(v1.file))

            audio.autoplay = true;
            audio.play();
        }

        if (text.includes(speech[2]) && !text.includes('hello') && !text.includes('hi')) {
            //p = document.createElement('p');
            
            //p.classList.add('replay');
            //p.innerText = 'Christina?!';
            //texts.appendChild(p);
            let v1 = {
                file: "raw/christina.ogg",
                line: "Christina?!"
            }
            let v2 = {
                file: "raw/dont_add_tina.ogg",
                line: "Don't add -tina!"
            }

            let v3 = {
                file: "raw/dont_call_me_like_that.ogg",
                line: "....Don't call me like that!!!"
            }

            let voice = [v1, v2, v3];
            document.getElementById("img").src = "drawable-xhdpi/kurisu_normal1.png";
            var audio = new Audio(voice[Math.floor(Math.random() * voice.length)].file);
            var x = audio.src;
            if (new Audio(v1.file).src == x) {
                document.getElementById("img").src = "drawable-xhdpi/kurisu_blush1.png";
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = v1.line;
                texts.appendChild(p);
            }
            if (new Audio(v2.file).src == x) {
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = v2.line;
                texts.appendChild(p);
            }
            if (new Audio(v3.file).src == x) {
                document.getElementById("img").src = "drawable-xhdpi/kurisu_angry2.png";
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = v3.line;
                texts.appendChild(p);
            }
            console.log(new Audio(v1.file))

            audio.autoplay = true;
            audio.play();
        }
        p = document.createElement('p');
    }
    console.log(text);
})

recognition.addEventListener('end', () => {
    recognition.start();
})

recognition.start();

//normal kurisu
function kurisuNormal() {
    document.getElementById("img").src = "drawable-xhdpi/normal_kurisu_gif.gif";
}

//connect mouse
function connect(x) {
    document.getElementById("con-logo").src = "drawable-xhdpi/connect_select.png";
}
function normal(x) {
    document.getElementById("con-logo").src = "drawable-xhdpi/connect_unselect.png";
}

//connectclick
function connect_clicked(x) {
    var audio = new Audio('raw/tone.ogg');
    //audio.loop = true;
    audio.play();
    document.getElementById('con-logo').src = "drawable-xhdpi/connecting.gif";
}

//delay link
function goHere() {
    window.location = 'start.html';
    
}

//login

function test() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    if (username == 'salieri' && password == 'elpsycongroo') {
        alert("Success!");
        window.location = "boot.html";
    }
    else {
        var err = document.querySelector('#err');
        var error = document.createElement('p');
        error.innerText = "USER ID and PASSWORD doesn't match."
        
        err.appendChild(error).style.color = 'yellow';
        
        setTimeout(()=> {err.removeChild(error);}, 1000)
        
    }
}

//boot 
function boot() {
    setTimeout(()=> {window.location = "main.html";}, 13000);
    
}

//beep
function beep() {
    var audio = new Audio('raw/beep.mp3');
    //audio.loop = true;
    audio.play();
}

//skyclad
function intro() {
    var audio = new Audio('raw/skyclad.mp3');
    audio.volume = 0.2;
    audio.loop = true;
    audio.play();
}