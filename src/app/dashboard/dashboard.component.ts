import { AfterViewInit, ViewChild, Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
displayedColumns: string[] = ['Div', 'Date', 'AwayTeam', 'HomeTeam', 'FTHG', 'FTAG'];
season = [];

@ViewChild('paginator') paginator: MatPaginator;

  constructor( private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.getSeason();
  }

  getSeason(): any{
    this.teamsService.getSeason()
      .subscribe((data) => {
        this.season = data;
      });
  }

}
