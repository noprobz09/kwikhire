
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlashMessageService } from '../../services/flash-message.service';
import { ISubscription, Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css']
})

export class FlashMessageComponent implements OnDestroy {

  private subscription: Subscription;
  message: any;

  constructor(
    private flashMessageService : FlashMessageService
  ) {}

  ngOnInit() { 
    this.subscription = this.flashMessageService.getMessage().subscribe(message => {this.message = message});
  }

  ngOnDestroy(): void{
    //unsubscribe on destroy to prevent memory leaks
    this.subscription.unsubscribe();
  }

}
