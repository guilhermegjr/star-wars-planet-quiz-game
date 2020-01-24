import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';

@NgModule({
	imports: [CommonModule, FlexLayoutModule],
	declarations: [
		HeaderComponent,
		FooterComponent,
		ButtonComponent,
		LoadingComponent,
		ErrorHandlerComponent,
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		ButtonComponent,
		LoadingComponent,
		ErrorHandlerComponent,
		FlexLayoutModule,
	],
})
export class SharedModule {}
