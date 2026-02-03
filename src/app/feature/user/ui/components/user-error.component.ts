import { Component, Input } from "@angular/core";
import { UserError } from "../../application/user.error";
import { CommonModule } from "@angular/common";
import { userErrorToMessage } from "./user-error.mapper";

@Component({
    selector: 'user-error',
    templateUrl: './user-error.component.html',
    imports: [
        CommonModule,
    ]
})
export class UserErrorComponent {
  @Input({ required: true }) error!: UserError;

  get message(): string {
    return userErrorToMessage(this.error);
  }
}