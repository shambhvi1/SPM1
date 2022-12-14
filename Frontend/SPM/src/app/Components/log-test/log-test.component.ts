import { Component } from '@angular/core';
import { LogService } from 'src/app/services/log.service';


@Component({
  selector: 'app-log-test',
  templateUrl: './log-test.component.html',
  styleUrls: ['./log-test.component.css']
})
export class LogTestComponent  {

  constructor(private logger: LogService) { }

  testLog(): void {
    this.logger.log("Test the `log()` Method");
}
}
