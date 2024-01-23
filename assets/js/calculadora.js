function calcular (tipo,valor) {

    if (tipo === 'num' ){
        document.getElementById('resultado').value += valor
    } else if (tipo === 'acao' && valor ==='c') {
        document.getElementById('resultado').value = ''
    } else if ((tipo === 'acao' && valor ==='+') || (tipo === 'acao' && valor ==='-') || (tipo === 'acao' && valor ==='/') || (tipo === 'acao' && valor ==='*')|| (tipo === 'acao' && valor ==='.')) {
        document.getElementById('resultado').value += valor 
    } else if ((tipo === 'acao' && valor ==='=')) {
        let valorCampo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = valorCampo
    }
}