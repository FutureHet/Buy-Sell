import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions, NgxGalleryModule } from '@kolkov/ngx-gallery';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId!: number;
  property = new Property();
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private housingService : HousingService
  ) { }

  ngOnInit() {

    this.propertyId = Number(this.route.snapshot.params['id']);
    this.route.data.subscribe(
      (data: any) => {
        this.property = data['prp'];
      }
    );

    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = Number(params['id']);
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: any) => {
    //         this.property = data;
    //       }, error => this.router.navigate(['/'])
    //     );
    //   }
    // )

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },

    ];

    this.galleryImages = [
      {
        small: "https://www.wallpapers4u.org/wp-content/uploads/country_house_coast_interior_design_look_sea_53916_1920x1080-450x253.jpg",
        medium: 'https://www.wallpapers4u.org/wp-content/uploads/country_house_coast_interior_design_look_sea_53916_1920x1080-450x253.jpg',
        big: 'https://www.wallpapers4u.org/wp-content/uploads/country_house_coast_interior_design_look_sea_53916_1920x1080-450x253.jpg'
      },
      {
        small: "https://mcdn.wallpapersafari.com/medium/3/68/yt46Xi.jpg",
        medium: "https://mcdn.wallpapersafari.com/medium/3/68/yt46Xi.jpg",
        big: "https://mcdn.wallpapersafari.com/medium/3/68/yt46Xi.jpg"
      },
      {
        small: "https://www.wallpapers4u.org/wp-content/uploads/house_room_interior_sofa_white_7854_1920x1080.jpg",
        medium: "https://www.wallpapers4u.org/wp-content/uploads/house_room_interior_sofa_white_7854_1920x1080.jpg",
        big: "https://www.wallpapers4u.org/wp-content/uploads/house_room_interior_sofa_white_7854_1920x1080.jpg"
      },
      {
        small: "https://www.wallpapers4u.org/wp-content/uploads/balcony_sofas_interior_design_apartment_room_suite_sea_ocean_landscape_penthouse_desk_tv_31421_1920x1080-450x253.jpg",
        medium: "https://www.wallpapers4u.org/wp-content/uploads/balcony_sofas_interior_design_apartment_room_suite_sea_ocean_landscape_penthouse_desk_tv_31421_1920x1080-450x253.jpg",
        big: "https://www.wallpapers4u.org/wp-content/uploads/balcony_sofas_interior_design_apartment_room_suite_sea_ocean_landscape_penthouse_desk_tv_31421_1920x1080-450x253.jpg"
      },
      {
        small: "https://www.wallpapers4u.org/wp-content/uploads/white_couch_interior_house_carpet_room_red_chair_stairs_furniture_pillows_candle_table_background_31416_1920x1080-450x253.jpg",
        medium: "https://www.wallpapers4u.org/wp-content/uploads/white_couch_interior_house_carpet_room_red_chair_stairs_furniture_pillows_candle_table_background_31416_1920x1080-450x253.jpg",
        big: "https://www.wallpapers4u.org/wp-content/uploads/white_couch_interior_house_carpet_room_red_chair_stairs_furniture_pillows_candle_table_background_31416_1920x1080-450x253.jpg"
      }
    ];

  }

}
