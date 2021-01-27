function gerarCns() {
    let gerar0 = Math.floor(((Math.random() * 3) + 1));

    if (gerar0 == 3) {
        gerar0 = Math.floor(((Math.random() * 3) + 7));
    }

    let gerar1 = Math.floor(((Math.random() * 99999) + 1)).toString();
    let gerar2 = Math.floor(((Math.random() * 99999) + 1)).toString();

    let cns = gerar0 + `0${gerar1}`.substr(0, 5) + `0${gerar2}`.substr(0, 5);


    let soma = (parseInt(cns.substr(0, 1)) * 15) +
        (parseInt(cns.substr(1, 1)) * 14) +
        (parseInt(cns.substr(2, 1)) * 13) +
        (parseInt(cns.substr(3, 1)) * 12) +
        (parseInt(cns.substr(4, 1)) * 11) +
        (parseInt(cns.substr(5, 1)) * 10) +
        (parseInt(cns.substr(6, 1)) * 9) +
        (parseInt(cns.substr(7, 1)) * 8) +
        (parseInt(cns.substr(8, 1)) * 7) +
        (parseInt(cns.substr(9, 1)) * 6) +
        (parseInt(cns.substr(10, 1)) * 5);

    let resto = soma % 11;
    let dv = 11 - resto;

    dv = (dv == 11) ? 0 : dv;


    if (dv == 10) {
        soma = (parseInt(cns.substr(0, 1)) * 15) +
            (parseInt(cns.substr(1, 1)) * 14) +
            (parseInt(cns.substr(2, 1)) * 13) +
            (parseInt(cns.substr(3, 1)) * 12) +
            (parseInt(cns.substr(4, 1)) * 11) +
            (parseInt(cns.substr(5, 1)) * 10) +
            (parseInt(cns.substr(6, 1)) * 9) +
            (parseInt(cns.substr(7, 1)) * 8) +
            (parseInt(cns.substr(8, 1)) * 7) +
            (parseInt(cns.substr(9, 1)) * 6) +
            ((parseInt(cns.substr(10, 1)) * 5) + 2);

        resto = soma % 11;
        dv = 11 - resto;
        cns += '001' + dv.toString();
    }
    else {
        cns += '000' + dv.toString();
    }

    return cns;
}