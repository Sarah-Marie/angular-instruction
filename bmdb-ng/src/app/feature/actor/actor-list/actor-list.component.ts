import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  title: string = "Actor-List";
  // actors will hold our list of actorss from the back end
  // will be one way bound on our html to provide a table view of actors
  actors: Actor[] = [];

  constructor(private actorSvc: ActorService) { }

  ngOnInit(): void {
    // call our actor service to populate the list of actors (p. 139)
    this.actorSvc.list().subscribe(
      jr => { 
        this.actors = jr.data as Actor []
        console.log("list of actors",this.actors);
      }
    );
  }

}
