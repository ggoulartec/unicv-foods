import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage {

  public pathImg = '../../assets/img/';
  public quantidade = 0;

  public produto = {
    codigo: 0,
    nome: '',
    categoria: 0,
    descricao: '',
    valor: 0.00,
    imagens: [],
    visibled: false
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.produto = params['produto'];
    });
  }

  public formataValor(valor: any) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public increment(){
    this.quantidade += 1;
  }

  public decrement(){
    if(this.quantidade > 0){
      this.quantidade -= 1;
    }
  }
}
