import { Component } from "@angular/core";
import { UserFormVm } from "../../application/vms/user-form.vm";
import { UserProfilePageFacade } from "../profile-page.facade";
import { CommonModule } from "@angular/common";
import { UserCardComponent } from "../components/user-card.component";
import { UserErrorComponent } from "../components/user-error.component";
import { ButtonComponent } from "../../../../shared/ui/button/button.component";
import { USER_PROVIDERS } from "../../user.providers";

@Component({
  selector: 'user-profile-page',
  templateUrl: './profile-page.component.html',
  providers: [
    UserProfilePageFacade,
    ...USER_PROVIDERS,
  ],
  standalone: true,
  imports: [
    CommonModule,
    UserCardComponent,
    UserErrorComponent,
    ButtonComponent
  ]
})
export class ProfilePageComponent {
  readonly vm$;

  constructor(private readonly facade: UserProfilePageFacade) {
    this.vm$ = facade.vm$;
  }

  update(form: UserFormVm) {
    console.log('SAVE EVENT', form);
    this.facade.submit(form);
  }
}
