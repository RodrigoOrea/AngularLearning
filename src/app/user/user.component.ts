import { Component, Input} from '@angular/core';
import { DUMMY_USERS } from '../users/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() avatar!: string
  @Input() name!: string
  onSelectUser() {
  }

  get imagePath(){
    return 'assets/users/' + this.avatar
  }
}
