    // <button class="buttons" id="button1"><i class="fa fa-exchange"></i> Change</button>

    var orderPerLengthDivider = [0, 0, 0, 0];

    var fileNameArray = [
        [0, "Airhorn", "airhorn.mp3", 0, 0],
        [0, "2 Girls 1 Cup Intro", "2girls1cup.mp3", 0, 0],
        [0, "Boring", "boring.mp3", 0, 0],
        [0, "Bruh", "bruh.mp3", 0, 0],
        [0, "Campana", "campana.mp3", 0, 0],
        [0, "Cyka Blyat", "cykablyat.mp3", 0, 0],
        [0, "Message", "message.mp3", 0, 0],
        [0, "Windows XP Error", "windowsxperror.mp3", 0, 0],
        [0, "Fart", "fart.mp3", 0, 0],
        [0, "Fuck Me Harder", "fuckmeharder.mp3", 0, 0],
        [0, "Wow", "wow.mp3", 0, 0],
        [0, "Headshot", "headshot.mp3", 0, 0],
        [0, "Nein x 88", "neinneinnein.mp3", 0, 0],
        [0, "I Like Turtles", "iliketurtles.mp3", 0, 0],
        [0, "Kann Es Sein, Dass Du Dumm Bist?", "kannesseindummbist.mp3", 0, 0],
        [0, "LOL", "lol.mp3", 0, 0],
        [0, "Fuck You", "fuckyou.mp3", 0, 0],
        [0, "Can't Touch This", "canttouchthis.mp3", 0, 0],
        [0, "Metal Gear Solid", "metalgearsolid.mp3", 0, 0],
        [0, "Noice", "noice.mp3", 0, 0],
        [0, "Sad Trombone", "sadtrombone.mp3", 0, 0],
        [0, "Nemesis", "nemesis.mp3", 0, 0],
        [0, "Pew Pew", "piupiu.mp3", 0, 0],
        [0, "Trollolol", "trollolol.mp3", 0, 0],
        [0, "Tokyo Drift", "tokiodrift.mp3", 0, 0],
        [0, "Victory", "victory.mp3", 0, 0],
        [0, "Wah Wah", "wahwah.mp3", 0, 0],
        [0, "Wait What", "waitwhat.mp3", 0, 0],
        [0, "Crickets Silence", "crickets.mp3", 0, 0],
        [0, "Punch", "punch.mp3", 0, 0],
        [0, "Mission Failed", "missionfailed.mp3", 0, 0],
        [0, "Fatality", "fatality.mp3", 0, 0],
        [0, "Ba Dum Tss", "badumtss.mp3", 0, 0],
        [0, "Phone Vibrating", "phonevibrating.mp3", 0, 0],
        [0, "Applause", "applause.mp3", 0, 0],
        [0, "Boom Headshot", "boomheadshot.mp3", 0, 0],
        [0, "Yoink", "bubby.mp3", 0, 0],
        [0, "Bye, Have a Great Time", "byehaveagreattime.mp3", 0, 0],
        [0, "Damn", "damnfriday.mp3", 0, 0],
        [0, "DUN DUN DUUUNNNN", "dundundun.mp3", 0, 0],
        [0, "Ezzzyy", "ez.mp3", 0, 0],
        [0, "Fire In The Hole", "fireinthehole.mp3", 0, 0],
        [0, "FBI, OPEN UP", "fpiopenup.mp3", 0, 0],
        [0, "Gotcha Biatch", "gotchabitch.mp3", 0, 0],
        [0, "Ha GAYYY", "hegay.mp3", 0, 0],
        [0, "Hey, Wha Happen", "heywhathappened.mp3", 0, 0],
        [0, "Hold Up, Wait a Minute", "holdupwaitaminute.mp3", 0, 0],
        [0, "HotHotHotHot", "hothothot.mp3", 0, 0],
        [0, "👁⃤ Illuminati Confirmed👁⃤", "illuminati.mp3", 0, 0],
        [0, "Do It, JUST DO IT", "justdoit.mp3", 0, 0],
        [0, "Kaching", "kaching.mp3", 0, 0],
        [0, "Leeroyyy Jenkiens", "leeroyjenkiens.mp3", 0, 0],
        [0, "No God, NOGODPLEASENO", "nogodpleaseno.mp3", 0, 0],
        [0, "*Crowd Of Dudes Going Wild*", "ohhhhhh.mp3", 0, 0],
        [0, "Oh My Gwad", "ohmygodafrica.mp3", 0, 0],
        [0, "Ou Yes Daddy", "ohyesdaddy.mp3", 0, 0],
        [0, "Ogge", "okay.mp3", 0, 0],
        [0, "Run DUDUDUUU", "run.mp3", 0, 0],
        [0, "Seriously Wtf Are You Doing?", "seriouselywhatthefuck.mp3", 0, 0],
        [0, "sIKE", "sike.mp3", 0, 0],
        [0, "Gentlemen Clapping", "slowclap.mp3", 0, 0],
        [0, "Smoke Weed Everyday", "snikeweedeveryday.mp3", 0, 0],
        [0, "Stop It. Get Some Help.", "stopit.mp3", 0, 0],
        [0, "Surprise Mothafucker", "surprisemotherfucker.mp3", 0, 0],
        [0, "Tha Ting Goes Skrraaa *pakakakaka*", "thetinggoesskrrra.mp3", 0, 0],
        [0, "It Was At This Moment He Knew...", "thismomenthefuckedup.mp3", 0, 0],
        [0, "GTA Wasted", "wasted.mp3", 0, 0],
        [0, "WEEEEEE", "wee.mp3", 0, 0],
        [0, "Who ahAre You?", "whoareyou.mp3", 0, 0],
        [0, "Why Aru Running? 2x", "whyareyourunning.mp3", 0, 0],
        [0, "Why You Cheff To Be Mad", "whyyouhefftobemad.mp3", 0, 0],
        [0, "YEET", "yeet.mp3", 0, 0],
        [0, "Hello Darkness", "hellodarkness.mp3", 0, 0],
        [0, "When You Try Your Best", "whenyoutryyourbest.mp3", 0, 0]

    ];

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // Fired when Website is loaded
    ///////////////////////////////////////////////////////////////////////////////////////////////
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("xPos").oninput = function() {
            inputTrigger(this.value);
        }
        
        

        drawOrderPerLengthDivider(0);
    }, false);

    function inputTrigger(value) {
        //document.getElementById("page-wrapper").style.visibility = 'hidden';  
        //document.getElementById("page-wrapper").style.overflow = "hidden";

        var counter = 0;
        
        
        if (value) {
            for (var i = 1; i <= orderPerLengthDivider.length; i++) {
                orderPerLengthDivider[i-1].style.visibility = 'hidden';
                orderPerLengthDivider[i-1].style.display = 'inline';
            }
        } else {
            for (var i = 1; i <= orderPerLengthDivider.length; i++) {
                orderPerLengthDivider[i-1].style.visibility = 'visible';
                orderPerLengthDivider[i-1].style.display = 'none';
            }
        }
        
        while (counter < fileNameArray.length) {


            if (fileNameArray[counter][1].toLowerCase().includes(value.toLowerCase()) == true) {

                fileNameArray[counter][0].style.visibility = 'visible';
                fileNameArray[counter][0].style.display = 'inline';
            } else {
                fileNameArray[counter][0].style.visibility = 'hidden';
                fileNameArray[counter][0].style.display = 'none';
            }

            counter += 1;
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // Draw divider lines used when sorted by length
    ///////////////////////////////////////////////////////////////////////////////////////////////
    function drawOrderPerLengthDivider(counter) {

        var dividerID = "divider" + counter.toString();

        orderPerLengthDivider[counter] = document.createElement("DIV");
        orderPerLengthDivider[counter].id = dividerID;

        var paragraph = document.createElement("P");
        paragraph.className = "orderDividerText";

        switch (counter) {
            case 0: {
                paragraph.innerText = "Under 1 second";
                break;
            }

            case 1: {
                paragraph.innerText = "Under 2 second";
                break;
            }

            case 2: {
                paragraph.innerText = "Under 5 second";
                break;
            }

            case 3: {
                paragraph.innerText = "Over 5 second";
                break;
            }

        }

        var line = document.createElement("DIV");
        line.className = "orderDividerLengthLine";

        document.getElementById("page-wrapper").appendChild(orderPerLengthDivider[counter]);
        orderPerLengthDivider[counter].appendChild(line);
        orderPerLengthDivider[counter].appendChild(paragraph);

        if (counter + 1 < orderPerLengthDivider.length) {
            drawOrderPerLengthDivider(counter + 1);
        } else {
            loadMetaData(0);
        }

    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // Loads Metatdata of Mp3 file
    ///////////////////////////////////////////////////////////////////////////////////////////////
    function loadMetaData(counter) {

        fileNameArray[counter][4] = document.createElement('audio');
        fileNameArray[counter][4].src = "snd/" + fileNameArray[counter][2];

        fileNameArray[counter][4].addEventListener('loadedmetadata', function() {
            fileNameArray[counter][3] = fileNameArray[counter][4].duration;


            if (counter + 1 < fileNameArray.length) {
                loadMetaData(counter + 1);
            } else {
            
                
                document.getElementById("loading_i").style.visibility = "hidden";
                document.getElementById("loading_i").style.display = "none";
                
                document.getElementById("header").style.visibility = "visible";
                document.getElementById("header").style.display = "block";
                document.getElementById("page-wrapper").style.visibility = "visible";
                document.getElementById("page-wrapper").style.display = "block";
        
                drawButtons(0);
            }

        }, false);

    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // Draw actual Buttons to play sounds
    ///////////////////////////////////////////////////////////////////////////////////////////////
    function drawButtons(counter) {

        fileNameArray[counter][0] = document.createElement("BUTTON");
        fileNameArray[counter][0].id = counter.toString();
        fileNameArray[counter][0].className = "buttons";

        var para = document.createElement("P");
        var duration = Math.round(fileNameArray[counter][3] * 10) / 10;
        para.innerText = fileNameArray[counter][1] + "\n\n" + duration + "s";

        fileNameArray[counter][0].addEventListener('mouseover', function() {

            this.style.animation = "";

        });

        fileNameArray[counter][0].addEventListener('click', function() {

            this.style.animation = "mymove 1s";
            fileNameArray[counter][4].play();

            if (fileNameArray[counter][4].paused) {
                fileNameArray[counter][4].play();
            } else {
                fileNameArray[counter][4].currentTime = 0
            }
        });

        switch (true) {
            case (fileNameArray[counter][3] <= 1): {
                orderPerLengthDivider[0].appendChild(fileNameArray[counter][0]);
                fileNameArray[counter][0].appendChild(para);
                break;
            }

            case (fileNameArray[counter][3] >= 1 && fileNameArray[counter][3] <= 2): {
                orderPerLengthDivider[1].appendChild(fileNameArray[counter][0]);
                fileNameArray[counter][0].appendChild(para);
                break;
            }

            case (fileNameArray[counter][3] >= 2 && fileNameArray[counter][3] <= 5): {
                orderPerLengthDivider[2].appendChild(fileNameArray[counter][0]);
                fileNameArray[counter][0].appendChild(para);
                break;
            }

            case (fileNameArray[counter][3] >= 5): {
                orderPerLengthDivider[3].appendChild(fileNameArray[counter][0]);
                fileNameArray[counter][0].appendChild(para);
                break;
            }

        }

        if (counter + 1 < fileNameArray.length) {
            drawButtons(counter + 1);
        }
    }