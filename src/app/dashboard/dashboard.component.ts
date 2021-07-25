import { AfterViewInit, ViewChild, Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
displayedColumns: string[] = ['Div', 'Date', 'AwayTeam', 'HomeTeam', 'FTHG', 'FTAG'];
season = new MatTableDataSource<any>();
@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor( private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.getSeason();
  }

  getSeason(): any{
    this.teamsService.getSeason()
      .subscribe((data) => {
        this.season.data = data;
        this.season.paginator = this.paginator;
        this.season.sort = this.sort;
      });
  }

}
