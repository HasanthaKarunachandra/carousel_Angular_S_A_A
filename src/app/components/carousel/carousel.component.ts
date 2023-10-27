import { Component, HostListener, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  faChevronRight=faChevronRight;
  faChevronLeft =faChevronLeft;

  /*-------------------------------
      content start
--------------------------------*/
  public number1="01";
  public number2="02";
  public number3="03";
  public number4="04";
  public header1="Completely Free Account Creation";
  public header2="Universal Availability";
  public header3="24-Hour Customer Support";
  public header4="Flexible Advertisement Placement";
  public content1="We understand the importance of access to quality connections. That's why we offer completely free account creation, ensuring that finding love and companionship is accessible to everyone, regardless of financial barriers";
  public content2="TLove knows no boundaries, and neither do we. Our platform is universally available, connecting individuals from diverse backgrounds, cultures, and locations. Whether you're across town or across the globe, we bring you closer to your potential match.";
  public content3="We're dedicated to providing you with a seamless and secure experience. Our 24-hour customer support team is here to assist you whenever you need it. Have a question or need assistance? We're just a message away.";
  public content4="We believe in keeping our platform user-centric. Our flexible advertisement placement ensures that your experience remains enjoyable and uninterrupted. Your journey to love is our priority, and we're committed to providing a clutter-free environment.";
/*-------------------------------
      Content End
--------------------------------*/

  public getScreenWidth!: Number;
  public x:Number=567;
  currentIndex = 0;
  currentIndex1=1;
  currentIndex2=2;
  currentIndex3=3;

  constructor() { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    if(this.getScreenWidth < this.x){
      this.currentIndex = 3;
      this.currentIndex1=2;
      this.currentIndex2=1;
      this.currentIndex3=0;
    }else{

      
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = +window.innerWidth;
  }

  moveRight() {
    this.currentIndex++;
    this.currentIndex1++;
    this.currentIndex2++;
    this.currentIndex3++;
    if (this.currentIndex > 3) {
      this.currentIndex = 0;
    }else if(this.currentIndex1>3){
      this.currentIndex1=0;
    }else if(this.currentIndex2>3){
      this.currentIndex2=0;
    }else if(this.currentIndex3>3){
      this.currentIndex3=0;
    }
    
  }

  moveLift() {
    this.currentIndex--;
    this.currentIndex1--;
    this.currentIndex2--;
    this.currentIndex3--;
    if (this.currentIndex < 0) {
      this.currentIndex = 3;
    }else if(this.currentIndex1<0){
      this.currentIndex1=3;
    }
    else if(this.currentIndex2<0){
      this.currentIndex2=3
    }else if(this.currentIndex3<0){
      this.currentIndex3=3;
    }
  }
}
