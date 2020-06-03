import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/model/friend.class';
@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  friends: Friend[] = [];
  friend: Friend = new Friend();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.friends.push(this.friend);
    this.friend = new Friend();
  }
}
