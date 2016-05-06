import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'panel',
    templateUrl: 'app/shared/panel.component.html'
})
export class PanelComponent {
    @Input() title: string;
    @Input() showFooter: boolean = true;
    @Output() backClicked: EventEmitter<any> = new EventEmitter();
    
}