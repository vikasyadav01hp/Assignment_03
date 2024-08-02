$(document).ready(function() {
    $('#aherf').on('click', function(event) {
        alert('Link clicked!');
    });

    $('#aherf').on('mouseenter', function() {
        $( this ).append( $( "<span> ***</span>" ) );
    });

    $('#aherf').on('mouseleave', function() {
        $( this ).find( "span" ).last().remove();
    });

    $('#aherf1').on('focus', function() {
        alert('Link focused!');
    });

    $('#aherf1').on('blur', function() {
        alert('Link blur!');
    });
});