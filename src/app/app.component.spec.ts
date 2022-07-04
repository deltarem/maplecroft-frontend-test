import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserModule, HttpClientModule ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'globe-demo'`, () => {
    expect(component.title).toEqual("globe-demo");
  });

  it(`country details box should have correct title`, () => {
    const scoreBox: HTMLElement = fixture.nativeElement.querySelector('.country-details');
    expect(scoreBox.textContent.trim()).toEqual(`Client's Risk Portfolio`);
  });

});
