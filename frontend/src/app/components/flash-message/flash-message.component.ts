import { Component, OnInit } from '@angular/core';
import { FlashMessageService } from '../../services/flash-message.service'

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent implements OnInit {

  message: any;

  constructor(
    private flashMessageService : FlashMessageService
  ) { }

  ngOnInit() {
    this.flashMessageService.getMessage().subscribe(message => { this.message });
  }

}
