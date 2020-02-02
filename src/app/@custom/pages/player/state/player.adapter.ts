import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Player } from '../player.service';

export const adapter: EntityAdapter<Player> = createEntityAdapter<Player>();
