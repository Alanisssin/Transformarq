const btntodos = document.getElementById('btntodos');

const btnescritorios = document.getElementById('btnescritorios');
const escritorios = document.getElementById('escritorios');

const btncocinas = document.getElementById('btncocinas');
const cocinas = document.getElementById('cocinas');

const btnraks = document.getElementById('btnraks');
const raks = document.getElementById('raks');

const btnretails = document.getElementById('btnretails');
const retails = document.getElementById('retails');

btntodos.onclick = function(){
    btntodos.style.backgroundColor = '#dfa21e';
    btntodos.style.borderRadius ='10px';
    cocinas.style.display = 'flex';
    btnraks.style.backgroundColor = 'transparent';
    raks.style.display = 'flex';
    btnescritorios.style.backgroundColor = 'transparent';
    escritorios.style.display = 'flex';
    btnretails.style.backgroundColor = 'transparent';
    retails.style.display = 'flex';
    btncocinas.style.backgroundColor = 'transparent';
    cocinas.style.display = 'flex';
}

btncocinas.onclick = function(){
    btncocinas.style.backgroundColor = '#dfa21e';
    btncocinas.style.borderRadius ='10px';
    cocinas.style.display = 'flex';
    btntodos.style.backgroundColor = 'transparent';
    btnraks.style.backgroundColor = 'transparent';
    raks.style.display = 'none';
    btnescritorios.style.backgroundColor = 'transparent';
    escritorios.style.display = 'none';
    btnretails.style.backgroundColor = 'transparent';
    retails.style.display = 'none';
}

btnraks.onclick = function(){    
    btnraks.style.backgroundColor = '#dfa21e';
    btnraks.style.borderRadius ='10px';
    raks.style.display = 'flex';
    btntodos.style.backgroundColor = 'transparent';
    btncocinas.style.backgroundColor = 'transparent';
    cocinas.style.display = 'none';
    btnescritorios.style.backgroundColor = 'transparent';
    escritorios.style.display = 'none';
    btnretails.style.backgroundColor = 'transparent';
    retails.style.display = 'none';
}


btnescritorios.onclick = function(){
    btnescritorios.style.backgroundColor = '#dfa21e';
    btnescritorios.style.borderRadius ='10px';
    escritorios.style.display = 'flex';
    btntodos.style.backgroundColor = 'transparent';
    btnraks.style.backgroundColor = 'transparent';
    raks.style.display = 'none';
    btncocinas.style.backgroundColor = 'transparent';
    cocinas.style.display = 'none';
    btnretails.style.backgroundColor = 'transparent';
    retails.style.display = 'none';
}

btnretails.onclick = function(){
    btnretails.style.backgroundColor = '#dfa21e';
    btnretails.style.borderRadius ='10px';
    retails.style.display = 'flex';
    btntodos.style.backgroundColor = 'transparent';
    btnraks.style.backgroundColor = 'transparent';
    raks.style.display = 'none';
    btncocinas.style.backgroundColor = 'transparent';
    cocinas.style.display = 'none';
    btnescritorios.style.backgroundColor = 'transparent';
    escritorios.style.display = 'none';
    
}