jQuery(document).ready(function ($) {
    $(document).ready(function () {

        // http://www.jsfuck.com/
        var pin = 1;
        var enterCode = "";
        enterCode.toString();

        $("#numbers button").click(function () {

            var clickedNumber = $(this).text().toString();
            enterCode = enterCode + clickedNumber;
            var lengthCode = parseInt(enterCode.length);
            lengthCode--;
            $("#fields .numberfield:eq(" + lengthCode + ")").addClass("active");

            if (lengthCode == 0) {

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
            { name: 'Anne Jaquet', audio: 'morse-RAYON_DE_SOLEIL.mp3' },
            { name: 'Clélia Jouve', audio: 'morse-RAYON_DE_SOLEIL.mp3' },
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
                '        <audio controls>' +
                '            <source src="audio/' + value.audio + '" type="audio/mpeg">' +
                '        </audio>' +
                '    </div>' +
                '</div>'
            );
        });

    });
});