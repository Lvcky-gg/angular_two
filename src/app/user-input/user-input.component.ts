import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  duration = '0';
  expectedReturn = '0';
  initialInvestment = '0';
  annualInvestment = '0';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: parseFloat(this.initialInvestment),
      annualInvestment: parseFloat(this.annualInvestment),
      expectedReturn: parseFloat(this.expectedReturn),
      duration: parseFloat(this.duration),
    });
  }
}
