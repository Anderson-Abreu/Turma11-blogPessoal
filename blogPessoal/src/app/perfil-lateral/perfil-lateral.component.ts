import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {
  nome: string;
  rede: string;
  end: string;
  constructor() { }

  ngOnInit(){
    this.nome='João'
    this.rede='facebook'
    if(this.rede=='facebook'){
      this.end='https://www.facebook.com/generationbrasil'
    }else if(this.rede=='instagram'){
      this.end='https://www.instagram.com/generationbrasil'
    }else{
      this.end='https://wwww.linkedin.com/school/generationbrasil'
    }
  }

}
