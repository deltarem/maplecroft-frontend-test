import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { GlobeService } from './globe.service';

describe('GlobeService', () => {
  let httpTestingController: HttpTestingController;
  let service: GlobeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GlobeService]
      
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(GlobeService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of globe data object when getGlobeData method was called', () => {
    const mockGlobeObjects = {
      FR: { score: 7.32, selected: true, entitled: true, dataAvailable: true },
      BR: { score: 4.51, selected: false, entitled: true, dataAvailable: true }
    }

    service.getGlobeData().subscribe(globeData => {
      expect(globeData).toEqual(mockGlobeObjects);
      expect(globeData['FR'].selected).toBeTruthy();
    });

    const req = httpTestingController.expectOne(environment.apiUrl + 'data.json');

    expect(req.request.method).toEqual('GET');

    req.flush(mockGlobeObjects);
  })
});
