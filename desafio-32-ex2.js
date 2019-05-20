let app = function(){

  return {
    init : function() {
    console.log('App init...');        
    this.loadInfo();        
    this.getCars();
    this.initEvents(); 
  },      
  getCars : function getCars() {
    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'http://localhost:3000/car', true);
    ajax.send();        
    ajax.addEventListener('readystatechange', this.getAllCars, false);
  },
  getAllCars : function getAllCars() {                
    if (this.readyState === 4 && this.status === 200) {
      let data = JSON.parse(this.responseText); 
      let $tbody = $('tbody').get();          
      let $fragment = document.createDocumentFragment();       
      for(let item in data) {                 
        let $tr = document.createElement('tr');
        let $image = document.createElement('img');
        let $tdImage = document.createElement('td');
        let $tdMarca = document.createElement('td');
        let $tdModelo = document.createElement('td');
        let $tdAno = document.createElement('td');
        let $tdPlaca = document.createElement('td');
        let $tdCor = document.createElement('td');
        let $tdRemove = document.createElement('td');
        let $btnRemove = document.createElement('button'); 
        $btnRemove.textContent = 'Remover';
        $tr.id = 'row_'+app.getRowNumber();
        $tdRemove.appendChild($btnRemove);
                    
        $image.setAttribute('src', data[item].imagem);
        $tdImage.appendChild($image);
        $tdMarca.textContent = data[item].marca;
        $tdModelo.textContent = data[item].modelo;
        $tdAno.textContent = data[item].ano;
        $tdPlaca.textContent = data[item].placa;
        $tdCor.textContent = data[item].cor;
        
        $tr.appendChild($tdImage);
        $tr.appendChild($tdMarca);
        $tr.appendChild($tdModelo);
        $tr.appendChild($tdAno);
        $tr.appendChild($tdPlaca);
        $tr.appendChild($tdCor);
        $tr.appendChild($tdRemove);
        
        $fragment.appendChild($tr);                       

        $tbody.appendChild($fragment);                    
      }        
      return $tbody;
    }        
  },
  handleFormSubmit : function handleFormSubmit(e) {
    e.preventDefault();
    var ajax = new XMLHttpRequest();        
    ajax.open('POST', 'http://localhost:3000/car');        
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.send(app.getCarQuery());                                 
    let $tbody = $('tbody').get();
    ajax.addEventListener('readystatechange', function(){
      if (this.readyState === 4 && this.status === 200){            
        $tbody.innerHTML = '';            
        console.log(app.getCars());
        $tbody.innerHTML = app.getCars();                                                                                                     
        alert('Inserido com sucesso!');            
      }        
    }, false);
  }

};


}
  