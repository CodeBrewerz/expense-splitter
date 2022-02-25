import { NhostClient } from '@nhost/nhost-js';
import { createContext } from 'react';

const nhost = new NhostClient({
    backendUrl: 'https://fytcssmgfmprizwxxnyb.nhost.run'
});

const NHostClientContext = createContext(nhost);

export default NHostClientContext;