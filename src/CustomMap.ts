interface Mappable {
  location: {
    lat: number;
    long: number;
  };

  showMarkerContent() : string;
}

export class CustomMap {
  googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.long,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.showMarkerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
