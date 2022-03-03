import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CypherService } from './services/cypher.service';


@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    CypherService
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core modules in the AppModule only.`
      );
    }
  }
}
