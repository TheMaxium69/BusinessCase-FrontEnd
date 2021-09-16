import { Component, OnInit } from '@angular/core';
import {AnnonceService} from '../shared/service/annonce.service';
import {MarqueService} from '../shared/service/marque.service';
import {Annonce} from '../shared/interface/annonce.interface';
import {Marque} from '../shared/interface/marque.interface';
import {ModelService} from '../shared/service/model.service';
import {CarburantService} from '../shared/service/carburant.service';
import {Model} from '../shared/interface/model.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public annonces!: Annonce[];
  public annonce!: Annonce;
  public marques!: Marque[];
  public models!: Model[];
  public carburants!: any;
  public responce!: string;

  constructor(private modelService: ModelService, private carburantService: CarburantService,  private annonceService: AnnonceService, private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.annonceService.findAll().subscribe(r => {
      this.annonces = r;
      console.log(this.annonces);
    });

    this.marqueService.findAll().subscribe(r => {
      this.marques = r;
      console.log(this.marques);
    });

    this.modelService.findAll().subscribe(r => {
      this.models = r;
      console.log(this.models);
    });

    this.carburantService.findAll().subscribe(r => {
      this.carburants = r;
      console.log(this.carburants);
    });
  }

  show(id: number): void{
    this.annonceService.findOne(id).subscribe(r => {
      this.annonce = r;
      console.log(this.annonce);
    });

  }

  delete(id: number): void{
    this.annonceService.delete(id).subscribe(r => {
      this.responce = r;
      console.log(this.responce);
    });

  }

}
