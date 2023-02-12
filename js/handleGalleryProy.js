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
    btntodos.style.backgroundColor = 'rgba(223, 162, 30, .5)'
    btntodos.style.borderRadius ='10px';
    cocinas.style.display = 'grid';
    btnraks.style.backgroundColor = 'transparent';
    raks.style.display = 'grid';
    btnescritorios.style.backgroundColor = 'transparent';
    escritorios.style.display = 'grid';
    btnretails.style.backgroundColor = 'transparent';
    retails.style.display = 'grid';
    btncocinas.style.backgroundColor = 'transparent';
    cocinas.style.display = 'grid';
}

btncocinas.onclick = function(){
    btncocinas.style.backgroundColor = 'rgba(223, 162, 30, .5)'
    btncocinas.style.borderRadius ='10px';
    cocinas.style.display = 'grid';
    btntodos.style.backgroundColor = 'transparent';
    btnraks.style.backgroundColor = 'transparent';
    raks.style.display = 'none';
    btnescritorios.style.backgroundColor = 'transparent';
    escritorios.style.display = 'none';
    btnretails.style.backgroundColor = 'transparent';
    retails.style.display = 'none';
}

btnraks.onclick = function(){    
    btnraks.style.backgroundColor = 'rgba(223, 162, 30, .5)'
    btnraks.style.borderRadius ='10px';
    raks.style.display = 'grid';
    btntodos.style.backgroundColor = 'transparent';
    btncocinas.style.backgroundColor = 'transparent';
    cocinas.style.display = 'none';
    btnescritorios.style.backgroundColor = 'transparent';
    escritorios.style.display = 'none';
    btnretails.style.backgroundColor = 'transparent';
    retails.style.display = 'none';
}


btnescritorios.onclick = function(){
    btnescritorios.style.backgroundColor = 'rgba(223, 162, 30, .5)'
    btnescritorios.style.borderRadius ='10px';
    escritorios.style.display = 'grid';
    btntodos.style.backgroundColor = 'transparent';
    btnraks.style.backgroundColor = 'transparent';
    raks.style.display = 'none';
    btncocinas.style.backgroundColor = 'transparent';
    cocinas.style.display = 'none';
    btnretails.style.backgroundColor = 'transparent';
    retails.style.display = 'none';
}

btnretails.onclick = function(){
    btnretails.style.backgroundColor = 'rgba(223, 162, 30, .5)'
    btnretails.style.borderRadius ='10px';
    retails.style.display = 'grid';
    btntodos.style.backgroundColor = 'transparent';
    btnraks.style.backgroundColor = 'transparent';
    raks.style.display = 'none';
    btncocinas.style.backgroundColor = 'transparent';
    cocinas.style.display = 'none';
    btnescritorios.style.backgroundColor = 'transparent';
    escritorios.style.display = 'none';
    
}