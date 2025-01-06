import * as migration_20250106_193036_init from './20250106_193036_init';

export const migrations = [
  {
    up: migration_20250106_193036_init.up,
    down: migration_20250106_193036_init.down,
    name: '20250106_193036_init'
  },
];
