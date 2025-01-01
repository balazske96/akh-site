interface IConcert {
  city: string;
  displayName: string;
  venue: string;
  date: string;
  ticketLink: string;
}

interface IWebshopProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  link: string;
}

interface IStreamingProvider {
  name: string;
  imageUrl: string;
  link: string;
}

interface ISiteLink {
  href: string;
  displayName: string;
}
