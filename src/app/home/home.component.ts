import { Component, OnInit } from '@angular/core';
import {AnnonceService} from '../shared/service/annonce.service';
import {subscribeTo} from 'rxjs/internal-compatibility';
import {Annonce} from '../shared/interface/annonce.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public annonces!: Annonce[];

  constructor(private annonceService: AnnonceService) { }

  ngOnInit(): void {
    this.annonceService.findAll().subscribe(r => {
      this.annonces = r;
      console.log(this.annonces);
    });
  }

}
