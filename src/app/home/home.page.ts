import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public categorias = [
    {codigo: 1, nome: 'Pizzas'},
    {codigo: 2, nome: 'Hambúrgueres'},
    {codigo: 3, nome: 'Assados'},
    {codigo: 4, nome: 'Prensados'}
  ]

  public produtos = [
    {codigo: 1  , nome: 'Pizza Calabresa'              , categoria: 1, descricao: 'essa pizza é um clássico nas pizzarias brasileiras e é preparada com fatias finas de linguiça calabresa, queijo mussarela, molho de tomate e, às vezes, cebola fatiada. Alguns lugares podem adicionar outros ingredientes, como azeitonas ou pimentões, mas esses são os ingredientes básicos.'                                , valor: 10.00, imagens: ['pizza-1-1' , 'pizza-1-2' ]},
    {codigo: 2  , nome: 'Pizza Portuguesa'             , categoria: 1, descricao: 'essa pizza é uma das mais populares no Brasil e é composta por mussarela, presunto, cebola, ovos cozidos, azeitonas e fatias de tomate. Alguns lugares também podem adicionar pimentões ou outros ingredientes da culinária portuguesa, como bacalhau ou chouriço.'                                                             , valor: 20.00, imagens: ['pizza-2-1' , 'pizza-2-2' ]},
    {codigo: 3  , nome: 'Pizza Margherita'             , categoria: 1, descricao: 'essa é uma pizza clássica italiana e é feita com mussarela fresca, tomate e manjericão. A base da pizza é normalmente coberta com molho de tomate e, em seguida, são adicionados fatias de mussarela e rodelas de tomate. Depois de assada, a pizza é polvilhada com folhas de manjericão fresco.'                              , valor: 30.00, imagens: ['pizza-3-1' , 'pizza-3-2' ]},
    {codigo: 4  , nome: 'Pizza de Frango com Catupiry' , categoria: 1, descricao: 'essa pizza é uma criação brasileira e é feita com queijo catupiry, frango desfiado, cebola e mussarela. O catupiry é um queijo cremoso brasileiro e é adicionado em cima do molho de tomate. Em seguida, são adicionadas as outras coberturas e a pizza é assada até que o queijo esteja derretido e a crosta esteja crocante.' , valor: 40.00, imagens: ['pizza-4-1' , 'pizza-4-2' ]},
    {codigo: 5  , nome: 'Cagado de fome'               , categoria: 2, descricao: 'este hambúrguer é geralmente preparado com um hambúrguer grande de carne, queijo cheddar, bacon, alface, tomate e cebola. É um hambúrguer substancial e pode ser servido com molho barbecue ou maionese para adicionar ainda mais sabor.'                                                                                       , valor: 50.00, imagens: ['ham-1-1'   , 'ham-1-2'   ]},
    {codigo: 6  , nome: 'Morte Súbita'                 , categoria: 2, descricao: 'este hambúrguer é feito com um hambúrguer de carne, queijo provolone, cebola caramelizada, pimenta jalapeño, maionese e pão brioche. É conhecido por ser picante, devido à pimenta jalapeño, e tem um sabor rico e intenso.'                                                                                                    , valor: 60.00, imagens: ['ham-2-1'   , 'ham-2-2'   ]},
    {codigo: 7  , nome: 'The crazy cheddar'            , categoria: 2, descricao: 'este hambúrguer é coberto com queijo cheddar derretido, bacon crocante, molho de churrasco, alface e tomate. É um hambúrguer clássico americano com um toque de queijo cheddar extra e molho de churrasco para dar mais sabor.'                                                                                                 , valor: 20.00, imagens: ['ham-3-1'   , 'ham-3-2'   ]},
    {codigo: 8  , nome: 'The grand burger'             , categoria: 2, descricao: 'este hambúrguer é geralmente preparado com dois hambúrgueres de carne, queijo suíço, alface, tomate, picles, cebola e um molho especial. É um hambúrguer grande e saboroso, com um molho secreto que pode variar dependendo do restaurante. É geralmente servido com batatas fritas ou onion rings para uma refeição completa.' , valor: 20.00, imagens: ['ham-4-1'   , 'ham-4-2'   ]},
    {codigo: 9  , nome: 'Pastel de forno'              , categoria: 3, descricao: 'essa é uma variação do pastel tradicional, onde a massa é assada em vez de frita. É geralmente recheado com carne, queijo, frango ou palmito, e às vezes pode conter outros ingredientes, como cebola, tomate e azeitonas.'                                                                                                     , valor: 20.00, imagens: ['ass-1-1'   , 'ass-1-2'   ]},
    {codigo: 10 , nome: 'Enroladinho de salsicha'      , categoria: 3, descricao: 'esse é um salgado comum em lanchonetes e padarias brasileiras, feito com uma massa crocante enrolada em torno de uma salsicha. Pode ser servido com ketchup, mostarda ou outros molhos para mergulhar.'                                                                                                                         , valor: 20.00, imagens: ['ass-2-1'   , 'ass-2-2'   ]},
    {codigo: 11 , nome: 'Presunto e queijo'            , categoria: 3, descricao: 'esse é um salgado simples, feito com massa crocante e recheado com fatias de presunto e queijo. É geralmente um salgado popular para um lanche rápido ou para uma refeição leve.'                                                                                                                                               , valor: 20.00, imagens: ['ass-3-1'   , 'ass-3-2'   ]},
    {codigo: 12 , nome: 'Bauru de frango'              , categoria: 3, descricao: 'esse é um sanduíche de pão francês, recheado com frango desfiado, queijo, tomate e alface. É uma variação do clássico Bauru, que foi criado em São Paulo nos anos 1930, e é um lanche popular em todo o Brasil. Algumas variações podem incluir outros ingredientes, como bacon ou molho especial.'                             , valor: 20.00, imagens: ['ass-4-1'   , 'ass-4-2'   ]},
    {codigo: 13 , nome: 'X-Tudo'                       , categoria: 4, descricao: 'esse é um lanche muito popular no Brasil, que geralmente contém um hambúrguer, bacon, ovo, presunto, queijo, alface, tomate, milho, ervilha e molho especial. Tudo é prensado em um pão de cachorro-quente, resultando em um lanche deliciosamente compacto.'                                                                   , valor: 20.00, imagens: ['pre-1-1'   , 'pre-1-2'   ]},
    {codigo: 14 , nome: 'Cachorro-quente de calabresa' , categoria: 4, descricao: 'este lanche é feito com uma salsicha de calabresa, queijo derretido, cebola, pimentão e molho de tomate, tudo prensado em um pão de cachorro-quente. É um lanche saboroso e fácil de comer.'                                                                                                                                    , valor: 20.00, imagens: ['pre-2-1'   , 'pre-2-2'   ]},
    {codigo: 15 , nome: 'Cachorro-quente de pernil'    , categoria: 4, descricao: 'este lanche é feito com fatias de pernil assado, queijo derretido, cebola, tomate e molho de pimenta, tudo prensado em um pão de cachorro-quente. É um lanche com sabor marcante e uma ótima opção para quem gosta de carne de porco.'                                                                                          , valor: 20.00, imagens: ['pre-3-1'   , 'pre-3-2'   ]},
    {codigo: 16 , nome: 'Cachorro-quente de frango'    , categoria: 4, descricao: 'este lanche é feito com frango desfiado, queijo derretido, alface, tomate e molho de mostarda e mel, tudo prensado em um pão de cachorro-quente. É uma opção mais leve e saudável em comparação com os lanches prensados mais tradicionais.'                                                                                    , valor: 20.00, imagens: ['pre-4-1'   , 'pre-4-2'   ]},
  ]

  public slideOpts = {slidesPerView: 2}
  public pathImg = '../../assets/img';
  public selected = 0;
  public setSelected(codigoCategoria: number) {
    this.selected = codigoCategoria;
    this.produtos
    .filter(el => el.categoria == this.selected)
  }

  public setProduto(produto: any) {
    this.navCrtl.navigateForward('produto', {
      queryParams: { produto: produto}
    });
  }

  constructor(private navCrtl: NavController) {
    this.setSelected(1);
  }

}
