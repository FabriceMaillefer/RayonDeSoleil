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
            { name: 'Tibeau Lambveret', audio: 'morse1.mp3' },
            { name: 'Tibeau2 Lambveret', audio: 'morse2.mp3' },
            { name: 'Tibeau3 Lambveret', audio: 'morse3.mp3' },
            { name: 'Tibeau4 Lambveret', audio: 'morse4.mp3' },
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
                '            <source src="' + value.audio + '" type="audio/mpeg">' +
                '        </audio>' +
                '    </div>' +
                '</div>'
            );
        });

    });
});