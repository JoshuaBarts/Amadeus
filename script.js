$(document).ready(function() {

    const texts = document.querySelector('.texts');
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new window.SpeechRecognition();
    recognition.interimResults = true;
    
    
    //hmmmm how to do multiple languages
    //var lang = ['ja-JP', 'en-US'];
    //recognition.lang = 'en-US, ja-JP';
    let p = document.createElement('p');
    let img = document.querySelector('.img');

    $('#form').hide();

    $('#badge').click(function() {
        beep();
        $('#badge').hide();
        $('#form').fadeIn();
    })

    $('.texts').hide();
    $('#close').hide();
    $('#channel').click(function() {
        beep();
        $('.texts').toggle();
        //$('#channel').hide();
        //$('#close').show();

    })

    $('#settings').click(function() {
        beep();
        $('#wordlist').hide();
    })

    $('#close').click(function() {
        beep();
        $('.texts').hide();
        $('#close').hide();
        $('#channel').show();
    })

    $('#goodle').click(function() {
        beep();
        window.open('goodle.html', '_blank');
    })

    $('#wordlist').hide();

    $('#rine').click(function() {
        $('#wordlist').toggle();
        beep();
    })

    
    date();
    recognition.addEventListener('result', (e) => {
        const text = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

            console.log(e);
            p.innerText = text;
            texts.appendChild(p);


        if (e.results[0].isFinal) {

            //main speeches
            var x = document.getElementById('txt').value;
            
            /*DEFAULT*/
            switch (true) {
                case text.includes('hello') :
                case text.includes('hey') :
                case text.includes('hi') :
                case text.includes('good morning') :
                case text.includes('good afternoon') :
                case text.includes('good evening') :
                                    var v1 = {
                                        file: 'raw/nice_to_meet_okabe.ogg',
                                        line: 'Nice to meet you, Okabe Rintaro. I am Makise Kurisu.'
                                    }
                            
                                    var v2 = {
                                        file: 'raw/could_i_help.ogg',
                                        line: 'How can I help you?'
                                    }
                            
                                    var v3 = {
                                        file: 'raw/ask_me_whatever.ogg',
                                        line: 'You can ask me whatever.'
                                    }
                                    var voice = [v1, v2, v3];
                                    var audio = new Audio(voice[Math.floor(Math.random() * voice.length)].file);
                                    var x = audio.src;
                                    if (new Audio(v1.file).src == x) {
                                        document.getElementById("img").src = "drawable-xhdpi/talk1-1.gif";
                                        setTimeout(()=> {document.getElementById("img").src = "drawable-xhdpi/talk1.gif";}, 2500);
                                        setTimeout(()=> {document.getElementById("img").src = "drawable-xhdpi/kurisu_happy1.png";}, 5000);
                                        p = document.createElement('p');
                                        p.classList.add('replay');
                                        p.innerText = v1.line;
                                        texts.appendChild(p);
                                    }
                                    if (new Audio(v2.file).src == x) {
                                        document.getElementById("img").src = "drawable-xhdpi/talk2-1.gif";
                                        setTimeout(()=> {document.getElementById("img").src = "drawable-xhdpi/talk2.gif";}, 1000);
                                        p = document.createElement('p');
                                        p.classList.add('replay');
                                        p.innerText = v2.line;
                                        texts.appendChild(p);
                                    }
                                    if (new Audio(v3.file).src == x) {
                                        document.getElementById("img").src = "drawable-xhdpi/talk3-1.gif";
                                        setTimeout(()=> {document.getElementById("img").src = "drawable-xhdpi/talk3-1.gif";}, 2000);
                                        p = document.createElement('p');
                                        p.classList.add('replay');
                                        p.innerText = v3.line;
                                        texts.appendChild(p);
                                    }
                                    
                                    console.log(new Audio(v1.file))
                                    audio.autoplay = true;
                                    audio.play();
                                    break;

                case text.includes('hello Christina') :
                case text.includes('christina') :
                case text.includes('Christina') :
                case text.includes('Tina') :
                case text.includes('konnichiwa') :
                                    v1 = {
                                        file: "raw/christina.ogg",
                                        line: "Christina?!"
                                    }
                                    v2 = {
                                        file: "raw/dont_add_tina.ogg",
                                        line: "Don't add -tina!"
                                    }
                    
                                    v3 = {
                                        file: "raw/dont_call_me_like_that.ogg",
                                        line: "....Don't call me like that!!!"
                                    }
                    
                                    voice = [v1, v2, v3];
                                    document.getElementById("img").src = "drawable-xhdpi/kurisu_normal1.png";
                                    audio = new Audio(voice[Math.floor(Math.random() * voice.length)].file);
                                    x = audio.src;
                                    if (new Audio(v1.file).src == x) {
                                        document.getElementById("img").src = "drawable-xhdpi/talk4.gif";
                                        setTimeout(()=> {document.getElementById("img").src = "drawable-xhdpi/kurisu_blush1.png";}, 1000);
                                        p = document.createElement('p');
                                        p.classList.add('replay');
                                        p.innerText = v1.line;
                                        texts.appendChild(p);
                                    }
                                    if (new Audio(v2.file).src == x) {
                                        document.getElementById("img").src = "drawable-xhdpi/talk6.gif";
                                        setTimeout(()=> {document.getElementById("img").src = "drawable-xhdpi/kurisu_sided_eyes_closed1.png";}, 1000);
                                        p = document.createElement('p');
                                        p.classList.add('replay');
                                        p.innerText = v2.line;
                                        texts.appendChild(p);
                                    }
                                    if (new Audio(v3.file).src == x) {
                                        document.getElementById("img").src = "drawable-xhdpi/talk5.gif";
                                        
                                        p = document.createElement('p');
                                        p.classList.add('replay');
                                        p.innerText = v3.line;
                                        texts.appendChild(p);
                                    }
                                    console.log(new Audio(v1.file))
                    
                                    audio.autoplay = true;
                                    audio.play();
                                    break;

                case text.includes('f***') :
                case text.includes('b****') :
                case text.includes('motherfuker') :
                                    v1 = {
                                        file: "raw/sorry.ogg",
                                        line: "Sorry."
                                    }
                                    v2 = {
                                        file: "raw/huh_why_say.ogg",
                                        line: "Eh? Why did you say that?"
                                    }
                                    var voice = [v1,v2];
                                    var audio = new Audio(voice[Math.floor(Math.random() * voice.length)].file);
                                    var x = audio.src;
                                    if (new Audio(v1.file).src == x) {
                                        document.getElementById("img").src = "drawable-xhdpi/talk7.gif";
                                        p = document.createElement('p');
                                        p.classList.add('replay');
                                        p.innerText = v1.line;
                                        texts.appendChild(p);
                                    }
                                    if (new Audio(v2.file).src == x) {
                                        document.getElementById("img").src = "drawable-xhdpi/talk8.gif";
                                        //setTimeout(()=> {document.getElementById("img").src = "drawable-xhdpi/talk8.gif";}, 2000)
                                        p = document.createElement('p');
                                        p.classList.add('replay');
                                        p.innerText = v2.line;
                                        texts.appendChild(p);
                                    }
                                    audio.autoplay = true;
                                    audio.play();
                                    break;
                    
                case text.includes('love') :
                case text.includes('cute') :
                case text.includes('panties') :
                case text.includes('bra') :
                case text.includes('kiss') :
                case text.includes('Crush') :
                case text.includes('crush') :
                case text.includes('waifu') :
                
                                    v1 = {
                                        file: "raw/devilish_pervert.ogg",
                                        line: "I didn't notice you were a devilish pervert.. ahh I missed."
                                    }
                                    v2 = {
                                        file: "raw/pervert_idot_wanttodie.ogg",
                                        line: "Pervert!! Idiot. Do you want to die?"
                                    }
                                    v3 = {
                                        file: "raw/pervert_confirmed.ogg",
                                        line: "Pervert Confirmed."
                                    }
                                    var voice = [v1,v2,v3];
                                    var audio = new Audio(voice[Math.floor(Math.random() * voice.length)].file);
                                    var x = audio.src;
                                    if (new Audio(v1.file).src == x) {
                                        document.getElementById("img").src = "drawable-xhdpi/talk9-1.gif";
                                        setTimeout(()=> {document.getElementById("img").src = "drawable-xhdpi/talk9-1.gif";}, 1000)
                                        p = document.createElement('p');
                                        p.classList.add('replay');
                                        p.innerText = v1.line;
                                        texts.appendChild(p);
                                    }
                                    if (new Audio(v2.file).src == x) {
                                        document.getElementById("img").src = "drawable-xhdpi/talk9-1.gif";
                                        setTimeout(()=> {document.getElementById("img").src = "drawable-xhdpi/talk9-1.gif";}, 1000)
                                        p = document.createElement('p');
                                        p.classList.add('replay');
                                        p.innerText = v2.line;
                                        texts.appendChild(p);
                                    }
                                    if (new Audio(v3.file).src == x) {
                                        document.getElementById("img").src = "drawable-xhdpi/talk8.gif";
                                        p = document.createElement('p');
                                        p.classList.add('replay');
                                        p.innerText = v3.line;
                                        texts.appendChild(p);
                                    }
                                    audio.autoplay = true;
                                    audio.play();
                                    break;

                    /********DEFFAAAAAAUUULLLLTTT */
                default:
                        
                        v1 = {
                            file: 'raw/what_is_it.ogg',
                            line: 'What is it?'
                        }
        
                        v2 = {
                            file: 'raw/ok.ogg',
                            line: 'umm..Ok?'
                        }
                        voice = [v1, v2];
                        audio = new Audio(voice[Math.floor(Math.random() * voice.length)].file);
                        x = audio.src;
                        if (new Audio(v1.file).src == x) {
                            document.getElementById("img").src = "drawable-xhdpi/talk2-1.gif";
                            p = document.createElement('p');
                            p.classList.add('replay');
                            p.innerText = v1.line;
                            texts.appendChild(p);
                        }
        
                        if (new Audio(v2.file).src == x) {
                            kurisuNormal();
                            p = document.createElement('p');
                            p.classList.add('replay');
                            p.innerText = v2.line;
                            texts.appendChild(p);
                        }
                        
                        audio.autoplay = true;
                        audio.play();
                        break;
            
            } //end switch
            
            p = document.createElement('p');
        }
        
        console.log(text);
    })
    

    recognition.addEventListener('end', () => {
        recognition.start();
    })

    recognition.start();

}); //end document

    //other functions
    function date() {
        // get a new date (locale machine date time)
        var date = new Date();
        // get the date as a string
        var n = date.toDateString();
        // get the time as a string
        var time = date.toLocaleTimeString();

        // find the html element with the id of time
        // set the innerHTML of that element to the date a space the time
        document.getElementById('txt').innerHTML = n + ' ' + time;
    }

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