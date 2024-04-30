import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CustomOption } from 'src/app/models/customOption';

@Component({
  selector: 'app-custom-multiple-select',
  templateUrl: './custom-multiple-select.component.html',
  styleUrls: ['./custom-multiple-select.component.scss']
})
export class CustomMultipleSelectComponent implements OnChanges {
  @Input() bordered: boolean = false;
  @ViewChild('main') main: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    const targetElement = event.target as HTMLElement;
    if (this.dropdownStatus) {
      if (!this.main.nativeElement.contains(targetElement) &&
        this.dropdownStatus &&
        targetElement.id !== 'search-input-options') {
        this.dropdownStatus = false;
      }
    }
  }

  dropdownStatus: boolean = false;

  @Input() type: string;
  @Input() inicialValue: string = '';
  @Input() value: Array<CustomOption>;
  @Input() label: string;
  @Input() options: Array<CustomOption> = [];
  @Input() filteredOptions: Array<CustomOption> = [];
  @Input() disabled: boolean = false;
  @Input() titleGray: boolean = false;
  @Input() invalid: boolean = false;
  @Input() length: number;
  search
  empty

  @Output() selectOptionEmitter = new EventEmitter();

  constructor() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    const newValue = changes['inicialValue']?.currentValue;
    let customOption = this.options.find(c => c.description == newValue);
    if (customOption) this.selectOption(customOption, true);
    if (changes['options'].currentValue.length !== 0) {
      this.filteredOptions = changes['options'].currentValue;
    }
  }

  ngOnInit(): void {
    this.value = this.inicialValue as any;

    if (this.inicialValue) {
      let customOption = this.options.find(c => c.value === this.inicialValue);
      if (customOption) this.selectOption(customOption, true);
    }
  }

  openOptions() {
    if (this.dropdownStatus === true) {
      return;
    }
    if (this.disabled || this.options.length == 0) return;

    this.filteredOptions = this.options;

    this.search = this.getValue();
    setTimeout(() => {
      this.dropdownStatus = true;

      setTimeout(() => {
        const searchInput = document.getElementById('search-input-options');
        searchInput.focus();
      }, 1);
    }, 1);
  }

  selectOneOfMultiple(event: Event, option: CustomOption) {
    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;

    if (!Array.isArray(this.value)) this.value = [];

    if (isChecked) {
      this.value.push(option);
    } else {
      const optionIndex = this.value.findIndex(o => o.value === option.value);
      this.value.splice(optionIndex, 1);
      if (this.value.length === 0) this.value = this.inicialValue as any;
    }
  }

  selectAll() {
    const incomplete = this.options.filter(o => !o.selected).length > 0;
    if (incomplete) {
      this.options.map(o => o.selected = true);
      this.value = this.options;
    }
    else {
      this.options.map(o => o.selected = false);
      this.value = this.inicialValue as any;
    }
  }

  selectOption(customOption: CustomOption, ignore?: boolean) {
    this.selectOptionEmitter.emit({ ...customOption, ignore });
    this.value = [customOption];
    setTimeout(() => {
      this.dropdownStatus = false;
    }, 10);
  }

  getValue() {
    if (Array.isArray(this.value)) {
      return this.value.map(o => o.description)?.join(',');
    } else if (this.inicialValue) {
      return this.inicialValue;
    } else return this.value;

  }

  filterOptions() {
    const filteredSearch = this.search.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    this.filteredOptions = this.options.filter(option =>
      option.description
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .includes(filteredSearch));
        
    if (this.filteredOptions.length === 0) {
      this.empty = true;
    } else this.empty = false;
  }

}
