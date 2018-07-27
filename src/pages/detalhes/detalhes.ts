import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TwdServiceProvider } from "../../providers/twd-service/twd-service";
import { Episode } from "../../models/episode";

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  public id;
  public obg: any;
  public episode: Episode;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public twdService: TwdServiceProvider
  ) {
    this.id = navParams.get("id");
    this.episode = new Episode();
    console.log('Id: ' + this.id);

    this.twdService.getEpisodeById(this.id).then(data => {
      this.obg = data;
      this.episode.id = this.obg.id;
      this.episode.name = this.obg.name;
      this.episode.airdate = this.obg.airdate;
      this.episode.summary = this.obg.summary;
      this.episode.thumb = this.obg.image.original;
      console.log('Id' + this.episode.id + ' Nome: ' + this.episode.name)
      console.log(this.episode);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }
}
