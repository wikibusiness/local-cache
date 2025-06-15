require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 797:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        throw new Error('🔥 This is a manual test error from v4.0.2');
        // core.warning('Starting cache restoration process...')
        // try {
        //   /*
        //     clean up caches
        //   */
        //   const cacheBase = core.getState('cache-base')
        //   const cleanKey = core.getInput('clean-key')
        //   const CLEAN_TIME = 7
        //   if (cleanKey) {
        //     await exec(
        //       `/bin/bash -c "find ${cacheBase} -maxdepth 1 -name '${cleanKey}*' -type d -atime +${CLEAN_TIME} -exec rm -rf {} +"`
        //     )
        //   }
        // } catch (error) {
        //   if (error instanceof Error) core.warning(error.message)
        // }
        // try {
        //   const key = core.getInput('key')
        //   const base = core.getInput('base')
        //   const path = core.getInput('path')
        //   const cacheBase = getCacheBase(base)
        //   const cachePath = getCachePath(key, base)
        //   checkKey(key)
        //   checkPaths([path])
        //   core.saveState('key', key)
        //   core.saveState('path', path)
        //   core.saveState('cache-base', cacheBase)
        //   core.saveState('cache-path', cachePath)
        //   await exec(`mkdir -p ${cacheBase}`)
        //   const find = await exec(
        //     `find ${cacheBase} -maxdepth 1 -name ${key} -type d`
        //   )
        //   const cacheHit = find.stdout ? true : false
        //   core.saveState('cache-hit', String(cacheHit))
        //   core.setOutput('cache-hit', String(cacheHit))
        //   core.info(`Path to cache: ${cachePath}`)
        //   core.debug(`Path: ${path}`)
        //   if (cacheHit === true) {
        //     const ln = await exec(
        //       `ln -s ${p.join(cachePath, path.split('/').slice(-1)[0])} ${path}`
        //     )
        //     core.debug(ln.stdout)
        //     if (ln.stderr) core.error(ln.stderr)
        //     if (!ln.stderr) core.info(`Cache restored with key ${key}`)
        //   } else {
        //     core.info(`Cache not found for ${key}`)
        //   }
        // } catch (error) {
        //   if (error instanceof Error) core.setFailed(error.message)
        // }
    });
}
run();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[797](0, __webpack_exports__);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map