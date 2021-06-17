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
            { name: 'Tibeau Lambveret', phone: '033 057 24 25', audio: 'morse-3.mp3' },
            { name: 'John Doe', phone: '033 683 8108', audio: 'morse-BONJOUR.mp3' },
            { name: 'Alain Berset', phone: '033 175 57 77', audio: '2284.mp3' },
            { name: 'Jaques Rocher', phone: '034 485 85 48', audio: '1143.mp3' },
            { name: 'Piere Noël', phone: '033 484 11 02', audio: '2077.mp3' },
            { name: 'Tibeault Rojuan', phone: '033 223 18 58', audio: 'morse-9.mp3' },
            { name: 'Nathalie Moller', phone: '033 871 25 59', audio: 'proutNathFabien.mp3' },
            { name: 'Clélia Jouvre', phone: '033 741 73 78', audio: '2363.mp3' },
            { name: 'Tibeaut Fringant', phone: '033 183 72 39', audio: 'morse-RAYON_DE_SOLEIL.mp3' },
            { name: 'Obi Wan', phone: '033 293 31 78', audio: '2354.mp3' },

        ]
        $.each(listElem, function (index, value) {
            $("#list-messages-audios").append(
                '<div class="list-item">' +
                '    <div class="item-person">' +
                '        <span class="material-icons">face</span>' +
                '        <div class="item-person-name"><span>' + value.name + '</span>' +
                '        <i>' + value.phone + '</i></div>' +
                '    </div>' +
                '    <div class="item-sound">' +
                '        <span class="material-icons" onclick="playAudio(this, \'audio/' + value.audio + '\')">play_arrow</span>' +
                '    </div>' +
                '</div>'
            );
        });

    });
});