
export class DataService {

	resourceURI: string;
	apikey = "43634ab5f5b50782274a50ec7e7d9811";
	hash = "4761558e45170642234948dc70f24c20";
  	i = 0;
  	offset: any;

  	address = "";

  getAddress(type: string, resourceURI: any) {

  	if (type == "characters" && resourceURI == "none") {
  		this.resourceURI = "http://gateway.marvel.com/v1/public/characters"
  		this.offset = "&offset=" + this.i;
  	}
  	else if (type == "comic") {
  		this.resourceURI = resourceURI;
  		this.offset = "";
  	}

    this.address = this.resourceURI
    			   + "?ts=1"
                   + "&apikey=" + this.apikey 
                   + "&hash=" + this.hash
                   + this.offset;

    return this.address;

  }

  onNextPage(next: boolean) {

    if (next) {
      this.i = this.i + 20;
    }
    else if (!next && this.i > 0) { 
      this.i = this.i - 20 ;
    }

  }



}