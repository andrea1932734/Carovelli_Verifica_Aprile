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


