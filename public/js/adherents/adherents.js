$(document).ready(function () {
    const dt = $('#adherentsDatatables').DataTable({
        "columnDefs": [{
            "searchable": false,
            "orderable": false,
            "className": "dt-center",
            "targets": 1
        },
        {
            "targets": 0,
            "visible": false,
            "searchable": false
        },
    ],
        "order": [[2, 'asc']]
    });
    $('#adherentsDatatables tbody').on('click', 'tr', function () {
        let data = dt.row( this ).data();
        window.location.href= '/adherents/' + data[0];
    } );
    $('#ajouter_adherent_form').submit((e) =>    {
        e.preventDefault();
        let adherent = {
            nom: $('#new-nom').val(),
            prenom: $('#new-prenom').val(),
            sexe: $('#new-sexe').val(),
            date_naissance: $('#new-date-naissance').val(),
            tel: $('#new-mobile').val(),
            email: $('#new-email').val(),
            adresse: $('#new-adresse').val(),
        }
        $.post('/adherents', {"adherent": adherent}, (a) => {
            location.reload();
        })
    });
});