import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { Router, ActivatedRoute } from '@angular/router';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.css']
})
export class CreditDetailComponent implements OnInit {

  credit: Credit = new Credit();
  title: string ='Credit-Detail';
  creditId: number = 0;

  constructor(private creditSvc: CreditService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

        //get the id from the route
        this.route.params.subscribe(parms => this.creditId = parms['id']);

        // get the credit for that creditId
        this.creditSvc.get(this.creditId).subscribe(jr => {
          this.credit = jr.data as Credit;
          console.log("Credit Found!  ",this.credit);
        });
  }

  delete() {
    this.creditSvc.delete(this.creditId).subscribe(jr => {
      if (jr.errors==null) {
        console.log(jr.data);
        this.router.navigateByUrl("/credit/list");
      }
      else {
        console.log("***Error deleting credit!", this.creditId, jr.errors);
      }
    });
  }

}
