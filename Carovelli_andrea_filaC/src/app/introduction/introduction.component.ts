import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {
  
  name = "inizio";
  clickBottone(link: string){
    window.open(link);
    
  }
  setBtn(nomeT: string){
    if(nomeT == "penna" ){
      this.name = "penna";
    }
    if(nomeT == "righello" ){
      this.name = "righello";
    }
    if(nomeT == "goniometro" ){
      this.name = "goniometro";
    }
    if(nomeT == "matita" ){
      this.name = "matita";
    }
    if(nomeT == "gomma" ){
      this.name = "gomma";
    }
    if(nomeT == "astuccio" ){
      this.name = "astuccio";
    }
    if(nomeT == "evidenziatore" ){
      this.name = "evidenziatore";
    }
  
  
  }

  articoli=[
    {nome:"penna",immagine:"data:image/jpeg;base64,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",costo:"100",categoria:"scrivere",quantita:"100"},
    {nome:"righello",immagine:"",costo:"100",categoria:"scrivere",quantita:"100"},
    {nome:"goniometro",immagine:"",costo:"100",categoria:"scrivere",quantita:"100"},
    {nome:"matita",immagine:"",costo:"100",categoria:"scrivere",quantita:"100"},
    {nome:"gomma",immagine:"",costo:"100",categoria:"scrivere",quantita:"100"},
    {nome:"astuccio",immagine:"",costo:"100",categoria:"scrivere",quantita:"100"},
    {nome:"evidenziatore",immagine:"",costo:"100",categoria:"scrivere",quantita:"100"},
  ]
  
  
}


