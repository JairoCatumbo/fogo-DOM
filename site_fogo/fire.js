const PixelvetorFogo=[]
const fogowidth=80
const fogoHeigth=60
const fireColorsPaletteRed = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}];
function  iniciar(){
    criarEstruturaFogo()
    fonteDoFogo()
    renderizarFogo() 
    
    setInterval(PropagacaoFogo,100)
} 

function criarEstruturaFogo(){
    const numeroDePixel= fogowidth *fogoHeigth

    for(let i=0;i<numeroDePixel;i++){
        PixelvetorFogo[i]=0
    }

}

function PropagacaoFogo(){
    for(let column=0;column<fogowidth;column++){
        for(let row=0;row<fogoHeigth;row++){
            const indicePixel= column+(fogowidth*row) 
            
            atualizarIntencidade(indicePixel)
        }
    }
    renderizarFogo()
}

function atualizarIntencidade(correntPixelIndex){
    const pixelDebaixo= correntPixelIndex +fogowidth
    if(pixelDebaixo>=fogowidth*fogoHeigth){
        return 
    }
    const desconto=Math.floor(Math.random()*2.5)
    const intencidadeDopixelDebaixo=PixelvetorFogo[pixelDebaixo]
    const novaIntencidade=intencidadeDopixelDebaixo-desconto>=0? intencidadeDopixelDebaixo-desconto:0
    PixelvetorFogo[correntPixelIndex-desconto]=novaIntencidade

}


function renderizarFogo(){
    debug=false
    let html='<table cellpadding=0 cellspacing=0>'
    for(let row=0;row<fogoHeigth;row++){
        html+='<tr>'
            for(let column=0;column<fogowidth;column++){
                const indicePixel= column+(fogowidth*row)
                const intencidadeFogo=PixelvetorFogo[indicePixel]

                if(debug===true){
                    html+='<td>'
                    html+=`<div class="pixel-index">${indicePixel}</div>`
                    html+=intencidadeFogo
                    html+='</td>'
                }else{
                    const color= fireColorsPaletteRed[intencidadeFogo]
                    const colorString=`${color.r},${color.g},${color.b}`
                    html+=`<td class="pixels" style="background-color:rgb(${colorString}) ">`
                    html+=`</td>`
                }

              
            }
        html+='</tr>'
    }
    html+='</table>'
    document.querySelector('#fogoCanvas').innerHTML=html

}

function fonteDoFogo(){
    for(let column=0;column<=fogowidth;column++){
        const ultimopixelindex=fogowidth*fogoHeigth
        const pixelIndex=(ultimopixelindex-fogowidth)+column

        PixelvetorFogo[pixelIndex]=36
    }
}

iniciar()