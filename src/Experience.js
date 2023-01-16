import { Physics, Debug } from '@react-three/rapier'
import { Level } from './Level.js'
// import Effects from './Effects.js'
import Lights from './Lights.js'
import Player from './Player.js'

import useGame from './stores/useGame.js'

export default function Experience() {

    const blocksCount = useGame((state) => state.blocksCount)
    const blocksSeed = useGame((state) => state.blocksSeed)

    return <>
        <color args={['#bdedfc']} attach="background" />

        <Physics >
            {/* <Debug /> */}
            <Lights />
            <Level count={blocksCount} seed={blocksSeed} />
            <Player />
        </Physics>

        {/* <Effects /> */}
    </>
}