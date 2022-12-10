window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    


        const $ = e => document.getElementById(e)


        let formAdd = $('form-add');
        const elements = formAdd.elements;
        console.log(elements);

        const cleanError = (elements) => {
            $(elements).innerHTML = null;
          };

        const msgError = (elements, msg) => {
            $(elements).innerHTML = msg;
        };

    
    
        
        $('title').addEventListener('blur', function(e){
            switch (true) {
                case !this.value.trim():
                    msgError("titleMsg","El titulo es obligatorio",e);
                    break;
                case this.value.trim().length < 3:
                    msgError('titleMsg', 'El titulo debe tener al menos 3 caracteres', e)
                    break;
            
                default:
                    break;
            };
        });
        $('title').addEventListener('focus', function(e){
            cleanError('titleMsg', e)
        });


        $('rating').addEventListener('blur', function(e){
            switch (true) {
                case !this.value.trim():
                    msgError("ratingMsg","La calificacion es obligatoria",e);
                    break;
                case this.value <= 0:
                    msgError('ratingMsg', 'Debe ingresar un numero entre 1 y 10', e)
                    break;
            
                default:
                    break;
            };
        });
        $('rating').addEventListener('focus', function(e){
            cleanError('ratingMsg', e)
        });


        $('awards').addEventListener('blur', function(e){
            switch (true) {
                case !this.value.trim():
                    msgError("awardsMsg","El premio es obligatorio",e);
                    break;
                case this.value <= 0:
                    msgError('awardsMsg', 'Debe ingresar un numero entre 1 y 10', e)
                    break;
            
                default:
                    break;
            };
        });
        $('awards').addEventListener('focus', function(e){
            cleanError('awardsMsg', e)
        });
        

        $('release_date').addEventListener('blur', function(e){
            switch (true) {
                case !this.value.trim():
                    msgError("releaseDateMsg","La fecha es obligatoria",e);
                    break;
                default:
                    break;
            };
        });
        $('release_date').addEventListener('focus', function(e){
            cleanError('releaseDateMsg', e)
        });


        $('length').addEventListener('blur', function(e){
            switch (true) {
                case !this.value.trim():
                    msgError("lengthMsg","La duracion es obligatoria",e);
                    break;
                    case this.value <= 59:
                    msgError('lengthMsg', 'Debe ingresar un numero entre 60 y 360', e)
                    break;
                default:
                    break;
            };
        });
        $('length').addEventListener('focus', function(e){
            cleanError('lengthMsg', e)
        });


        $('genre_id').addEventListener('blur', function(e){
            switch (true) {
                case !this.value.trim():
                    msgError("genreMsg","El genero es obligatorio",e);
                    break;
                default:
                    break;
            };
        });
        $('genre_id').addEventListener('focus', function(e){
            cleanError('genreMsg', e)
        });

       


        formAdd.addEventListener('submit', (e)=>{
            
            let errores = [];

    
            if($('title').value == ""){
                errores.push('El campo titulo es obilgatorio');
            }else if($('title').value.length < 3) {
                errores.push('El campo titulo debe tener al menos 3 caracteres');
            } 
            

            if($('rating').value == ""){
                errores.push('El campo calificacion es obilgatorio');
            }else if($('rating').value <= 0) {
                errores.push('En el campo calificacion debe ingresar un numero entre 1 y 10');
            }


            if($('awards').value == ""){
                errores.push('El campo premio es obilgatorio');
            }else if($('awards').value <= 0) {
                errores.push('En el campo premio debe ingresar un numero entre 1 y 10');
            }

            if($('release_date').value == ""){
                errores.push('El campo fecha es obilgatorio');
            }

            if($('length').value == ""){
                errores.push('El campo duracion es obilgatorio');
            }

            if($('genre_id').value == ""){
                errores.push('El campo genero es obilgatorio');
            }




            let ulErrores = $('ulErrores');

            if(errores.length > 0){
                e.preventDefault();
                
                for (let i = 0; i < errores.length; i++) {
                   ulErrores.innerHTML += `${'<li>' + errores[i] + '</li>'}` ;
                   ulErrores.classList.add('alert-warning');
                
                }
            }else{
                ulErrores.innerHTML += 'La película se guardó satisfactoriamente';
            }

    });

}