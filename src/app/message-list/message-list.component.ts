import { Component, NgZone, ViewChild, OnInit,  OnDestroy, AfterViewInit, Input, ViewEncapsulation } from '@angular/core';
import {MatPaginator, MatTableDataSource , MatSort, MatMenu, MatCard} from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message } from '../model/index';
import { TwilioMessagePayload } from '../model/index';
import { UserService } from '../services/user.service';
import { MessageService } from '../services/message.service';
import { SmsMessageService } from '../services/smsmessage.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription , Observable} from 'rxjs';
import { SimpleTimer } from 'ng2-simple-timer';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./message-list.component.scss']
})

export class MessageListComponent implements OnInit,  AfterViewInit,  OnDestroy {
  public editRow: boolean;
  public showAttachment: boolean;
  public showSmsAttachment: boolean;
  displayedColumns = ['from', 'message',  'created', 'address', 'reply', 'close', 'attachment'];
  messageDataSource = new MatTableDataSource();
  SmsMessageDataSource = new MatTableDataSource();
  subscription: Subscription;
  selectedMessage: Message;
  selectedSmsMessage: Message;
  newMessage: Message;
  newSmsMessage: Message;
  messages: Message[] = [];
  smsMessages: Message[] = [];
  observableMessages: Observable<Message[]>;
  timerId: string;
  panelOpenState = false;
  smsMessageForm: FormGroup;
  faceBookMessageForm: FormGroup;


  @Input() name;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild('smsPaginator', {read: MatPaginator}) smsPaginator: MatPaginator;



  constructor(private messageService: MessageService, private smsMessageService: SmsMessageService,
    private toastr: ToastrService, private st: SimpleTimer,
    private modalService: NgbModal, private ngZone: NgZone) {
   }

   ngOnInit() {
    // get messages from secure api end point
 // this.subscription = this.messageService.getAll().subscribe(message => { this.messages = message; });
 this.SmsMessageDataSource.paginator =  this.smsPaginator;
 this.selectedMessage =  new Message();
 this.selectedSmsMessage =  new Message();
 this.findAll();
 this.findAllSms();
 this.st.newTimer('timeout', 5);
 this.timerId = this.st.subscribe('timeout', () => this.findAll());
 this.timerId = this.st.subscribe('timeout', () => this.findAllSms());

 }

   ngOnDestroy() {
    this.st.unsubscribe(this.timerId);
    console.log('calling ngOnDestroy');
  }

   open(content, message: Message) {
     this.selectedMessage = message;
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

   ngAfterViewInit() {
    this.messageDataSource.sort = this.sort;
    this.messageDataSource.paginator = this.paginator;
  }

  showAttachmentComponent(message: Message): void {
    this.selectedMessage = message;
    this.showAttachment = true;
  }

  showSmsAttachmentComponent(message: Message): void {
    this.selectedSmsMessage = message;
    this.showSmsAttachment = true;
  }

  onSelect(message: Message): void {
    this.faceBookMessageForm = this.createFormGroup();
    this.selectedMessage = message;
    this.newMessage = new Message();
    this.newMessage.threadId = this.selectedMessage.threadId;
    this.newMessage.messageId = this.selectedMessage.messageId;
    this.newMessage.threadStatus = 'open';
    this.newMessage.message = '';
    this.editRow = true;
    this.showAttachment = false;

    console.log(this.selectedMessage.message);
  }

  onSelectSms(message: Message): void {
    this.smsMessageForm = this.createFormGroup();
    this.selectedSmsMessage = message;
    this.newSmsMessage = new Message();
    this.newSmsMessage.threadId = this.selectedSmsMessage.threadId;
    this.newSmsMessage.messageId = this.selectedSmsMessage.messageId;
    this.newSmsMessage.from = this.selectedSmsMessage.from;
    this.newSmsMessage.threadStatus = 'open';
    this.newSmsMessage.message = '';
    this.editRow = true;
    this.showSmsAttachment = false;

    console.log(this.selectedSmsMessage.message);

  }

  createFormGroup() {

    return new FormGroup({

      replyMessage: new FormControl(),
      sentMessage: new FormControl()

      });
  }

  findAll() {

    this.messageService.getAll()
    .subscribe(messages => {
        this.messages = messages;
        this.messageDataSource.data = messages;
    });

  }

  findAllSms() {

    this.smsMessageService.getAll()
    .subscribe(smsMessages => {
        this.smsMessages = smsMessages;
        this.SmsMessageDataSource.data = smsMessages;
    });

  }



  applyMessageFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.messageDataSource.filter = filterValue;
  }

  closeThread(message: Message) {

    this.messageService.closeThread(message).subscribe(
      data => {
        this.toastr.success('Thread Closed Successfully', '', {
          timeOut: 2000,
        });
      },
      error => {
        this.toastr.success('Thread Close Error' + error, 'Thread Error', {
          timeOut: 2000,
        });
      });

      this.editRow = false;
      this.showSmsAttachment = false;
      this.findAll();

  }

  isObjectEmpty(val) {
    let rtn  = false;
    if (val === undefined || val === null) {
        rtn = true;
    }
  return rtn;
  }

  disableSmsReply(): boolean {
    let rtn  = false;
    if (!this.isObjectEmpty(this.selectedSmsMessage)) {
      rtn = this.selectedSmsMessage.direction === 'outbound-api';
    }

    return rtn;

  }

  showSmsIconRow(message: Message): boolean {
    console.log(message.direction);
    return message.direction === 'outbound-api';
  }

  showFbIcon(): boolean {
    return this.selectedMessage.from === 'FaceBook';
  }

  showFbIconRow(message: Message): boolean {
    console.log(message.from);
    return message.from === 'FaceBook';
  }

  showTwitterIconRow(message: Message): boolean {
    console.log(message.from);
    return message.from === 'Twitter';
  }
 // return (isMember ? "$2.00" : "$10.00");

  getClass(message: Message): string {
    return message.from === 'FaceBook' ? 'facebook' : 'wcso';
  }

  showFbIconRowEnabled(message: Message): boolean {
    // console.log(message.from);
    return true;
  }


  sendMessage() {

    this.toastr.info('Sending Message', '', {
      timeOut: 2000,
    });

    this.newMessage.message = this.faceBookMessageForm.controls.replyMessage.value;


    this.messageService.sendMessage(this.newMessage).subscribe(
      data => {
        this.toastr.success('Message Sent Successfully', '', {
          timeOut: 2000,
        });
    //    this.findAll();
      },
      error => {
        this.toastr.success('Message Error' + error, 'Message Error', {
          timeOut: 3000,
        });
      });

      this.editRow = false;

  }

  sendSmsMessage() {
    const smsMessagePayload: TwilioMessagePayload =  new TwilioMessagePayload();

    smsMessagePayload.to = this.newSmsMessage.from;
    smsMessagePayload.msg =  this.smsMessageForm.controls.replyMessage.value;


    this.toastr.info('Sending Message', '', {
      timeOut: 2000,
    });

    this.smsMessageService.sendMessage(smsMessagePayload).subscribe(
      data => {
        this.toastr.success('Message Sent Successfully', '', {
          timeOut: 2000,
        });
    //    this.findAll();
      },
      error => {
        this.toastr.success('Message Error' + error, 'Message Error', {
          timeOut: 3000,
        });
      });

      this.editRow = false;

  }

}
