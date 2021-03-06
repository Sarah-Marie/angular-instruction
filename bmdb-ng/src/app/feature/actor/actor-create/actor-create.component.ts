import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-create',
  templateUrl: '../actor-maint-shared/actor-maint.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {

  title: string = "Actor-Create";
  actor: Actor = new Actor();
  submitBtnTitle: string = "Create";

  constructor(private actorSvc: ActorService,
    private router: Router) { }

  ngOnInit(): void {
    //do nothing because creating a new instance of something and user will fill in fields.
  }

  save() {
    this.actorSvc.create(this.actor).subscribe(jr => {
      //if jr.errors is null, save was successful
      if (jr.errors==null) {
        //success
        this.router.navigateByUrl("/actor/list");
      }
      else {
        console.log("***Error creating new actor:", this.actor, jr.errors);
      }
    }

    );
  }

}
