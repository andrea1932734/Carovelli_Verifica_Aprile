import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
articoli=[
  {nome: "penna",immagine:"",costo:"3euro",categoria:"scrittura",quantita:"100"},
  {nome: "righello",immagine:"",costo:"5euro",categoria:"linee",quantita:"50"},
  {nome: "astuccio",immagine:"",costo:"10euro",categoria:"contenitore",quantita:"70"},
  {nome: "goniometro",immagine:"",costo:"7euro",categoria:"cerchi",quantita:"297"},
  {nome: "matita",immagine:"",costo:"1euro",categoria:"scrittura",quantita:"130"},
  {nome: "gomma",immagine:"",costo:"2euro",categoria:"cancellatura",quantita:"400"},
  {nome: "compasso",immagine:"",costo:"15euro",categoria:"cerchi",quantita:"100"},
]

  
}
