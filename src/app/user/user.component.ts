import { Component, Input, input, computed, Output, EventEmitter, output} from '@angular/core';
import { DUMMY_USERS } from '../users/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// type User = {
//   id:string;
//   avatar:string
//   name:string
// }

interface User {
  id:string;
  avatar:string
  name:string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input({required: true}) id!: string
  // @Input({required: true}) avatar!: string
  // @Input({required: true}) name!: string
  // @Output() select = new EventEmitter()

  @Input({required: true}) user!: User

  select = output<string>()
  selectName = output<string>()

  // avatar = input.required<string>();
  // name = input.required<string>();

  onSelectUser() {
    this.selectName.emit(this.user.id)
  }

  get imagePath() {
     return 'assets/users/' + this.user.avatar
   }

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar()
  // })
}
