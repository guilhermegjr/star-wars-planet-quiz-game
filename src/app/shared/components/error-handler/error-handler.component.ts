import {
	Component,
	OnInit,
	Input,
	OnChanges,
	SimpleChanges,
	ChangeDetectorRef,
	ChangeDetectionStrategy,
	Output,
	EventEmitter,
} from '@angular/core';

@Component({
	selector: 'sw-error-handler',
	templateUrl: './error-handler.component.html',
	styleUrls: ['./error-handler.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorHandlerComponent implements OnInit, OnChanges {
	@Input() error: Error | any;
	@Output() onretry = new EventEmitter();

	constructor(private cdr: ChangeDetectorRef) {}
	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.error.currentValue) {
            // É necessário forçar o change detection para garantir
            // que erros fora do escopo, não impactem a apresentação
            // da mensagem de erro.
			this.cdr.detectChanges();
		}
	}
}
