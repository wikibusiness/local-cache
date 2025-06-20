import * as core from '@actions/core'
import {exec} from '../utils/cache'

async function run(): Promise<void> {
  try {
    core.info('Starting cache save process...')
    const cacheHit = core.getState('cache-hit')
    const key = core.getState('key')

    if (cacheHit === 'false') {
      const cachePath = core.getState('cache-path')
      const path = core.getState('path')

      await exec(`mkdir -p ${cachePath}`)
      const rsync = await exec(
        `rsync -a --ignore-existing ${path} ${cachePath}`
      )

      core.debug(rsync.stdout)
      if (rsync.stderr) core.error(rsync.stderr)
      if (!rsync.stderr) core.info(`Cache saved with key ${key}`)
    } else {
      core.info(`Cache hit on the key ${key}`)
      core.info(`,not saving cache`)
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
