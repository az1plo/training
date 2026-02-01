import { Component, Input, Output, EventEmitter } from "@angular/core";
import { UserFormVm } from "../../application/vms/user-form.vm";
import { UserVm } from "../../application/vms/user.vm";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../../../../shared/ui/button/button.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
  ],
})
export class UserCardComponent {
  @Input() user!: UserVm;
  @Output() save = new EventEmitter<UserFormVm>();

  form: UserFormVm = {
    email: '',
    age: '',
    agreedToTerms: false,
  };

  ngOnInit() {
    this.form = {
      email: this.user.email,
      age: this.user.age?.toString() ?? '',
      agreedToTerms: false,
    };
  }
}
