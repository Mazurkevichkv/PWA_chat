import "zone.js";
import "reflect-metadata";
import "hammerjs";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';

function main(): Promise<any> {

    return navigator.serviceWorker.register("test-worker.bundle.js", {
        scope: "/"
    }).then(() => {
        return platformBrowserDynamic().bootstrapModule(AppModule)
    })
        //.then(decorateModuleRef)
        .catch((err) => console.error(err));
}

export default main();
