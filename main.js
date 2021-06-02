var audio;
var previousItem;
function playAudio(item, url) {

    if (previousItem) {
        $(previousItem).html('play_arrow');
    }
    if (audio) {
        audio.pause();
    }

    if (previousItem != item) {
        $(item).html('pause');

        previousItem = item;
        audio = new Audio(url);
        audio.currentTime = 0;
        audio.play();

        audio.onended = function () {
            if (previousItem) {
                $(previousItem).html('play_arrow');
                previousItem = null;
            }
        };
    }
}

jQuery(document).ready(function ($) {
    $(document).ready(function () {

        // http://www.jsfuck.com/
        var pin = 123456;
        var enterCode = "";
        enterCode.toString();

        $("#numbers button").click(function () {

            var clickedNumber = $(this).text().toString();
            enterCode = enterCode + clickedNumber;
            var lengthCode = parseInt(enterCode.length);
            lengthCode--;
            $("#fields .numberfield:eq(" + lengthCode + ")").addClass("active");

            if (lengthCode == 5) {

                // Check the PIN
                if (enterCode == pin) {
                    // Right PIN!
                    $("#pincode").hide();
                    $("#menu").show();

                } else {
                    // Wrong PIN!
                    $("#fields").addClass("miss");
                    enterCode = "";
                    setTimeout(function () {
                        $("#fields .numberfield").removeClass("active");
                    }, 200);
                    setTimeout(function () {
                        $("#fields").removeClass("miss");
                    }, 500);

                }

            } else { }

        });

        var listElem = [
            { name: 'Tibeau Lambveret', audio: 'morse-RAYON_DE_SOLEIL.mp3' },
            { name: 'John Doe', audio: 'morse-BONJOUR.mp3' },
            { name: 'Alain Berset', audio: 'morse-RAYON_DE_SOLEIL.mp3' },
            { name: 'Jaques Rocher', audio: 'morse-RAYON_DE_SOLEIL.mp3' },
            { name: 'Nathalie Moller', audio: 'proutNathFabien.mp3' },
            { name: 'Clélia Jouvre', audio: 'morse-RAYON_DE_SOLEIL.mp3' },
            { name: 'Obi Wan', audio: 'morse-RAYON_DE_SOLEIL.mp3' },
        ]
        $.each(listElem, function (index, value) {
            $("#list-messages-audios").append(
                '<div class="list-item">' +
                '    <div class="item-person">' +
                '        <span class="material-icons">face</span>' +
                '        <span>' + value.name + '</span>' +
                '    </div>' +
                '    <div class="item-sound">' +
                '        <span class="material-icons" onclick="playAudio(this, \'audio/' + value.audio + '\')">play_arrow</span>' +
                '    </div>' +
                '</div>'
            );
        });

    });
});