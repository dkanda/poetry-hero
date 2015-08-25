var hasGP = false;
    var repGP;
    var oldGP;
    var freqs = LoadFreqs();
    var lastWord = "the";
    var tempo = 1000;
    var startTime;
    var beatTolerance = 500;
    var chkearly;
    var chklate;
    var pressedFlag = false;
    var colors = {
        red:"#DF151A",
        orange:"#FD8603",
        yellow:"#F4F328",
        green:"#00DA3C",
        blue:"#00CBE7"
    }
    var colorByNumber = [
        "#DF151A",
        "#FD8603",
        "#F4F328",
        "#00DA3C",
        "#00CBE7"
    ]

 
    function canGame() {
        return "getGamepads" in navigator;
    }
 
//This is when there is a gamepad plugged in
    //function reportOnGamepad() {
    //    var retArr = [];
    //    var gp = navigator.getGamepads()[0];
 	//   if(((Date.now() - startTime) % tempo) > beatTolerance)
	//   {
	//	//not on beat
	//	return false;
	//   }
    //    for(var i=0;i<gp.buttons.length;i++) {
    //        if(gp.buttons[i].pressed){
    //            retArr.push(i);
    //        } 
    //    }
    //    retArr.push(gp.axes[2] - 2)
    //    console.log(retArr);
    //    GenerateText(retArr);
    //}
    
    //$(document).keypress(function (e) {
    //    console.log("pressed")
//});
//    button colors 
//red:DF151A
//orange:FD8603
//yellow:F4F328
//green:00DA3C
//blue:00CBE7


    function AddScore()
    {
        $("#gamepadPrompt").text($("#gamepadPrompt").text() + " " + GetTheNextWord(lastWord))
        
    }
    function RemoveScore()
    {

    }

    document.addEventListener('keypress', function () {
        if($("circle").attr("stroke-width") > 10)
        {
            AddScore();
            $("circle").css("stroke", colorByNumber[Math.floor(Math.random() * 5)])
        }
        else
        {
            console.log('false')
        }
    })

    function reportOnGamepad() {
        var retArr = [];
        var gp = navigator.getGamepads()[0];
 	   if(((Date.now() - startTime) % tempo) > beatTolerance)
	   {
		//not on beat
		return false;
	   }
        for(var i=0;i<gp.buttons.length;i++) {
            if(gp.buttons[i].pressed){
                retArr.push(i);
            } 
        }
        retArr.push(gp.axes[2] - 2)
        console.log(retArr);
        GenerateText(retArr);
    }

    function CheckEarly() {
        if (pressedFlag)
        {
            console.log("early")
        }
        pressedFlag = false;
    }

        function CheckLate(){
            if(pressedFlag)
            {
                console.log("good")
            }
            pressedFlag = false;
        }

    
    function GenerateText(gamePadButtons)
    {
        if(!gamePadButtons.indexOf(0))//green button
        {
	    lastWord = GetTheNextWord(lastWord);
            $("#gamepadDisplay").html($("#gamepadDisplay").html()+ lastWord);
        }
        if(!gamePadButtons.indexOf(1))//green button
        {
            console.log("red button")
        }
    }
 
    $(document).ready(function() {
 
        if(canGame()) {
 
            var prompt = "To begin using your gamepad, connect it and press any button!";
            $("#gamepadPrompt").text(prompt);
 
            $(window).on("gamepadconnected", function() {
                hasGP = true;
                $("#gamepadPrompt").html("Gamepad connected!");
                console.log("connection event");
			startTime = Date.now();
                repGP = window.setInterval(reportOnGamepad,50);
            });
 
            $(window).on("gamepaddisconnected", function() {
                console.log("disconnection event");
                $("#gamepadPrompt").text(prompt);
                window.clearInterval(repGP);
            });
 
            //setup an interval for Chrome
            //var checkGP = window.setInterval(function() {
            //    console.log('checkGP');
            //    if(navigator.getGamepads()[0]) {
            //        if(!hasGP) $(window).trigger("gamepadconnected");
            //        window.clearInterval(checkGP);
            //    }
            //}, 500);
        }

        //chkEarly = window.setInterval(CheckEarly, tempo);
        //window.setTimeout(function () { chkLate = window.setInterval(CheckLate, tempo); }, beatTolerance);


 
    });