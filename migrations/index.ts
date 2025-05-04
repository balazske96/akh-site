import * as migration_20250106_193036_init from './20250106_193036_init';
import * as migration_20250404_222825_concert_update from './20250404_222825_concert_update';
import * as migration_20250404_224222_concert_update_city_not_null from './20250404_224222_concert_update_city_not_null';
import * as migration_20250405_191035_responsive_concert_header from './20250405_191035_responsive_concert_header';
import * as migration_20250405_211141_create_contact_page from './20250405_211141_create_contact_page';
import * as migration_20250504_145853_main_page from './20250504_145853_main_page';

export const migrations = [
  {
    up: migration_20250106_193036_init.up,
    down: migration_20250106_193036_init.down,
    name: '20250106_193036_init',
  },
  {
    up: migration_20250404_222825_concert_update.up,
    down: migration_20250404_222825_concert_update.down,
    name: '20250404_222825_concert_update',
  },
  {
    up: migration_20250404_224222_concert_update_city_not_null.up,
    down: migration_20250404_224222_concert_update_city_not_null.down,
    name: '20250404_224222_concert_update_city_not_null',
  },
  {
    up: migration_20250405_191035_responsive_concert_header.up,
    down: migration_20250405_191035_responsive_concert_header.down,
    name: '20250405_191035_responsive_concert_header',
  },
  {
    up: migration_20250405_211141_create_contact_page.up,
    down: migration_20250405_211141_create_contact_page.down,
    name: '20250405_211141_create_contact_page',
  },
  {
    up: migration_20250504_145853_main_page.up,
    down: migration_20250504_145853_main_page.down,
    name: '20250504_145853_main_page',
  },
];
