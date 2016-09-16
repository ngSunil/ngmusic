import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import {Artist} from '../../artist'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  private searchStr: string;
  private searchRes: Artist[];
  constructor(private spotifyService: SpotifyService){}
  searchMusic(){
    this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
      console.log(res);
      this.searchRes = res.artists.items;
    })
  }
}
