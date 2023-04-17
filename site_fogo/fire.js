const PixelvetorFogo=[]
const fogowidth=2
const fogoHeigth=3


function  iniciar(){
    criarEstruturaFogo()
    renderizarFogo()
    

} 

function criarEstruturaFogo(){
    const numeroDePixel= fogowidth *fogoHeigth

    for(let i=0;i<numeroDePixel;i++){
        PixelvetorFogo[i]=0
    }

}

function calcularPropagacaoFogo(){

}
function renderizarFogo(){
    let html='<table cellpadding=0 cellspacing=0>'
    for(let row=0;row<fogoHeigth;row++){
        html+='<tr>'
            for(let column=0;column<fogowidth;column++){
                const indicePixel= column+(fogowidth*row)
                html+='<td>'
                html+= indicePixel
                html+='</td>'
            }
        html+='</tr>'
    }
    html+='</table>'
    document.querySelector('#fogoCanvas').innerHTML=html

}

iniciar()