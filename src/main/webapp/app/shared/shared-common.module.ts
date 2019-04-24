import { NgModule } from '@angular/core';

import { MontibellerTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MontibellerTestSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MontibellerTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MontibellerTestSharedCommonModule {}
