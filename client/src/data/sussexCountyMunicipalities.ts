export interface Municipality {
  name: string;
  type: 'Town' | 'City' | 'Township';
  slug: string;
  url: string;
}

export const SUSSEX_COUNTY_MUNICIPALITIES: Municipality[] = [
  // Major Towns and Cities
  { name: 'Bethany Beach', type: 'Town', slug: 'bethany-beach', url: '/bethany-beach-golf-carts' },
  { name: 'Bethel', type: 'Town', slug: 'bethel', url: '/bethel-golf-carts' },
  { name: 'Blades', type: 'Town', slug: 'blades', url: '/blades-golf-carts' },
  { name: 'Bridgeville', type: 'Town', slug: 'bridgeville', url: '/bridgeville-golf-carts' },
  { name: 'Dagsboro', type: 'Town', slug: 'dagsboro', url: '/dagsboro-golf-carts' },
  { name: 'Delmar', type: 'Town', slug: 'delmar', url: '/delmar-golf-carts' },
  { name: 'Dewey Beach', type: 'Town', slug: 'dewey-beach', url: '/dewey-beach-golf-carts' },
  { name: 'Ellendale', type: 'Town', slug: 'ellendale', url: '/ellendale-golf-carts' },
  { name: 'Fenwick Island', type: 'Town', slug: 'fenwick-island', url: '/fenwick-island-golf-carts' },
  { name: 'Frankford', type: 'Town', slug: 'frankford', url: '/frankford-golf-carts' },
  { name: 'Georgetown', type: 'Town', slug: 'georgetown', url: '/georgetown-golf-carts' },
  { name: 'Greenwood', type: 'Town', slug: 'greenwood', url: '/greenwood-golf-carts' },
  { name: 'Henlopen Acres', type: 'Town', slug: 'henlopen-acres', url: '/henlopen-acres-golf-carts' },
  { name: 'Laurel', type: 'Town', slug: 'laurel', url: '/laurel-golf-carts' },
  { name: 'Lewes', type: 'City', slug: 'lewes', url: '/lewes-golf-carts' },
  { name: 'Milford', type: 'City', slug: 'milford', url: '/milford-golf-carts' },
  { name: 'Millsboro', type: 'Town', slug: 'millsboro', url: '/millsboro-golf-carts' },
  { name: 'Millville', type: 'Town', slug: 'millville', url: '/millville-golf-carts' },
  { name: 'Milton', type: 'Town', slug: 'milton', url: '/milton-golf-carts' },
  { name: 'Ocean View', type: 'Town', slug: 'ocean-view', url: '/ocean-view-golf-carts' },
  { name: 'Rehoboth Beach', type: 'City', slug: 'rehoboth-beach', url: '/rehoboth-beach-golf-carts' },
  { name: 'Seaford', type: 'City', slug: 'seaford', url: '/seaford-golf-carts' },
  { name: 'Selbyville', type: 'Town', slug: 'selbyville', url: '/selbyville-golf-carts' },
  { name: 'Slaughter Beach', type: 'Town', slug: 'slaughter-beach', url: '/slaughter-beach-golf-carts' },
  { name: 'South Bethany', type: 'Town', slug: 'south-bethany', url: '/south-bethany-golf-carts' },
];