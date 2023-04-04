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
    {codigo: 1 , nome: 'Pizza Calabresa'             , categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
    {codigo: 2 , nome: 'Pizza Portuguesa'            , categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
    {codigo: 3 , nome: 'Pizza Margherita'            , categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
    {codigo: 4 , nome: 'Pizza de Frango com Catupiry', categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
    {codigo: 5 , nome: 'Cagado de fome'              , categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
    {codigo: 6 , nome: 'Morte Súbita'                , categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
    {codigo: 7 , nome: 'The crazy cheddar'           , categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
    {codigo: 8 , nome: 'The grand burger'            , categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
    {codigo: 9 , nome: 'Pastel de forno'             , categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
    {codigo: 10, nome: 'Enroladinho de salsicha'     , categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
    {codigo: 11, nome: 'Presunto e queijo'           , categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
    {codigo: 12, nome: 'Bauru de frango'             , categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
    {codigo: 13, nome: 'X-Tudo'                      , categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
    {codigo: 14, nome: 'Cachorro-quente de calabresa', categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
    {codigo: 15, nome: 'Cachorro-quente de pernil'   , categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
    {codigo: 16, nome: 'Cachorro-quente de frango'   , categoria: 1, descricao: 'Pizza', valor: 20.00, imagens: ['pizza-1-1', 'pizza-1-2']},
  ]

  constructor(private navCrtl: NavController) {}

}
